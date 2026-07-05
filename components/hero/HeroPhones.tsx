"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";
import { HeroFloatingCard } from "@/components/hero/HeroFloatingCard";
import { heroFadeUpLate } from "@/components/hero/hero-motion";

const phones = [
  {
    src: images.liveCutGuidance,
    alt: "Live cut guidance",
    className:
      "left-[2%] top-[4%] z-10 w-[38%] -rotate-[10deg] blur-[1.5px] brightness-[0.88]",
    floatDelay: 0,
    floatDuration: 9,
  },
  {
    src: images.guidedSession,
    alt: "Guided session screen",
    className: "left-1/2 top-[-8%] z-30 w-[54%] -translate-x-1/2",
    floatDelay: 0.3,
    floatDuration: 8,
    priority: true,
    featured: true,
  },
  {
    src: images.liveAiSupport,
    alt: "Live AI support",
    className:
      "right-[0%] top-[8%] z-10 w-[36%] rotate-[9deg] blur-[1.5px] brightness-[0.88]",
    floatDelay: 0.6,
    floatDuration: 10,
  },
] as const;

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
              ? "hero-phone-featured relative overflow-hidden rounded-[1.6rem] border border-white/[0.14] bg-[#0a1016] sm:rounded-[1.85rem]"
              : "hero-phone-back relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-[#0a1016] opacity-90"
          }
        >
          <Image
            src={src}
            alt={alt}
            width={featured ? 280 : 220}
            height={featured ? 606 : 476}
            className="block h-auto w-full"
            priority={priority}
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.06] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.08] to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

export function HeroPhones() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.4 });
  const parallaxX = useTransform(springX, [-1, 1], [-8, 8]);
  const parallaxY = useTransform(springY, [-1, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={heroFadeUpLate}
      className="relative mx-auto w-full max-w-[min(100%,380px)] sm:max-w-[440px] lg:mx-0 lg:max-w-none lg:translate-y-[90px] lg:justify-self-end"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[min(72vw,320px)] w-full sm:h-[400px] lg:h-[min(52vh,520px)]"
      >
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="relative h-full w-full will-change-transform"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[32%] -z-10 h-[min(380px,90%)] w-[min(380px,90%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.35)_0%,rgba(0,232,197,0.08)_45%,transparent_72%)] blur-[72px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[6%] left-1/2 -z-10 h-20 w-[72%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(77,223,255,0.2)_0%,transparent_70%)] blur-2xl"
            aria-hidden
          />

          {phones.map((phone) => (
            <PhoneFrame key={phone.alt} {...phone} />
          ))}

          <HeroFloatingCard
            title="25+"
            subtitle="Free Sessions"
            className="left-[0%] top-[46%] sm:left-[0%]"
            delay={0}
          />
          <HeroFloatingCard
            title="2 min"
            subtitle="To Start Training"
            className="right-[0%] top-[2%] sm:right-[-2%]"
            delay={0.15}
          />
          <HeroFloatingCard
            title="AI Feedback"
            subtitle="Live Coaching"
            className="bottom-[10%] right-[8%] hidden sm:block"
            delay={0.3}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
