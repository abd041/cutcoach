import { chromium } from "playwright";

const BASE = process.env.VERIFY_URL || "http://localhost:3001";
const WIDTHS = [320, 360, 375, 390, 412, 768, 1024, 1440];

const browser = await chromium.launch({ headless: true });
const failures = [];

for (const width of WIDTHS) {
  const page = await browser.newPage();
  await page.setViewportSize({ width, height: 844 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);

  const result = await page.evaluate(async () => {
    const vw = innerWidth;
    window.scrollTo(50, 0);
    await new Promise((r) => setTimeout(r, 80));
    const scrollX = window.scrollX;
    window.scrollTo(0, 0);
    const docW = document.documentElement.scrollWidth;
    const offenders = [];
    for (const el of document.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      const over = r.right - vw;
      if (over > 0.5) {
        offenders.push({
          over: Math.round(over * 10) / 10,
          cls: String(el.className || "").slice(0, 80),
          section:
            el.closest("section")?.id ||
            (el.closest("footer") ? "footer" : "other"),
        });
      }
    }
    offenders.sort((a, b) => b.over - a.over);
    return { vw, docW, scrollX, top: offenders.slice(0, 3) };
  });

  const pass = result.docW <= result.vw && result.scrollX === 0;
  if (!pass) {
    failures.push({ width, ...result });
  } else {
    console.log(`PASS ${width}px (doc=${result.docW})`);
  }
  await page.close();
}

await browser.close();

if (failures.length) {
  console.log("\nFAILURES:");
  console.log(JSON.stringify(failures, null, 2));
  process.exit(1);
}

console.log("\nAll widths PASS");
