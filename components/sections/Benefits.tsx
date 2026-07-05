"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Gauge, Shield, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { benefits, benefitsSection } from "@/lib/data/content";
import type { Benefit } from "@/types";
import { cn } from "@/lib/cn";

const iconMap = {
  speed: Gauge,
  consistency: Shield,
  confidence: TrendingUp,
  growth: BarChart3,
};

export function Benefits() {
  return (
    <CinematicSection id="benefits" mood="void">
      <Container className="relative py-28 lg:py-52">
        <SectionHeader
          tag={benefitsSection.tag}
          heading={benefitsSection.heading}
          headingAccent={benefitsSection.headingAccent}
          description={benefitsSection.description}
          align="left"
          className="mb-24 max-w-2xl lg:mb-36"
        />

        <div className="relative space-y-0">
          {benefits.map((benefit, index) => (
            <BenefitRow key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </Container>
    </CinematicSection>
  );
}

function BenefitRow({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.2, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  const Icon = iconMap[benefit.icon];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={cn(
        "group relative border-t border-white/[0.06] py-16 transition-colors duration-500 hover:bg-white/[0.01] lg:py-24",
        index === benefits.length - 1 && "border-b"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-20",
          !isEven && "lg:flex-row-reverse"
        )}
      >
        <div className="flex items-start gap-6 lg:w-[45%]">
          <span className="font-display text-6xl font-bold leading-none text-white/[0.06] lg:text-8xl">
            0{index + 1}
          </span>
          <div className="pt-2">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-accent shadow-[0_0_24px_-8px_rgba(46,196,232,0.3)] transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:shadow-[0_0_32px_-6px_rgba(46,196,232,0.45)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground lg:text-3xl">
              {benefit.title}
            </h3>
          </div>
        </div>

        <p className="max-w-xl text-base leading-[1.8] text-muted lg:w-[48%] lg:pt-16 lg:text-lg">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}
