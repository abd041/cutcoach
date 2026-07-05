"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { aiFeaturesSection, features } from "@/lib/data/content";
import { cn } from "@/lib/cn";

export function AiFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <CinematicSection mood="theater" bleed>
      <Container className="relative py-24 lg:py-40">
        <SectionHeader
          tag={aiFeaturesSection.tag}
          heading={aiFeaturesSection.heading}
          headingAccent={aiFeaturesSection.headingAccent}
          description={aiFeaturesSection.description}
          className="mb-20 lg:mb-28"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />

          <motion.div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] shadow-[0_0_120px_-30px_rgba(46,196,232,0.4)]">
            <div className="relative aspect-[16/9] lg:aspect-[2.2/1]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,5,10,0.6)_100%)]" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${activeIndex}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl"
                  >
                    <h3 className="font-display text-2xl font-semibold text-foreground lg:text-4xl">
                      {activeFeature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-[1.75] text-muted lg:text-base">
                      {activeFeature.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 flex justify-center gap-3 lg:mt-14">
            {features.map((feature, index) => (
              <button
                key={feature.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group flex flex-col items-center gap-3"
                aria-pressed={activeIndex === index}
                aria-label={feature.title}
              >
                <span
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    activeIndex === index
                      ? "w-12 bg-accent shadow-[0_0_20px_rgba(46,196,232,0.6)]"
                      : "w-6 bg-white/15 group-hover:bg-white/30"
                  )}
                />
                <span
                  className={cn(
                    "max-w-[5rem] text-center text-[10px] uppercase tracking-[0.12em] transition-colors",
                    activeIndex === index ? "text-accent-light" : "text-muted"
                  )}
                >
                  {feature.title.split(" ").slice(0, 2).join(" ")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </CinematicSection>
  );
}
