"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useScrollSubscription } from "@/hooks/useScrollSubscription";

interface UseRevealLatchOptions {
  amount?: number;
  /** Skip intersection/scroll checks (e.g. reduced motion). */
  immediate?: boolean;
}

/**
 * Latches to revealed=true the first time content enters the viewport.
 * Once latched, it never returns to hidden — safe for scroll-driven sections.
 */
export function useRevealLatch<T extends HTMLElement = HTMLDivElement>({
  amount = 0.12,
  immediate = false,
}: UseRevealLatchOptions = {}) {
  const ref = useRef<T>(null);
  const latchedRef = useRef(immediate);
  const [revealed, setRevealed] = useState(immediate);

  const latch = useCallback(() => {
    if (latchedRef.current) return;
    latchedRef.current = true;
    setRevealed(true);
  }, []);

  const inView = useInView(ref, {
    once: true,
    amount,
    margin: "0px 0px -10% 0px",
  });

  useEffect(() => {
    if (immediate) latch();
  }, [immediate, latch]);

  useEffect(() => {
    if (inView) latch();
  }, [inView, latch]);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94 && rect.bottom > -48) {
      latch();
    }
  }, [latch]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useScrollSubscription(() => {
    if (latchedRef.current) return;
    measure();
  });

  return { ref, revealed };
}
