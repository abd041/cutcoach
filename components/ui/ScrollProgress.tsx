"use client";

import { useEffect, useRef } from "react";
import { scrollCoordinator } from "@/lib/scroll-coordinator";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return scrollCoordinator.subscribe(
      ({ progress }) => {
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress})`;
        }
      },
      { priority: "high" }
    );
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress-bar fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-light to-cyan-300"
      style={{ transform: "scaleX(0)" }}
      aria-hidden
    />
  );
}
