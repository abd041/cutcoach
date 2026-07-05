"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductWidget } from "@/components/ui/ProductWidget";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { dashboardSection } from "@/lib/data/content";
import { images } from "@/lib/images";

const analyticsCards = [
  {
    label: "Pacing Score",
    value: "92%",
    variant: "score" as const,
    depth: 2,
    className: "left-[5%] top-[8%] lg:left-0",
  },
  {
    label: "Session Time",
    value: "28 min",
    variant: "session" as const,
    depth: 1,
    className: "right-[5%] top-[22%] lg:right-0",
  },
  {
    label: "Consistency",
    value: "+18%",
    variant: "metric" as const,
    depth: 3,
    className: "bottom-[18%] left-[12%] lg:left-[8%]",
  },
];

export function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-4, 0, 4]);
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const backRotate = useTransform(scrollYProgress, [0, 1], [6, -6]);
  const backRotateRight = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const backY = useTransform(scrollYProgress, [0, 1], [160, -80]);

  return (
    <CinematicSection mood="depth">
      <div ref={ref} className="relative py-28 lg:py-52">
        <Container>
          <SectionHeader
            tag={dashboardSection.tag}
            heading={dashboardSection.heading}
            headingAccent={dashboardSection.headingAccent}
            description={dashboardSection.description}
            className="mb-24 lg:mb-36"
          />
        </Container>

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <motion.div
            style={{ rotate: backRotate, y: backY }}
            className="absolute left-[8%] top-[12%] z-0 w-[55%] opacity-40 lg:left-[5%]"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.05] shadow-2xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src={images.performanceAwareness}
                  alt="Performance analytics"
                  fill
                  className="object-cover object-top"
                  sizes="40vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ rotate: backRotateRight, y: backY }}
            className="absolute right-[8%] top-[18%] z-0 w-[50%] opacity-35 lg:right-[5%]"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.05] shadow-2xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src={images.liveCutGuidance}
                  alt="Live cut guidance"
                  fill
                  className="object-cover object-top"
                  sizes="40vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ rotate, y }}
            className="relative z-10 mx-auto w-full max-w-4xl"
          >
            <div className="absolute -inset-16 rounded-full bg-accent/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#0a0812] shadow-premium card-rim-light">
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-4">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-[11px] text-muted">CutCoach Dashboard</span>
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={images.liveAiSupport}
                  alt="CutCoach analytics dashboard"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1280px) 95vw, 1000px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812]/40 via-transparent to-white/[0.02]" />
              </div>
            </div>

            {analyticsCards.map((card, i) => (
              <ProductWidget
                key={card.label}
                label={card.label}
                value={card.value}
                variant={card.variant}
                delay={0.2 + i * 0.1}
                className={card.className}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </CinematicSection>
  );
}
