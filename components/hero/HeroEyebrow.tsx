"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { heroFadeUp } from "@/components/hero/hero-motion";

export function HeroEyebrow() {
  return (
    <motion.div variants={heroFadeUp} className="mb-6 sm:mb-10">
      <SectionEyebrow>AI Barber Training & Coaching</SectionEyebrow>
    </motion.div>
  );
}
