"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Gauge, Sparkles, Users } from "lucide-react";
import { HeroFloatingCard } from "@/components/hero/HeroFloatingCard";
import {
  heroFadeUpLate,
  useHeroEntranceReady,
} from "@/components/hero/hero-motion";
import {
  useAudienceContent,
  useAudienceMode,
} from "@/lib/audience/AudienceModeProvider";
import { cn } from "@/lib/cn";
import { audienceModeTransition, audienceModeVariants } from "@/lib/audience-motion";

const highlightIcons = [Sparkles, Users, Gauge] as const;

const sideLayouts = {
  left: "left-[2%] top-[6%] z-10 hidden w-[36%] -rotate-[11deg] sm:block",
  right: "right-[0%] top-[10%] z-10 hidden w-[34%] rotate-[10deg] sm:block",
} as const;

function PhoneFrame({
  src,
  alt,
  className,
  floatDelay,
  floatDuration,
  priority,
  featured,
}: {
  src: string;
  alt: string;
  className: string;
  floatDelay: number;
  floatDuration: number;
  priority?: boolean;
  featured?: boolean;
}) {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="will-change-transform"
      >
        <div
          className={
            featured
              ? "hero-phone-featured relative overflow-hidden rounded-[1.6rem] border border-white/[0.16] bg-[#0a1016] sm:rounded-[1.85rem]"
              : "hero-phone-back relative scale-[0.9] overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-[#0a1016] opacity-75 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.75)]"
          }
        >
          <Image
            src={src}
            alt={alt}
            width={featured ? 280 : 220}
            height={featured ? 606 : 476}
            className="block h-auto w-full"
            priority={priority}
            sizes={featured ? "(max-width: 1024px) 58vw, 280px" : "220px"}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.06] via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

function CarouselDot({
  isActive,
  label,
  onClick,
}: {
  isActive: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-current={isActive ? "true" : undefined}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center"
    >
      <span
        className={cn(
          "rounded-full transition-all duration-300",
          isActive
            ? "h-2 w-5 bg-[#4DDFFF] shadow-[0_0_12px_rgba(77,223,255,0.6)]"
            : "h-2 w-2 bg-white/35"
        )}
      />
    </button>
  );
}

