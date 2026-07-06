"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { featureSection, features } from "@/lib/data/content";
import type { Feature } from "@/types";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const panelLayouts = [
  { imageSide: "right" as const, number: "01" },
  { imageSide: "left" as const, number: "02" },
  { imageSide: "right" as const, number: "03" },
];

const copyVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

function FeatureCallouts({
  callouts,
}: {
  callouts: NonNullable<Feature["callouts"]>;
}) {
  return (
    <div className="absolute inset-0 z-20 p-3 sm:p-4">
      {callouts.map((callout, index) => (
        <div
          key={`${callout.label}-${callout.value}`}
          className={cn(
            "feature-callout absolute max-w-[10.5rem] sm:max-w-[9rem]",
            index === 0 ? "left-3 top-3 sm:left-4 sm:top-4" : "bottom-3 right-3 sm:bottom-4 sm:right-4"
          )}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:text-[9px]">
            {callout.label}
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 font-display text-sm font-bold text-white sm:text-base">
            {callout.live && (
              <span className="hero-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DDFFF]" />
            )}
            {callout.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function FeatureImagePanel({ feature }: { feature: Feature }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 22, mass: 0.5 });
  const rotateY = useTransform(springX, [-1, 1], [-4, 4]);
  const rotateX = useTransform(springY, [-1, 1], [3, -3]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative w-full lg:max-w-xl lg:justify-self-center"
      style={{ perspective: 1200 }}
    >
      <div className="pointer-events-none absolute -inset-4 rounded-full bg-[#4DDFFF]/10 opacity-60 blur-[48px] transition-opacity duration-500 group-hover:opacity-100 sm:-inset-8 sm:blur-[72px]" />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="feature-frame-shell relative overflow-hidden rounded-[1.35rem] p-px sm:rounded-[1.5rem]"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative overflow-hidden rounded-[1.32rem] bg-[#060a10]/90 sm:rounded-[1.47rem]"
        >
          <div className="noise-overlay pointer-events-none absolute inset-0 z-10 opacity-[0.22]" aria-hidden />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            aria-hidden
          />

          <div className="relative aspect-[4/3] w-full">
            {feature.bgImage && (
              <Image
                src={feature.bgImage}
                alt=""
                fill
                className="object-cover opacity-15"
                aria-hidden
                unoptimized
              />
            )}
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 480px, 100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/75 via-transparent to-transparent" />
            {feature.callouts && (
              <FeatureCallouts callouts={feature.callouts} />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FeaturePanel({
  feature,
  layout,
  index,
}: {
  feature: Feature;
  layout: (typeof panelLayouts)[0];
  index: number;
}) {
  const isImageLeft = layout.imageSide === "left";

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px", amount: 0.25 }}
      className="feature-panel relative"
    >
      <div
        className="feature-timeline-node absolute left-1/2 top-1/2 z-10 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full lg:block"
        aria-hidden
      />

      <Container>
        <div
          className={cn(
            "grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16",
            isImageLeft && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
          )}
        >
          <motion.div
            variants={copyVariants}
            className="relative flex flex-col justify-center lg:max-w-md lg:justify-self-center xl:max-w-lg"
          >
            <span
              className="feature-watermark pointer-events-none absolute -left-2 top-6 select-none font-display text-[5.5rem] font-bold leading-none text-white/[0.03] sm:text-[7rem] lg:-left-4 lg:text-[8rem]"
              aria-hidden
            >
              {layout.number}
            </span>

            <motion.div variants={itemVariants}>
              <span className="feature-index">{layout.number}</span>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="relative mt-5 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.12]"
            >
              {feature.title}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base leading-[1.75] text-white/52 lg:mt-5 lg:text-[17px]"
            >
              {feature.description}
            </motion.p>

            {feature.highlights && (
              <motion.ul
                variants={itemVariants}
                className="mt-6 space-y-3 lg:mt-7"
              >
                {feature.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/48"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DDFFF] shadow-[0_0_10px_rgba(77,223,255,0.65)]"
                      aria-hidden
                    />
                    {highlight}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>

          <FeatureImagePanel feature={feature} />
        </div>
      </Container>

      {index < features.length - 1 && (
        <div className="feature-panel-glow pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4DDFFF]/10 to-transparent" aria-hidden />
      )}
    </motion.article>
  );
}

export function FeatureHighlights() {
  return (
    <CinematicSection
      id="features"
      mood="horizon"
      className="section-divider -mt-6 sm:-mt-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(77,223,255,0.08),transparent_70%)]" aria-hidden />

      <div className="section-py relative">
        <Container className="relative mb-4 sm:mb-6">
          <SectionHeader
            tag={featureSection.tag}
            heading={featureSection.heading}
            headingAccent={featureSection.headingAccent}
            description={featureSection.description}
            pills={featureSection.pillars}
            size="large"
            premium
          />
        </Container>

        <div className="feature-timeline relative">
          <div className="feature-timeline-spine hidden lg:block" aria-hidden />

          <div className="feature-stack">
            {features.map((feature, index) => (
              <FeaturePanel
                key={feature.title}
                feature={feature}
                layout={panelLayouts[index]}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
