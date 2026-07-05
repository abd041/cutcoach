"use client";

import { useEffect } from "react";
import { prefersReducedMotion, scrollToHash } from "@/lib/scroll";

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest(
        "a[href^='#']"
      ) as HTMLAnchorElement | null;

      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#" || !document.querySelector(hash)) return;

      event.preventDefault();

      const runScroll = () => scrollToHash(hash);

      if (document.body.style.overflow === "hidden") {
        window.setTimeout(runScroll, 380);
      } else {
        runScroll();
      }
    };

    document.addEventListener("click", handleClick, { passive: false });

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