export function HeroPhones() {
  const ready = useHeroEntranceReady();
  const { mode } = useAudienceMode();
  const { hero, mobileHighlights } = useAudienceContent();
  const [activeScreen, setActiveScreen] = useState(0);
  const [enableParallax, setEnableParallax] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.4 });
  const parallaxX = useTransform(springX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(springY, [-1, 1], [-7, 7]);

  const phoneScreens = hero.screens;
  const sidePhones = useMemo(
    () =>
      hero.sideScreens.map((screen) => ({
        ...screen,
        className: sideLayouts[screen.side],
      })),
    [hero.sideScreens]
  );

  const cards = mobileHighlights.map((item, index) => ({
    ...item,
    icon: highlightIcons[index] ?? Sparkles,
  }));

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnableParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setActiveScreen(0);
  }, [mode]);

  useEffect(() => {
    if (phoneScreens.length <= 1) return;
    const interval = window.setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % phoneScreens.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [phoneScreens.length, mode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableParallax) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const active = phoneScreens[activeScreen] ?? phoneScreens[0];

  return (
    <motion.div
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      variants={heroFadeUpLate}
      className="relative mx-auto w-full max-w-[min(100%,380px)] sm:max-w-[440px] lg:mx-0 lg:max-w-none lg:-translate-y-10 lg:self-center"
    >
      <div
        ref={ref}
        onMouseMove={enableParallax ? handleMouseMove : undefined}
        onMouseLeave={enableParallax ? handleMouseLeave : undefined}
        className="relative h-[min(68vw,300px)] w-full sm:h-[400px] lg:h-[min(50vh,500px)]"
      >
        <motion.div
          style={enableParallax ? { x: parallaxX, y: parallaxY } : undefined}
          className={cn(
            "relative h-full w-full",
            enableParallax && "will-change-transform"
          )}
        >
          <div
            className="hero-phone-glow pointer-events-none absolute left-1/2 top-[34%] -z-10 h-[min(400px,92%)] w-[min(400px,92%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.38)_0%,rgba(0,232,197,0.1)_42%,transparent_72%)] blur-3xl sm:blur-[76px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[4%] left-1/2 -z-10 h-24 w-[76%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(77,223,255,0.22)_0%,transparent_70%)] blur-2xl"
            aria-hidden
          />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${mode}-sides`}
              initial={audienceModeVariants(mode, "scale").initial}
              animate={audienceModeVariants(mode, "scale").animate}
              exit={audienceModeVariants(mode, "scale").exit}
              transition={audienceModeTransition()}
              className="contents"
            >
              {sidePhones.map((phone, index) => (
                <PhoneFrame
                  key={`${mode}-${phone.alt}-${phone.side}`}
                  src={phone.src}
                  alt={phone.alt}
                  className={phone.className}
                  floatDelay={index * 0.3}
                  floatDuration={9 + index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="absolute left-1/2 top-[-2%] z-30 w-[58%] -translate-x-1/2 sm:top-[-6%] sm:w-[54%]">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <div className="hero-phone-featured relative overflow-hidden rounded-[1.5rem] border border-white/[0.16] bg-[#0a1016] sm:rounded-[1.85rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${mode}-${active?.src ?? "empty"}`}
                    initial={audienceModeVariants(mode, "scale").initial}
                    animate={audienceModeVariants(mode, "scale").animate}
                    exit={audienceModeVariants(mode, "scale").exit}
                    transition={audienceModeTransition()}
                  >
                    {active && (
                      <Image
                        src={active.src}
                        alt={active.alt}
                        width={280}
                        height={606}
                        className="block h-auto w-full"
                        priority
                        sizes="(max-width: 1024px) 58vw, 280px"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.12] to-transparent" />

                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-0 sm:bottom-3 sm:gap-1.5">
                  {phoneScreens.map((screen, index) => (
                    <CarouselDot
                      key={`${mode}-${screen.src}`}
                      isActive={index === activeScreen}
                      label={`Show ${screen.alt}`}
                      onClick={() => setActiveScreen(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${mode}-cards`}
              initial={audienceModeVariants(mode, "fade").initial}
              animate={audienceModeVariants(mode, "fade").animate}
              exit={audienceModeVariants(mode, "fade").exit}
              transition={audienceModeTransition()}
              className="contents"
            >
              {cards[0] && (
                <HeroFloatingCard
                  title={cards[0].title}
                  subtitle={cards[0].subtitle}
                  live={cards[0].live}
                  icon={<Sparkles className="h-3.5 w-3.5" />}
                  className="left-[0%] top-[48%] hidden sm:left-[2%] sm:block"
                  delay={0}
                />
              )}
              {cards[1] && (
                <HeroFloatingCard
                  title={cards[1].title}
                  subtitle={cards[1].subtitle}
                  live={cards[1].live}
                  icon={<Users className="h-3.5 w-3.5" />}
                  className="right-[0%] top-[4%] hidden sm:right-[-2%] sm:block"
                  delay={0.15}
                />
              )}
              {cards[2] && (
                <HeroFloatingCard
                  title={cards[2].title}
                  subtitle={cards[2].subtitle}
                  live={cards[2].live}
                  icon={<Gauge className="h-3.5 w-3.5" />}
                  className="bottom-[8%] right-[6%] hidden md:block"
                  delay={0.3}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${mode}-mobile-highlights`}
          initial={audienceModeVariants(mode, "fade").initial}
          animate={audienceModeVariants(mode, "fade").animate}
          exit={audienceModeVariants(mode, "fade").exit}
          transition={audienceModeTransition()}
          className="mt-5 grid grid-cols-1 gap-2 sm:hidden"
        >
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={`${mode}-${item.title}`}
                className="hero-glass-card flex items-center gap-3 px-3.5 py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#4DDFFF]">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 font-display text-sm font-bold text-white">
                    {item.live && (
                      <span className="hero-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DDFFF]" />
                    )}
                    {item.title}
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
