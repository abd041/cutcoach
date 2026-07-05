"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import {
  compatibilityPlatforms,
  compatibilitySection,
} from "@/lib/data/content";
import { images } from "@/lib/images";

const orbitPartners = [
  {
    name: "BaByliss PRO",
    angle: -52,
    logo: images.babyliss,
    logoClass: "h-9 w-auto max-w-[4.5rem] object-contain sm:h-10 sm:max-w-[5rem]",
  },
  {
    name: "Andis",
    angle: 68,
    logo: images.andis,
    logoClass:
      "h-8 w-auto max-w-[3.75rem] object-contain brightness-0 invert sm:h-9 sm:max-w-[4.25rem]",
  },
  {
    name: "CutCoach",
    angle: 188,
    logo: images.logo,
    logoClass:
      "pointer-events-none absolute left-1/2 top-0 h-[2.85rem] w-auto max-w-none -translate-x-1/2 object-contain sm:h-[3.25rem]",
    iconOnly: true,
  },
] as const;

const ORBIT_RADIUS = 38;

function PartnerOrbitChip({
  partner,
}: {
  partner: (typeof orbitPartners)[number];
}) {
  return (
    <div className="compat-partner-chip flex h-[4.5rem] w-[4.5rem] items-center justify-center sm:h-20 sm:w-20">
      {"iconOnly" in partner && partner.iconOnly ? (
        <div
          className="relative h-10 w-10 overflow-hidden sm:h-11 sm:w-11"
          aria-hidden
        >
          <Image
            src={partner.logo}
            alt=""
            width={120}
            height={96}
            className={partner.logoClass}
            unoptimized
          />
        </div>
      ) : (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={80}
          height={80}
          className={partner.logoClass}
          unoptimized
        />
      )}
    </div>
  );
}

export function PlatformCompatibility() {
  return (
    <CinematicSection mood="horizon" className="section-divider">
      <Container className="section-py relative">
        <SectionHeader
          tag={compatibilitySection.tag}
          heading={compatibilitySection.heading}
          headingAccent={compatibilitySection.headingAccent}
          description={compatibilitySection.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="compat-stage-shell mx-auto mt-4 max-w-4xl overflow-hidden rounded-[1.75rem] p-px sm:mt-6"
        >
          <div className="relative rounded-[1.72rem] bg-[#060a10]/92 px-4 py-10 backdrop-blur-2xl sm:px-10 sm:py-14 lg:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(77,223,255,0.14),transparent_68%)]"
              aria-hidden
            />

            <div className="relative mx-auto flex aspect-square max-h-[min(88vw,340px)] w-full max-w-[min(88vw,340px)] items-center justify-center sm:max-h-[420px] sm:max-w-[420px]">
              {/* Orbit rings */}
              <div className="compat-orbit-ring absolute inset-[2%] rounded-full" />
              <div className="compat-orbit-ring compat-orbit-ring-inner absolute inset-[16%] rounded-full" />
              <motion.div
                className="absolute inset-[28%] rounded-full border border-[#4DDFFF]/10"
                animate={{ opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Connector spokes */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full text-[#4DDFFF]/15"
                viewBox="0 0 100 100"
                aria-hidden
              >
                {orbitPartners.map((partner) => {
                  const rad = (partner.angle * Math.PI) / 180;
                  const x = 50 + ORBIT_RADIUS * Math.cos(rad);
                  const y = 50 + ORBIT_RADIUS * Math.sin(rad);
                  return (
                    <line
                      key={partner.name}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="currentColor"
                      strokeWidth="0.35"
                      strokeDasharray="1.5 2"
                    />
                  );
                })}
              </svg>

              {/* Partner chips */}
              {orbitPartners.map((partner, i) => {
                const rad = (partner.angle * Math.PI) / 180;

                return (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute z-20 flex w-[5.5rem] flex-col items-center gap-2.5 sm:w-[6.25rem]"
                    style={{
                      left: `${50 + ORBIT_RADIUS * Math.cos(rad)}%`,
                      top: `${50 + ORBIT_RADIUS * Math.sin(rad)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <PartnerOrbitChip partner={partner} />
                    <span className="text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/45 sm:text-[10px] sm:tracking-[0.18em]">
                      {partner.name}
                    </span>
                  </motion.div>
                );
              })}

              {/* Center hub */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-30 flex h-28 w-28 flex-col items-center justify-center rounded-full sm:h-32 sm:w-32"
              >
                <div
                  className="absolute inset-0 rounded-full bg-[#4DDFFF]/10 blur-xl"
                  aria-hidden
                />
                <div className="compat-hub relative flex h-full w-full flex-col items-center justify-center rounded-full border border-[#4DDFFF]/25 bg-[#05070a]/90 shadow-[0_0_64px_-8px_rgba(77,223,255,0.45)]">
                  <Image
                    src={images.integrationCenter}
                    alt="CutCoach integration hub"
                    width={52}
                    height={52}
                    className="h-11 w-11 opacity-90 [filter:drop-shadow(0_0_12px_rgba(77,223,255,0.45))]"
                  />
                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4DDFFF]/70">
                    Hub
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Platform chips */}
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
                ease: [0.16, 1, 0.3, 1],
              }}
              className="compat-platform-chip group"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-5 bg-[#4DDFFF]/70" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4DDFFF]/85">
                  {platform.label}
                </span>
              </span>
              <p className="mt-3 text-sm leading-[1.7] text-white/45 transition-colors group-hover:text-white/60">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </CinematicSection>
  );
}
