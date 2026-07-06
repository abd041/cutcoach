"use client";

import { useRef, useState } from "react";
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
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/cn";
import {
  compatibilityPlatforms,
  compatibilitySection,
} from "@/lib/data/content";
import { images } from "@/lib/images";

const ease = [0.16, 1, 0.3, 1] as const;
const ORBIT_RADIUS = 38;

type PartnerId = "babyliss" | "andis";

type OrbitPartner = {
  id: PartnerId;
  name: string;
  descriptor: string;
  angle: number;
  glow: string;
  logo: string;
  logoClass: string;
};

const orbitPartners: OrbitPartner[] = [
  {
    id: "babyliss",
    name: "BaByliss PRO",
    descriptor: "Clipper-ready",
    angle: -48,
    logo: images.babyliss,
    logoClass:
      "h-9 w-auto max-w-[4.75rem] object-contain drop-shadow-[0_2px_12px_rgba(220,38,38,0.25)] sm:h-10 sm:max-w-[5.25rem]",
    glow: "rgba(220, 38, 38, 0.42)",
  },
  {
    id: "andis",
    name: "Andis",
    descriptor: "Shop-standard",
    angle: 132,
    logo: images.andis,
    logoClass:
      "h-8 w-auto max-w-[4rem] object-contain opacity-95 sm:h-9 sm:max-w-[4.5rem]",
    glow: "rgba(148, 163, 184, 0.45)",
  },
];

function partnerPosition(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: 50 + ORBIT_RADIUS * Math.cos(rad),
    y: 50 + ORBIT_RADIUS * Math.sin(rad),
  };
}

function connectorPath(angle: number) {
  const { x, y } = partnerPosition(angle);
  const midX = (50 + x) / 2;
  const midY = (50 + y) / 2;
  const rad = (angle * Math.PI) / 180;
  const cpX = midX - Math.sin(rad) * 4;
  const cpY = midY + Math.cos(rad) * 4;
  return `M 50 50 Q ${cpX} ${cpY} ${x} ${y}`;
}

function ConnectorLines({
  activePartner,
}: {
  activePartner: PartnerId | null;
}) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      aria-hidden
    >
      <defs>
        <linearGradient id="compat-connector-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(77, 223, 255, 0.15)" />
          <stop offset="45%" stopColor="rgba(77, 223, 255, 0.75)" />
          <stop offset="100%" stopColor="rgba(77, 223, 255, 0.35)" />
        </linearGradient>
        <filter id="compat-connector-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {orbitPartners.map((partner, index) => {
        const isActive = activePartner === partner.id;
        const isDimmed = activePartner !== null && !isActive;

        return (
          <g key={partner.id}>
            <path
              d={connectorPath(partner.angle)}
              fill="none"
              stroke="url(#compat-connector-gradient)"
              strokeWidth={isActive ? 0.55 : 0.38}
              strokeLinecap="round"
              filter="url(#compat-connector-glow)"
              className={cn(
                "compat-connector-path compat-connector-path--drawn",
                isActive && "compat-connector-path--active",
                isDimmed && "compat-connector-path--dimmed"
              )}
              style={{ animationDelay: `${index * 0.35}s` }}
            />
            <circle
              cx={partnerPosition(partner.angle).x}
              cy={partnerPosition(partner.angle).y}
              r={isActive ? 0.85 : 0.55}
              className={cn(
                "compat-connector-node transition-all duration-500",
                isActive && "compat-connector-node--active",
                isDimmed && "opacity-30"
              )}
            />
          </g>
        );
      })}
    </svg>
  );
}

function PartnerOrbitChip({
  partner,
  isActive,
  isDimmed,
}: {
  partner: OrbitPartner;
  isActive: boolean;
  isDimmed: boolean;
}) {
  return (
    <div
      className={cn(
        "compat-partner-chip relative flex h-[4.5rem] w-[4.5rem] items-center justify-center transition-all duration-500 sm:h-20 sm:w-20",
        `compat-partner-chip--${partner.id}`,
        isActive && "compat-partner-chip--active",
        isDimmed && "compat-partner-chip--dimmed"
      )}
      style={
        isActive
          ? ({ "--partner-glow": partner.glow } as React.CSSProperties)
          : undefined
      }
    >
      <div
        className="compat-partner-chip-glow pointer-events-none absolute inset-2 rounded-[1rem] opacity-0 transition-opacity duration-500"
        aria-hidden
      />
      <Image
        src={partner.logo}
        alt={partner.name}
        width={80}
        height={80}
        className={cn("relative z-10", partner.logoClass)}
        unoptimized
      />
    </div>
  );
}

