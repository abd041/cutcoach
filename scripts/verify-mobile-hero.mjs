import { chromium } from "playwright";

const BASE = process.env.VERIFY_URL || "http://localhost:3000";
const WIDTHS = [320, 360, 390, 412];

const browser = await chromium.launch({ headless: true });
let failures = 0;

for (const width of WIDTHS) {
  const page = await browser.newPage();
  await page.setViewportSize({ width, height: 844 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(3500);

  const result = await page.evaluate(() => {
    const vw = innerWidth;
    const docW = document.documentElement.scrollWidth;
    const phone = document.querySelector(".hero-phone-featured");
    const highlights = document.querySelector(".hero-glass-card");
    let overlap = false;
    if (phone && highlights) {
      const pr = phone.getBoundingClientRect();
      const hr = highlights.getBoundingClientRect();
      overlap = pr.bottom > hr.top + 4;
    }
    return { vw, docW, overlap, scrollX: window.scrollX };
  });

  const pass = !result.overlap && result.docW <= result.vw && result.scrollX === 0;
  console.log(
    `${pass ? "PASS" : "FAIL"} ${width}px docW=${result.docW} overlap=${result.overlap}`
  );
  if (!pass) failures++;
  await page.close();
}

await browser.close();
process.exit(failures > 0 ? 1 : 0);
