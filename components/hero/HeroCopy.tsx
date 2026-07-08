"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroEyebrow } from "@/components/hero/HeroEyebrow";
import { TextReveal } from "@/components/ui/TextReveal";
import { AudienceModeToggle } from "@/components/ui/AudienceModeToggle";
import { useAudienceContent, useAudienceMode } from "@/lib/audience/AudienceModeProvider";
import { siteConfig } from "@/lib/data/content";
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
      <motion.div variants={heroFadeUp} className="mb-5 sm:mb-6 lg:hidden">
        <AudienceModeToggle size="hero" />
      </motion.div>

      <HeroEyebrow />

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 12 }}
          animate={
            ready
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 12 }
          }
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            variants={heroFadeUp}
            className="hero-premium-heading font-display font-extrabold tracking-[-0.03em] text-white"
          >
            <span className="block pb-1">
              <TextReveal as="span" delay={0.08} key={`${mode}-h1`}>
                {hero.headline}
              </TextReveal>
            </span>
            <span className="block pb-1">
              <TextReveal
                as="span"
                delay={0.22}
                className="hero-premium-gradient-text"
                key={`${mode}-h1a`}
              >
                {hero.headlineAccent}
              </TextReveal>
            </span>
          </motion.h1>

          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-white/55 sm:mt-8 sm:text-base sm:leading-[1.8] lg:mt-10 lg:text-[17px]">
            {hero.subtext.replace("--", "—")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-11">
            <Link
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-primary-cta group relative inline-flex h-[50px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-7 text-[15px] font-semibold text-[#041018] transition-transform duration-300 hover:-translate-y-0.5 sm:h-[52px] sm:w-auto sm:px-7 lg:h-[58px] lg:px-8 lg:text-base"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
              <span className="relative z-10">{hero.cta}</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="#how-it-works"
              className="hero-secondary-cta group inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-2xl px-6 text-[15px] font-semibold text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:text-white sm:h-[52px] sm:w-auto lg:h-[58px] lg:px-7 lg:text-base"
            >
              <span className="relative z-10">
                {hero.secondaryCta ?? "See How It Works"}
              </span>
              <ArrowRight className="relative z-10 h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
