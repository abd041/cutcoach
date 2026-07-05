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

export function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - getScrollOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });

  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
}
