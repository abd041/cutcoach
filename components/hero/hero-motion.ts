"use client";

import { useEntranceReady } from "@/lib/entrance/EntranceProvider";

export const heroEase = [0.16, 1, 0.3, 1] as const;

export const heroStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const heroFadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: heroEase },
  },
};

export const heroFadeUpLate = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: heroEase, delay: 0.2 },
  },
};

/** Wait for entrance overlay before running hero Framer sequences. */
export function useHeroEntranceReady() {
  return useEntranceReady();
}
