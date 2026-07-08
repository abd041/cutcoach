"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useAudienceContent, useAudienceMode } from "@/lib/audience/AudienceModeProvider";
import { audienceModeTransition, audienceModeVariants } from "@/lib/audience-motion";

export function HeroEyebrow() {
  const { mode } = useAudienceMode();
  const { hero } = useAudienceContent();
  const v = audienceModeVariants(mode, "fade");

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={mode}
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={audienceModeTransition()}
        className="mb-6 sm:mb-10"
      >
        <div className="inline-flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
            <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-[#4DDFFF]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-[11px]">
              {hero.eyebrow}
            </span>
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
          <span className="inline-flex w-fit items-center rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-[11px] sm:text-white/35">
            {hero.eyebrowSecondary}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
