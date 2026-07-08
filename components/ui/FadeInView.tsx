"use client";

import { motion, useReducedMotion } from "framer-motion";
import { REVEAL_EASE, REVEAL_VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Viewport margin override, e.g. "-40px" */
  margin?: string;
}

const directionMap = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeInView({
  children,
  className,
  delay = 0,
  direction = "up",
  margin,
}: FadeInViewProps) {
  const reduceMotion = useReducedMotion();
  const offset = directionMap[direction];

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ ...REVEAL_VIEWPORT, margin: margin ?? REVEAL_VIEWPORT.margin }}
      transition={{
        duration: 0.65,
        delay,
        ease: REVEAL_EASE,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
