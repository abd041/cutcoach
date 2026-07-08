import { chromium } from "playwright";

const BASE = process.env.VERIFY_URL || "http://localhost:3001";

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "mobile", width: 390, height: 844 },
];

const SCENARIOS = [
  { mode: "barber", lang: "en", path: "/" },
  { mode: "client", lang: "en", path: "/?mode=client" },
  { mode: "barber", lang: "es", path: "/?lang=es" },
  { mode: "client", lang: "es", path: "/?mode=client&lang=es" },
  { mode: "barber", lang: "fr", path: "/?lang=fr" },
  { mode: "client", lang: "fr", path: "/?mode=client&lang=fr" },
];

const blockers = new Set();

function ignorableConsole(text) {
  return /app-store|sizes|height value of 0|width or height modified/i.test(text);
}

function ignorableNetwork(url, err) {
  return (url.includes("_rsc=") && err.includes("ERR_ABORTED")) || url.includes("favicon");
}

async function verifyScenario(page, scenario, viewport) {
  const label = `${viewport.name} | ${scenario.mode} | ${scenario.lang}`;
  const hydration = [];

  page.on("console", (msg) => {
    const text = msg.text();
    if (msg.type() === "error" && !ignorableConsole(text)) {
      if (/hydration/i.test(text)) hydration.push(text);
      else if (/Encountered a script tag/i.test(text)) blockers.add(`${label}: ${text.slice(0, 120)}`);
      else blockers.add(`${label}: console error: ${text.slice(0, 120)}`);
    }
    if (msg.type() === "warning" && /hydration/i.test(text)) hydration.push(text);
  });

  page.on("pageerror", (err) => {
    const text = String(err);
    if (ignorableConsole(text)) return;
    if (/hydration/i.test(text)) hydration.push(text);
    else blockers.add(`${label}: pageerror: ${text.slice(0, 120)}`);
  });

  page.on("requestfailed", (req) => {
    const url = req.url();
    const err = req.failure()?.errorText || "";
    if (ignorableNetwork(url, err)) return;
    if (url.includes("seo") && err.includes("403")) return;
    blockers.add(`${label}: network failure: ${err} ${url}`);
  });

  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(`${BASE}${scenario.path}`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2800);

  const sections = await page.evaluate(() => ({
    hero: Boolean(document.querySelector("#main-content, .hero-premium")),
    nav: Boolean(document.querySelector("nav")),
    pricing: Boolean(document.querySelector("#pricing")),
    features: Boolean(document.querySelector("#features")),
    faq: Boolean(document.querySelector("#faq")),
    footer: Boolean(document.querySelector("footer")),
    cta: document.querySelectorAll(
      'a[href*="apps.apple"], a[href*="play.google"], img[alt*="App Store"], img[alt*="Google Play"]',
    ).length,
    modeToggle: document.querySelectorAll('button[aria-pressed]').length,
    langSelector: Boolean(document.querySelector('button[aria-label*="Language"], button[aria-label*="Idioma"], button[aria-label*="Langue"]')),
  }));

  if (!sections.hero) blockers.add(`${label}: missing hero`);
  if (!sections.nav) blockers.add(`${label}: missing navigation`);
  if (!sections.pricing) blockers.add(`${label}: missing pricing`);
  if (!sections.features) blockers.add(`${label}: missing features`);
  if (!sections.faq) blockers.add(`${label}: missing FAQ`);
  if (!sections.footer) blockers.add(`${label}: missing footer`);
  if (!sections.cta) blockers.add(`${label}: missing store CTAs`);
  if (sections.modeToggle < 2) blockers.add(`${label}: barber/client toggle incomplete`);
  if (!sections.langSelector) blockers.add(`${label}: language selector missing`);

  const broken = await page.evaluate(() =>
    [...document.querySelectorAll("img")]
      .filter((img) => img.complete && img.naturalWidth === 0 && img.src && !img.src.startsWith("data:"))
      .map((img) => img.src),
  );
  if (broken.length) blockers.add(`${label}: broken images: ${broken.slice(0, 3).join(", ")}`);

  if (viewport.name === "mobile") {
    const scrollX = await page.evaluate(async () => {
      window.scrollTo(50, 0);
      await new Promise((r) => setTimeout(r, 80));
      const x = window.scrollX;
      window.scrollTo(0, 0);
      return x;
    });
    if (scrollX > 0) {
      blockers.add(`${label}: horizontal page scroll (${scrollX}px)`);
    }
  }

  if (hydration.length) {
    blockers.add(`${label}: hydration issue: ${hydration[0].slice(0, 120)}`);
  }
}

async function verifyInteractivity(context) {
  const page = await context.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2800);

  await page.getByRole("button", { name: /^client$/i }).first().click();
  await page.waitForTimeout(1200);
  const mode = await page.evaluate(() => document.documentElement.getAttribute("data-audience-mode"));
  if (mode !== "client") blockers.add(`interactivity: client toggle failed (${mode})`);

  await page.getByRole("button", { name: /language|idioma|langue/i }).first().click();
  await page.getByRole("option", { name: /español|spanish/i }).click();
  await page.waitForTimeout(800);
  const lang = await page.evaluate(() => document.documentElement.lang);
  if (!lang.startsWith("es")) blockers.add(`interactivity: language switch failed (${lang})`);

  await page.close();
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  for (const viewport of VIEWPORTS) {
    for (const scenario of SCENARIOS) {
      const page = await context.newPage();
      await verifyScenario(page, scenario, viewport);
      await page.close();
    }
  }

  await verifyInteractivity(context);
  await browser.close();

  const list = [...blockers];
  console.log(JSON.stringify({ base: BASE, blockers: list }, null, 2));
  process.exit(list.length ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