function IntegrationHub() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0, duration: 0.7, ease }}
      className="absolute left-1/2 top-1/2 z-30 flex h-[7.25rem] w-[7.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-32 sm:w-32"
    >
      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className="compat-hub-pulse absolute inset-0 rounded-full"
          style={{ animationDelay: `${ring * 1.1}s` }}
          aria-hidden
        />
      ))}

      <div
        className="absolute inset-[-12%] rounded-full bg-[#4DDFFF]/12 blur-2xl"
        aria-hidden
      />

      <div className="compat-hub relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border border-[#4DDFFF]/30 bg-[#05070a]/95 shadow-[0_0_72px_-10px_rgba(77,223,255,0.5)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.09] to-transparent"
          aria-hidden
        />
        <BrandLogo
          size="orbit"
          className="relative z-10 h-9 w-auto opacity-95 sm:h-10"
        />
        <span className="relative z-10 mt-2 inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4DDFFF]/85">
          <span className="compat-live-dot h-1.5 w-1.5 rounded-full bg-[#4DDFFF]" />
          Live Sync
        </span>
      </div>
    </motion.div>
  );
}

function OrbitDiagram() {
  const [activePartner, setActivePartner] = useState<PartnerId | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.5 });
  const parallaxX = useTransform(springX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(springY, [-1, 1], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setActivePartner(null);
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex aspect-square max-h-[min(88vw,360px)] w-full max-w-[min(88vw,360px)] items-center justify-center sm:max-h-[440px] sm:max-w-[440px]"
    >
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="relative h-full w-full will-change-transform"
      >
        <div className="compat-orbit-ring compat-orbit-ring-spin absolute inset-[2%] rounded-full" />
        <div className="compat-orbit-ring compat-orbit-ring-inner compat-orbit-ring-spin-reverse absolute inset-[14%] rounded-full" />
        <motion.div
          className="absolute inset-[26%] rounded-full border border-[#4DDFFF]/12"
          animate={{ opacity: [0.28, 0.58, 0.28], scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <ConnectorLines activePartner={activePartner} />

        {orbitPartners.map((partner, index) => {
          const { x, y } = partnerPosition(partner.angle);
          const isActive = activePartner === partner.id;
          const isDimmed = activePartner !== null && !isActive;

          return (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.82, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.45 + index * 0.12,
                duration: 0.65,
                ease,
              }}
              className={cn(
                "absolute z-20 w-[5.5rem] -translate-x-1/2 -translate-y-1/2 sm:w-[6.25rem]"
              )}
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              onMouseEnter={() => setActivePartner(partner.id)}
              onClick={() =>
                setActivePartner((prev) =>
                  prev === partner.id ? null : partner.id
                )
              }
            >
              <div
                className={cn(
                  "flex flex-col items-center gap-2 transition-all duration-500",
                  isDimmed && "scale-[0.96] opacity-45"
                )}
              >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35, ease }}
                className="rounded-[1.35rem]"
              >
                <PartnerOrbitChip
                  partner={partner}
                  isActive={isActive}
                  isDimmed={isDimmed}
                />
              </motion.div>
              <div className="flex flex-col items-center gap-0.5 text-center">
                <span
                  className={cn(
                    "text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] transition-colors duration-500 sm:text-[10px] sm:tracking-[0.18em]",
                    isActive ? "text-white/80" : "text-white/65"
                  )}
                >
                  {partner.name}
                </span>
                <span
                  className={cn(
                    "text-[9px] font-medium tracking-[0.08em] transition-colors duration-500 sm:text-[9px]",
                    isActive ? "text-[#4DDFFF]/70" : "text-white/35"
                  )}
                >
                  {partner.descriptor}
                </span>
              </div>
              </div>
            </motion.div>
          );
        })}

        <IntegrationHub />
      </motion.div>
    </div>
  );
}

export function PlatformCompatibility() {
  return (
    <CinematicSection
      id="compatibility"
      mood="horizon"
      className="section-divider -mt-6 !overflow-visible sm:-mt-8"
    >
      <Container className="section-py relative overflow-visible">
        <SectionHeader
          tag={compatibilitySection.tag}
          heading={compatibilitySection.heading}
          headingAccent={compatibilitySection.headingAccent}
          description={compatibilitySection.description}
          pills={compatibilitySection.pillars}
          premium
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="compat-stage-shell mx-auto mt-4 max-w-4xl overflow-hidden rounded-[1.75rem] p-px sm:mt-6"
        >
          <div className="relative overflow-hidden rounded-[1.72rem] bg-[#060a10]/94 px-4 py-12 backdrop-blur-2xl sm:px-10 sm:py-14 lg:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_62%_at_50%_42%,rgba(77,223,255,0.16),transparent_70%)]"
              aria-hidden
            />
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
            <div className="compat-stage-vignette pointer-events-none absolute inset-0" aria-hidden />

            <OrbitDiagram />
          </div>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {compatibilityPlatforms.map((platform, index) => (
            <motion.div
              key={platform.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15 + index * 0.07,
                duration: 0.55,
                ease,
              }}
              className="compat-platform-chip group"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-5 bg-[#4DDFFF]/70" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4DDFFF]/85">
                  {platform.label}
                </span>
              </span>
              <p className="mt-3 text-sm leading-[1.7] text-white/45 transition-colors group-hover:text-white/62">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </CinematicSection>
  );
}
