import { chromium } from "playwright";

const BASE = process.env.VERIFY_URL || "http://localhost:3001";
const width = Number(process.env.WIDTH || 390);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width, height: 844 });
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
await page.waitForTimeout(3000);

const report = await page.evaluate(() => {
  const vw = innerWidth;
  const sectionSelectors = {
    Hero: "#main-content",
    "Trust Bar": "[data-section='trust-bar'], .trust-bar-shell, section:has(.trust-stat-chip)",
    Features: "#features",
    "How It Works": "#how-it-works",
    Compatibility: "#compatibility",
    Pricing: "#pricing",
    Testimonials: "#testimonials",
    FAQ: "#faq",
    Footer: "footer",
  };

  const sections = [];
  for (const [name, selector] of Object.entries(sectionSelectors)) {
    const root = document.querySelector(selector);
    if (!root) {
      sections.push({ name, found: false });
      continue;
    }
    let worst = null;
    for (const el of [root, ...root.querySelectorAll("*")]) {
      const r = el.getBoundingClientRect();
      const over = r.right - vw;
      if (over > 0.5 && (!worst || over > worst.over)) {
        worst = {
          over: Math.round(over * 10) / 10,
          right: Math.round(r.right),
          tag: el.tagName,
          cls: String(el.className || "").slice(0, 100),
        };
      }
    }
    sections.push({ name, found: true, worst });
  }

  const pageOffenders = [];
  for (const el of document.querySelectorAll("*")) {
    const r = el.getBoundingClientRect();
    const over = r.right - vw;
    if (over > 0.5 && over <= 20) {
      pageOffenders.push({
        over: Math.round(over * 10) / 10,
        tag: el.tagName,
        cls: String(el.className || "").slice(0, 100),
        parentSection:
          el.closest("section")?.id ||
          (el.closest("footer") ? "footer" : null) ||
          el.closest("[id]")?.id ||
          "unknown",
      });
    }
  }
  pageOffenders.sort((a, b) => b.over - a.over);

  return {
    vw,
    docW: document.documentElement.scrollWidth,
    scrollX: document.documentElement.scrollLeft,
    sections,
    pageOffenders: pageOffenders.slice(0, 20),
  };
});

console.log(JSON.stringify(report, null, 2));
await browser.close();
