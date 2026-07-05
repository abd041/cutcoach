"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface HeroFloatingCardProps {
  title: string;
  subtitle: string;
  className?: string;
  delay?: number;
}

export function HeroFloatingCard({
  title,
  subtitle,
  className,
  delay = 0,
}: HeroFloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 + delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "hero-glass-card absolute z-40 max-w-[9.5rem] px-3 py-2.5 sm:max-w-none sm:px-5 sm:py-4",
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
        <p className="font-display text-base font-bold tracking-tight text-white sm:text-xl">
          {title}
        </p>
        <p className="mt-0.5 text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-white/50 sm:text-[11px] sm:tracking-[0.18em]">
          {subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
}
