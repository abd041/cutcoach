"use client";

import { motion } from "framer-motion";
import { heroFadeUp } from "@/components/hero/hero-motion";

export function HeroEyebrow() {
  return (
    <motion.div variants={heroFadeUp} className="mb-6 sm:mb-10">
      <div className="inline-flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
          <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-[#4DDFFF]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-[11px]">
            AI Coaching for Real Sessions
          </span>
        </span>
        <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
        <span className="inline-flex w-fit items-center rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-[11px] sm:text-white/35">
          iOS + Smart Glasses
        </span>
      </div>
    </motion.div>
  );
}
