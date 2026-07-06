"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
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
import { howItWorksSection, steps } from "@/lib/data/content";
import { images } from "@/lib/images";
import type { Step } from "@/types";
import { cn } from "@/lib/cn";
import { scrollToElement } from "@/lib/scroll";
import { useScrollSubscription } from "@/hooks/useScrollSubscription";

const stepImages = [
  images.guidedSession,
  images.liveCutGuidance,
  images.liveAiSupport,
];

const stepGlows = [
  "rgba(77, 223, 255, 0.22)",
  "rgba(0, 200, 255, 0.24)",
  "rgba(0, 232, 197, 0.2)",
];

function useStepScrollSpy(count: number) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const activeStepRef = useRef(0);
  const rafRef = useRef(0);

  const setStepRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      stepRefs.current[index] = node;
    },
    []
  );

  const updateActiveStep = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionRect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (sectionRect.bottom < viewportHeight * 0.15) {
      if (activeStepRef.current !== count - 1) {
        activeStepRef.current = count - 1;
        setActiveStep(count - 1);
      }
      return;
    }

    if (sectionRect.top > viewportHeight * 0.85) {
      if (activeStepRef.current !== 0) {
        activeStepRef.current = 0;
        setActiveStep(0);
      }
      return;
    }

    const anchor = viewportHeight * 0.42;
    let bestIndex = 0;
    let bestDistance = Infinity;

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const stepAnchor = rect.top + Math.min(rect.height * 0.3, 100);
      const distance = Math.abs(stepAnchor - anchor);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });

    if (activeStepRef.current !== bestIndex) {
      activeStepRef.current = bestIndex;
      setActiveStep(bestIndex);
    }
  }, [count]);

  const scheduleUpdate = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateActiveStep);
  }, [updateActiveStep]);

  useScrollSubscription(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    if (rect.bottom < -80 || rect.top > window.innerHeight + 80) return;

    scheduleUpdate();
  });

  useEffect(() => {
    scheduleUpdate();
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => window.removeEventListener("resize", scheduleUpdate);
  }, [scheduleUpdate]);

  const scrollToStep = useCallback((index: number) => {
    const target = stepRefs.current[index];
    if (!target) return;
    scrollToElement(target, { align: "start" });
  }, []);

  return { activeStep, sectionRef, setStepRef, scrollToStep };
}

