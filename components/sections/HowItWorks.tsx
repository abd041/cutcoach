"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { howItWorksSection, steps } from "@/lib/data/content";
import { images } from "@/lib/images";
import { cn } from "@/lib/cn";

const stepImages = [
  images.guidedSession,
  images.liveCutGuidance,
  images.liveAiSupport,
];

function useStepScrollSpy(count: number) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const ratiosRef = useRef<number[]>(Array(count).fill(0));

  const setStepRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      stepRefs.current[index] = node;
    },
    []
  );

  useEffect(() => {
    const elements = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    ratiosRef.current = Array(count).fill(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).dataset.stepIndex
          );
          if (!Number.isNaN(index)) {
            ratiosRef.current[index] = entry.intersectionRatio;
          }
        });

        let bestIndex = 0;
        let bestRatio = -1;
        ratiosRef.current.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        setActiveStep((prev) => (prev === bestIndex ? prev : bestIndex));
      },
      {
        root: null,
        rootMargin: "-38% 0px -38% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return { activeStep, setStepRef };
}

export function HowItWorks() {
  const { activeStep, setStepRef } = useStepScrollSpy(steps.length);

  return (
    <CinematicSection
      id="how-it-works"
      mood="theater"
      className="section-divider !overflow-visible"
    >
      <Container className="section-py relative overflow-visible">
        <SectionHeader
          tag={howItWorksSection.tag}
          heading={howItWorksSection.heading}
          headingAccent={howItWorksSection.headingAccent}
          description={howItWorksSection.description}
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-20 xl:gap-28">
          {/* Steps — left on desktop */}
          <div className="relative lg:order-1">
            <div
              className="absolute left-[27px] top-0 hidden h-full w-px bg-white/[0.06] lg:block"
              aria-hidden
            >
              <motion.div
                className="w-full bg-gradient-to-b from-accent via-accent/50 to-transparent"
                animate={{
                  height: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="space-y-0">
              {steps.map((step, index) => (
                <ScrollStep
                  key={step.number}
                  stepRef={setStepRef(index)}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  isLast={index === steps.length - 1}
                  stepImage={stepImages[index]}
                />
              ))}
            </div>
          </div>

          {/* Sticky image — right on desktop */}
          <div className="relative hidden lg:order-2 lg:block">
            <div className="sticky top-28 xl:top-32">
              <div className="relative h-[min(52vh,520px)] w-full">
                <div
                  className="pointer-events-none absolute -inset-10 bg-accent/20 blur-[80px]"
                  aria-hidden
                />
                <div className="premium-frame relative h-full w-full overflow-hidden shadow-[0_24px_80px_-24px_rgba(0,0,0,0.6)]">
                  {stepImages.map((src, index) => (
                    <motion.div
                      key={src}
                      className="absolute inset-0"
                      animate={{
                        opacity: activeStep === index ? 1 : 0,
                        scale: activeStep === index ? 1 : 1.02,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      aria-hidden={activeStep !== index}
                    >
                      <Image
                        src={src}
                        alt={steps[index].title}
                        fill
                        className="object-cover object-top"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        priority={index === 0}
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-white/[0.02]" />
                    </motion.div>
                  ))}
                  <div className="pointer-events-none absolute bottom-6 left-6 font-display text-8xl font-bold text-white/[0.06]">
                    0{activeStep + 1}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </CinematicSection>
  );
}

const ScrollStep = ({
  stepRef,
  step,
  index,
  isActive,
  isLast,
  stepImage,
}: {
  stepRef: (node: HTMLElement | null) => void;
  step: (typeof steps)[0];
  index: number;
  isActive: boolean;
  isLast: boolean;
  stepImage: string;
}) => {
  return (
    <article
      ref={stepRef}
      data-step-index={index}
      className={cn(
        "relative flex gap-5 transition-opacity duration-500 sm:gap-8",
        !isLast && "pb-10 sm:pb-12 lg:min-h-[52vh] lg:pb-0 lg:items-center",
        isLast && "pb-4 lg:min-h-[40vh] lg:items-center",
        isActive ? "opacity-100" : "opacity-100 lg:opacity-55"
      )}
    >
      <div
        className={cn(
          "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-14 sm:w-14",
          isActive
            ? "border-accent bg-accent shadow-[0_0_40px_-5px_rgba(46,196,232,0.6)]"
            : "border-white/10 bg-white/[0.03]"
        )}
      >
        <Image src={step.icon} alt="" width={24} height={24} aria-hidden />
      </div>

      <div className="flex-1 pt-1">
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
          {step.number}
        </span>
        <h3
          className={cn(
            "mt-3 font-display font-semibold leading-tight transition-all duration-500",
            isActive
              ? "text-2xl text-foreground sm:text-3xl lg:text-4xl"
              : "text-xl text-muted sm:text-2xl"
          )}
        >
          {step.title}
        </h3>
        <p
          className={cn(
            "mt-5 max-w-lg text-base leading-[1.75] transition-colors duration-500",
            isActive ? "text-muted" : "text-muted/70"
          )}
        >
          {step.description}
        </p>

        <div
          className={cn(
            "mt-6 flex flex-wrap gap-2 transition-all duration-500",
            isActive
              ? "opacity-100"
              : "pointer-events-none opacity-0 lg:h-0 lg:overflow-hidden"
          )}
        >
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs text-accent-light"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] lg:hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={stepImage}
              alt={step.title}
              fill
              className="object-cover object-top"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </div>
    </article>
  );
};
