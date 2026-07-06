"use client";

import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { setLenis, prefersReducedMotion } from "@/lib/scroll";
import { scrollCoordinator } from "@/lib/scroll-coordinator";

const lenisOptions = {
  lerp: 0.12,
  smoothWheel: true,
  syncTouch: false,
  touchMultiplier: 1,
  wheelMultiplier: 0.98,
  autoRaf: true,
  overscroll: true,
} as const;

function LenisRegistry() {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) setLenis(lenis);
    return () => setLenis(null);
  }, [lenis]);

  return null;
}

function LenisScrollBridge() {
  useLenis((lenis) => {
    scrollCoordinator.publish({
      scrollY: lenis.animatedScroll,
      progress: lenis.progress,
      velocity: lenis.velocity,
    });
  });

  return null;
}

function NativeScrollBridge() {
  useEffect(() => {
    let rafId = 0;

    const update = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollY = window.scrollY;
        const max = doc.scrollHeight - window.innerHeight;

        scrollCoordinator.publish({
          scrollY,
          progress: max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0,
          velocity: 0,
        });
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!prefersReducedMotion());
  }, []);

  if (!enabled) {
    return (
      <>
        <NativeScrollBridge />
        {children}
      </>
    );
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <LenisScrollBridge />
      <LenisRegistry />
      {children}
    </ReactLenis>
  );
}