function StepCallouts({
  callouts,
}: {
  callouts: NonNullable<Step["callouts"]>;
}) {
  return (
    <div className="absolute inset-0 z-20 p-3 sm:p-4">
      {callouts.map((callout, index) => (
        <div
          key={`${callout.label}-${callout.value}`}
          className={cn(
            "feature-callout absolute max-w-[9rem]",
            index === 0
              ? "left-3 top-3 sm:left-4 sm:top-4"
              : "bottom-3 right-3 sm:bottom-4 sm:right-4"
          )}
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45">
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

function StepImageFrame({
  src,
  alt,
  step,
  stepIndex,
  className,
}: {
  src: string;
  alt: string;
  step: Step;
  stepIndex: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 22, mass: 0.5 });
  const rotateY = useTransform(springX, [-1, 1], [-3, 3]);
  const rotateX = useTransform(springY, [-1, 1], [2, -2]);

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
    <div
      className={cn("group relative h-full", className)}
      style={{ perspective: 1200 }}
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-full blur-[72px] transition-opacity duration-500"
        style={{ backgroundColor: stepGlows[stepIndex] }}
        aria-hidden
      />

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="feature-frame-shell relative h-full overflow-hidden rounded-[1.35rem] p-px"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative h-full overflow-hidden rounded-[1.32rem] bg-[#060a10]/92"
        >
          <div className="noise-overlay pointer-events-none absolute inset-0 z-10 opacity-[0.2]" aria-hidden />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            aria-hidden
          />

          <div className="relative aspect-[4/3] h-full w-full lg:aspect-auto">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/82 via-transparent to-white/[0.02]" />
            {step.callouts && <StepCallouts callouts={step.callouts} />}

            <div className="pointer-events-none absolute bottom-4 left-4 z-20 lg:bottom-6 lg:left-6">
              <p className="font-display text-6xl font-bold leading-none text-white/[0.07] sm:text-7xl lg:text-8xl">
                0{stepIndex + 1}
              </p>
            </div>

            <div className="absolute bottom-4 right-4 z-20 max-w-[12rem] rounded-xl border border-white/[0.1] bg-[#05070a]/75 px-3 py-2 backdrop-blur-md lg:bottom-6 lg:right-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#4DDFFF]/75">
                {step.phase}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white/90">
                {step.title}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MobileStepProgress({
  activeStep,
  onSelect,
}: {
  activeStep: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mb-4 space-y-4 lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
          Step {activeStep + 1} of {steps.length}
        </p>
        <p className="text-[10px] font-medium text-[#4DDFFF]/70">
          {steps[activeStep]?.phase}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {steps.map((step, index) => (
          <button
            key={step.number}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to ${step.title}`}
            aria-current={activeStep === index ? "step" : undefined}
            className={cn(
              "flex min-h-11 flex-col items-center justify-center rounded-xl border px-2 py-2 text-center transition-all duration-300",
              activeStep === index
                ? "border-[#4DDFFF]/40 bg-[#4DDFFF]/10 text-[#4DDFFF] shadow-[0_0_24px_-10px_rgba(77,223,255,0.55)]"
                : "border-white/[0.08] bg-white/[0.02] text-white/40"
            )}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-0.5 line-clamp-1 text-[9px] font-medium uppercase tracking-[0.08em] opacity-80">
              {step.phase.replace(" the cut", "")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StickyStepVisual({ activeStep }: { activeStep: number }) {
  return (
    <div className="relative hidden lg:block lg:order-2 lg:min-h-0">
      <div className="sticky top-[calc(6rem+var(--safe-top))] xl:top-32">
        <div className="relative h-[min(42vh,440px)] w-full xl:h-[min(46vh,480px)]">
          <div
            className="pointer-events-none absolute -inset-12 rounded-full blur-[88px] transition-[background-color] duration-300 ease-out"
            style={{ backgroundColor: stepGlows[activeStep] }}
            aria-hidden
          />

          <div className="relative h-full w-full how-step-visual-layer">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "absolute inset-0 transition-opacity duration-300 ease-out",
                  activeStep === index
                    ? "z-[2] opacity-100"
                    : "pointer-events-none z-[1] opacity-0"
                )}
                aria-hidden={activeStep !== index}
              >
                <StepImageFrame
                  src={stepImages[index]}
                  alt={step.title}
                  step={step}
                  stepIndex={index}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ScrollStep = memo(function ScrollStep({
  stepRef,
  step,
  index,
  isActive,
  isLast,
  stepImage,
  onSelect,
}: {
  stepRef: (node: HTMLElement | null) => void;
  step: Step;
  index: number;
  isActive: boolean;
  isLast: boolean;
  stepImage: string;
  onSelect: () => void;
}) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={stepRef}
      data-step-index={index}
      className={cn(
        "how-step-article relative transition-opacity duration-300 ease-out",
        !isLast && "lg:pb-14 xl:pb-16",
        !isActive && "lg:opacity-50"
      )}
    >
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "how-step-card relative flex w-full gap-5 rounded-2xl border text-left transition-[border-color,background-color,box-shadow] duration-300 sm:gap-8",
          "py-1 sm:py-2",
          isActive
            ? "border-white/[0.1] bg-white/[0.035] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_20px_48px_-28px_rgba(0,0,0,0.65)] sm:px-5"
            : "border-transparent bg-transparent px-0 hover:border-white/[0.06] hover:bg-white/[0.02] lg:px-3"
        )}
      >
        <div className="relative hidden shrink-0 lg:block">
          <div
            className={cn(
              "how-step-node absolute left-[27px] top-8 z-20 hidden -translate-x-1/2 lg:block",
              isActive && "how-step-node--active"
            )}
            aria-hidden
          />
          <div
            className={cn(
              "relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border transition-[border-color,background-color,box-shadow] duration-300",
              isActive
                ? "border-[#4DDFFF]/50 bg-[#4DDFFF]/15 shadow-[0_0_40px_-6px_rgba(77,223,255,0.55)]"
                : "border-white/10 bg-white/[0.03]"
            )}
          >
            <Image src={step.icon} alt="" width={26} height={26} aria-hidden />
          </div>
        </div>

        <div className="relative min-w-0 flex-1 pt-1">
          <span
            className="how-step-watermark pointer-events-none absolute -left-1 top-8 hidden select-none font-display text-[5.5rem] font-bold leading-none text-white/[0.03] lg:block"
            aria-hidden
          >
            {stepNumber}
          </span>

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4DDFFF]/75">
            {step.phase}
          </p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/35">
            {step.number}
          </p>

          <h3
            className={cn(
              "relative mt-3 font-display font-semibold leading-tight transition-colors duration-300",
              isActive
                ? "text-2xl text-white sm:text-3xl lg:text-[2.15rem] lg:leading-[1.12]"
                : "text-xl text-white/65 sm:text-2xl"
            )}
          >
            {step.title}
          </h3>

          <p
            className={cn(
              "relative mt-4 max-w-lg text-base leading-[1.75] transition-colors duration-300",
              isActive ? "text-white/52" : "text-white/38"
            )}
          >
            {step.description}
          </p>

          <ul
            className={cn(
              "relative mt-5 space-y-2.5 transition-opacity duration-300",
              isActive ? "opacity-100" : "opacity-70"
            )}
          >
            {step.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-white/45"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DDFFF] shadow-[0_0_8px_rgba(77,223,255,0.55)]"
                  aria-hidden
                />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[11px] font-medium transition-all duration-300",
                  isActive
                    ? "border-[#4DDFFF]/25 bg-[#4DDFFF]/10 text-[#4DDFFF]/90"
                    : "border-white/[0.08] bg-white/[0.03] text-white/40"
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 hidden lg:block">
            <StepImageFrame
              src={stepImage}
              alt={step.title}
              step={step}
              stepIndex={index}
            />
          </div>
        </div>
      </button>
    </article>
  );
});

export function HowItWorks() {
  const { activeStep, sectionRef, setStepRef, scrollToStep } =
    useStepScrollSpy(steps.length);

  return (
    <CinematicSection
      id="how-it-works"
      mood="theater"
      pin
      className="section-divider -mt-6 !overflow-visible sm:-mt-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_60%_80%_at_80%_0%,rgba(77,223,255,0.09),transparent_70%)]"
        aria-hidden
      />

      <Container className="section-py relative overflow-visible">
        <SectionHeader
          tag={howItWorksSection.tag}
          heading={howItWorksSection.heading}
          headingAccent={howItWorksSection.headingAccent}
          description={howItWorksSection.description}
          pills={howItWorksSection.pillars}
          align="left"
          premium
        />

        <MobileStepProgress
          activeStep={activeStep}
          onSelect={scrollToStep}
        />

        <div className="mb-8 lg:hidden">
          <StepImageFrame
            src={stepImages[activeStep]}
            alt={steps[activeStep].title}
            step={steps[activeStep]}
            stepIndex={activeStep}
          />
        </div>

        <div
          ref={sectionRef}
          className="how-steps-grid relative mt-10 sm:mt-12 lg:mt-14"
        >
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <div className="relative lg:order-1">
              <div
                className="how-step-spine absolute left-[27px] top-0 hidden h-full w-px lg:block"
                aria-hidden
              >
                <div
                  className="how-step-spine-fill h-full w-full"
                  style={{
                    transform: `scaleY(${(activeStep + 1) / steps.length})`,
                  }}
                  aria-hidden
                />
              </div>

              <div className="space-y-6 lg:space-y-0">
                {steps.map((step, index) => (
                  <ScrollStep
                    key={step.number}
                    stepRef={setStepRef(index)}
                    step={step}
                    index={index}
                    isActive={activeStep === index}
                    isLast={index === steps.length - 1}
                    stepImage={stepImages[index]}
                    onSelect={() => scrollToStep(index)}
                  />
                ))}
              </div>
            </div>

            <StickyStepVisual activeStep={activeStep} />
          </div>
        </div>
      </Container>
    </CinematicSection>
  );
}
