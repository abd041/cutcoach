import { chromium, devices } from "playwright";

const BASE = process.env.VERIFY_URL || "http://localhost:3000";

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

const blockers = [];
const warnings = [];

function addBlocker(msg) {
  blockers.push(msg);
}

function addWarning(msg) {
  warnings.push(msg);
}

async function checkPage(page, scenario, viewport) {
  const label = `${viewport.name} | ${scenario.mode} | ${scenario.lang}`;
  const consoleErrors = [];
  const consoleHydration = [];
  const failedRequests = [];

  page.on("console", (msg) => {
    const text = msg.text();
    const type = msg.type();
    if (type === "error") {
      consoleErrors.push(text);
      if (/hydration/i.test(text)) consoleHydration.push(text);
    }
    if (type === "warning" && /hydration/i.test(text)) {
      consoleHydration.push(text);
    }
  });

  page.on("pageerror", (err) => {
    consoleErrors.push(String(err));
    if (/hydration/i.test(String(err))) consoleHydration.push(String(err));
  });

  page.on("requestfailed", (req) => {
    const url = req.url();
    if (url.includes("favicon")) return;
    failedRequests.push(`${req.failure()?.errorText || "failed"}: ${url}`);
  });

  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(`${BASE}${scenario.path}`, { waitUntil: "networkidle", timeout: 60000 });

  // Wait for entrance animation
  await page.waitForTimeout(2800);

  // Sections
  for (const id of ["main-content", "pricing", "faq"]) {
    const el = page.locator(`#${id}`);
    if ((await el.count()) === 0) addBlocker(`${label}: missing #${id}`);
  }

  // Broken images
  const brokenImages = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll("img"));
    return imgs
      .filter((img) => {
        const src = img.getAttribute("src") || "";
        if (!src || src.startsWith("data:")) return false;
        return img.complete && img.naturalWidth === 0;
      })
      .map((img) => img.getAttribute("src") || img.alt || "unknown");
  });

  if (brokenImages.length) {
    addBlocker(`${label}: broken images: ${brokenImages.slice(0, 5).join(", ")}`);
  }

  // Text overflow / overlap heuristic
  const layoutIssues = await page.evaluate(() => {
    const issues = [];
    const nodes = document.querySelectorAll("h1,h2,h3,p,button,a,span");
    nodes.forEach((node) => {
      const el = node;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      if (el.scrollWidth > el.clientWidth + 2) {
        const text = (el.textContent || "").trim().slice(0, 40);
        if (text) issues.push(`overflow: "${text}"`);
      }
    });
    // horizontal scroll
    if (document.documentElement.scrollWidth > window.innerWidth + 2) {
      issues.push("horizontal-scroll");
    }
    return issues.slice(0, 8);
  });

  if (layoutIssues.length) {
    addWarning(`${label}: layout notes: ${layoutIssues.join("; ")}`);
  }

  // Mode toggle
  if (scenario.mode === "client") {
    const pressed = await page.locator('button[aria-pressed="true"]').filter({ hasText: /Client|Cliente/i }).count();
    if (pressed === 0) {
      const anyClient = await page.getByRole("button", { name: /client/i }).count();
      if (anyClient === 0) addBlocker(`${label}: Client toggle not found`);
    }
  }

  if (consoleHydration.length) {
    addBlocker(`${label}: hydration console issues (${consoleHydration.length})`);
  }

  for (const err of consoleErrors) {
    if (/hydration/i.test(err)) continue;
    if (/app-store-badge|width or height modified|missing.*sizes|height value of 0/i.test(err)) {
      addWarning(`${label}: ${err.slice(0, 120)}`);
      continue;
    }
    if (/Encountered a script tag/i.test(err)) {
      addBlocker(`${label}: ${err.slice(0, 120)}`);
      continue;
    }
    addBlocker(`${label}: console error: ${err.slice(0, 160)}`);
  }

  for (const fail of failedRequests) {
    if (fail.includes("403") && fail.includes("seo")) {
      addWarning(`${label}: ${fail}`);
      continue;
    }
    addBlocker(`${label}: network failure: ${fail}`);
  }

  // Legal pages quick check
  if (viewport.name === "desktop" && scenario.lang === "en" && scenario.mode === "barber") {
    for (const path of ["/privacy", "/terms"]) {
      const p = await page.context().newPage();
      const fails = [];
      p.on("requestfailed", (r) => fails.push(r.url()));
      p.on("console", (m) => {
        if (m.type() === "error") fails.push(m.text());
      });
      await p.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
      if (fails.length) addBlocker(`legal ${path}: ${fails.slice(0, 3).join(" | ")}`);
      await p.close();
    }
  }
}

async function main() {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();

    for (const viewport of VIEWPORTS) {
      for (const scenario of SCENARIOS) {
        const page = await context.newPage();
        await checkPage(page, scenario, viewport);
        await page.close();
      }
    }

    await browser.close();

    console.log(JSON.stringify({ blockers, warnings }, null, 2));
    process.exit(blockers.length ? 1 : 0);
  } catch (err) {
    console.error("VERIFY_RUN_FAILED", err);
    process.exit(2);
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}

main();
