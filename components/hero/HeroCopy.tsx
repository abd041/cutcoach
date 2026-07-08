"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroEyebrow } from "@/components/hero/HeroEyebrow";
import { HeroPlatformIntro } from "@/components/hero/HeroPlatformIntro";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useAudienceContent, useAudienceMode } from "@/lib/audience/AudienceModeProvider";
import { siteConfig } from "@/lib/data/content";
import { audienceModeTransition, audienceModeVariants } from "@/lib/audience-motion";
import {
  heroFadeUp,
  heroStagger,
  useHeroEntranceReady,
} from "@/components/hero/hero-motion";

export function HeroCopy() {
  const { mode } = useAudienceMode();
  const { hero } = useAudienceContent();
  const ready = useHeroEntranceReady();

  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      className="relative z-10 max-w-[640px] lg:pt-2"
    >
      <HeroPlatformIntro />

      <HeroEyebrow />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={mode}
          variants={heroStagger}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          exit={audienceModeVariants(mode, "fade").exit}
          transition={audienceModeTransition()}
        >
          <motion.h1
            variants={heroFadeUp}
            className="hero-premium-heading font-display font-extrabold tracking-[-0.03em] text-white"
          >
            <span className="block">{hero.headline}</span>
            <span className="hero-premium-gradient-text block">
              {hero.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            variants={heroFadeUp}
            className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-white/55 sm:mt-8 sm:text-base sm:leading-[1.8] lg:mt-10 lg:text-[17px]"
          >
            {hero.subtext.replace("--", "—")}
          </motion.p>

          <motion.div
            variants={heroFadeUp}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-11"
          >
            <MagneticButton
              href={siteConfig.appStoreUrl}
              external
              size="hero"
              className="w-full sm:w-auto"
            >
              {hero.cta}
            </MagneticButton>

            <Link
              href="#how-it-works"
              className="group inline-flex h-[50px] w-full items-center justify-center gap-2 text-[15px] font-medium text-white/55 transition-colors hover:text-white/90 sm:h-[52px] sm:w-auto sm:justify-start lg:h-[58px] lg:text-base"
            >
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-white/30">
                {hero.secondaryCta ?? "See How It Works"}
              </span>
              <ArrowRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-90" />
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
