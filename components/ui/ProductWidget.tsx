"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export type ProductWidgetVariant =
  | "session"
  | "guidance"
  | "confidence"
  | "efficiency"
  | "precision"
  | "trend"
  | "score"
  | "metric";

interface ProductWidgetProps {
  label: string;
  value: string;
  variant: ProductWidgetVariant;
  delay?: number;
  className?: string;
}

function accentFor(variant: ProductWidgetVariant) {
  if (variant === "guidance" || variant === "session") {
    return (
      <div className="mt-2 flex items-center gap-1">
        <span className="h-1 w-1 rounded-full bg-accent" />
        <span className="text-[8px] text-accent/70">Active</span>
      </div>
    );
  }
  if (variant === "metric" || variant === "efficiency" || variant === "trend") {
    return (
      <div className="mt-2 flex items-end gap-0.5" aria-hidden>
        {[4, 7, 5, 9].map((h, i) => (
          <div key={i} className="w-0.5 rounded-full bg-accent/40" style={{ height: h }} />
        ))}
      </div>
    );
  }
  return (
    <div className="mt-2 h-1 w-full rounded-full bg-white/[0.06]">
      <div className="h-full w-[88%] rounded-full bg-accent/60" />
    </div>
  );
}

export function ProductWidget({
  label,
  value,
  variant,
  delay = 0,
  className,
}: ProductWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn("absolute", className)}
    >
      <div className="w-[9.5rem] rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 backdrop-blur-md">
        <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
        <p className="mt-0.5 font-display text-sm font-bold text-foreground">{value}</p>
        {accentFor(variant)}
      </div>
    </motion.div>
  );
}
