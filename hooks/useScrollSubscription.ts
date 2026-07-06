"use client";

import { useEffect, useRef } from "react";
import { scrollCoordinator, type ScrollState } from "@/lib/scroll-coordinator";

export function useScrollSubscription(
  handler: (state: ScrollState) => void,
  options: { priority?: "high" | "normal"; enabled?: boolean } = {}
) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (options.enabled === false) return;

    return scrollCoordinator.subscribe(
      (state) => handlerRef.current(state),
      { priority: options.priority ?? "normal" }
    );
  }, [options.enabled, options.priority]);
}
