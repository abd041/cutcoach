import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

export function getScrollOffset() {
  if (typeof window === "undefined") return 96;

  const paddingTop = parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop
  );
  if (!Number.isNaN(paddingTop) && paddingTop > 0) return paddingTop;

  const safeTop = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--safe-top")
  );
  const base = window.innerWidth >= 640 ? 96 : 88;
  return base + (Number.isNaN(safeTop) ? 0 : safeTop);
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export type ScrollAlign = "start" | "center";

export function scrollToElement(
  element: HTMLElement,
  options?: { align?: ScrollAlign; behavior?: ScrollBehavior }
) {
  const align = options?.align ?? "start";

  if (lenisInstance && !prefersReducedMotion()) {
    if (align === "center") {
      const rect = element.getBoundingClientRect();
      const top =
        rect.top + window.scrollY - (window.innerHeight - rect.height) / 2;
      lenisInstance.scrollTo(Math.max(0, top), {
        lock: false,
        duration: 1.15,
      });
    } else {
      lenisInstance.scrollTo(element, {
        offset: -getScrollOffset(),
        lock: false,
        duration: 1,
      });
    }
    return;
  }

  const behavior =
    options?.behavior ?? (prefersReducedMotion() ? "auto" : "smooth");
  const rect = element.getBoundingClientRect();

  let top: number;
  if (align === "center") {
    top =
      rect.top + window.scrollY - (window.innerHeight - rect.height) / 2;
  } else {
    top = rect.top + window.scrollY - getScrollOffset();
  }

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });
}

export function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target || !(target instanceof HTMLElement)) return;

  scrollToElement(target, { align: "start" });

  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
}
