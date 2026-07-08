"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useRevealLatch } from "@/hooks/useRevealLatch";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Scroll-safe text reveal — opacity + slight y only (no overflow clip masks).
 */
export function TextReveal({
  children,
  className,
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const { ref, revealed } = useRevealLatch<HTMLElement>({ amount: 0.05 });

  return (
    <Tag ref={ref as never} className={cn("inline-block", className)}>
      <motion.span
        className="inline-block"
        initial={false}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{
          duration: 0.55,
          delay: revealed ? delay : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
