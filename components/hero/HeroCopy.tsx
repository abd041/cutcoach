"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroEyebrow } from "@/components/hero/HeroEyebrow";
import { hero, siteConfig } from "@/lib/data/content";
import { heroFadeUp, heroStagger } from "@/components/hero/hero-motion";

export function HeroCopy() {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      animate="show"
      className="relative z-10 max-w-[640px]"
    >
      <HeroEyebrow />

      <motion.h1
        variants={heroFadeUp}
        className="hero-premium-heading font-display font-extrabold tracking-[-0.03em] text-white"
      >
        <span className="block">Cut Faster. Stay</span>
        <span className="block">Consistent.</span>
        <span className="hero-premium-accent-line block">Build Real</span>
        <span className="hero-premium-accent-line block">Confidence.</span>
      </motion.h1>

      <motion.p
        variants={heroFadeUp}
        className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-white/50 sm:mt-10 sm:text-base sm:leading-[1.8] lg:mt-12 lg:text-[17px]"
      >
        {hero.subtext.replace("--", "—")}
      </motion.p>

      <motion.div
        variants={heroFadeUp}
        className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-12 lg:gap-5"
      >
        <Link
          href={siteConfig.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-primary-cta group inline-flex h-[50px] w-full items-center justify-center gap-2.5 rounded-2xl px-7 text-[15px] font-semibold text-[#041018] transition-transform duration-300 hover:-translate-y-0.5 sm:h-[52px] sm:w-auto sm:px-7 lg:h-[60px] lg:px-8 lg:text-base"
        >
          {hero.cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>

        <Link
          href="#how-it-works"
          className="group inline-flex h-[48px] w-full items-center justify-center gap-2 text-[15px] font-medium text-white/55 transition-colors hover:text-white/90 sm:h-[52px] sm:w-auto sm:justify-start lg:h-[60px] lg:text-base"
        >
          <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-white/30">
            See How CutCoach Works
          </span>
          <ArrowRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-90" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
