"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/cn";

interface HeroFloatingCardProps {
  title?: string;
  subtitle: string;
  className?: string;
  delay?: number;
  icon?: ReactNode;
  count?: number;
  countSuffix?: string;
  live?: boolean;
}

export function HeroFloatingCard({
  title,
  subtitle,
  className,
  delay = 0,
  icon,
  count,
  countSuffix = "",
  live = false,
}: HeroFloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 + delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "hero-glass-card absolute z-40 max-w-[9rem] px-3 py-2.5 sm:max-w-none sm:px-4 sm:py-3.5",
        className
      )}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 7 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <div className="flex items-start gap-2">
          {icon && (
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#4DDFFF]">
              {icon}
            </span>
          )}
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 font-display text-base font-bold tracking-tight text-white sm:text-lg">
              {live && (
                <span className="hero-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DDFFF]" />
              )}
              {typeof count === "number" ? (
                <AnimatedCounter
                  value={count}
                  suffix={countSuffix}
                  className="tabular-nums"
                />
              ) : (
                title
              )}
            </p>
            <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-[0.14em] text-white/50 sm:text-[10px] sm:tracking-[0.16em]">
              {subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
