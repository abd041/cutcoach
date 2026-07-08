"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AudienceModeTransition } from "@/components/ui/AudienceModeTransition";
import { useAudienceContent } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { siteConfig } from "@/lib/data/content";
import { images } from "@/lib/images";
import { REVEAL_EASE } from "@/lib/motion";

export function FinalCTA() {
  const { finalCta, hero } = useAudienceContent();
  const ui = useUi();
  const ctaScreen = hero.screens[0];

  return (
    <CinematicSection mood="climax" className="section-divider -mt-6 !overflow-visible sm:-mt-8">
      <Container className="section-py">
        <div className="final-cta-shell relative overflow-hidden rounded-[1.75rem] p-px lg:rounded-[2rem]">
          <div className="hero-glass-card relative overflow-hidden rounded-[1.72rem] lg:rounded-[1.97rem]">
            <div className="pointer-events-none absolute inset-0">
              <Image
                src={images.ctaBackground}
                alt=""
                fill
                className="object-cover opacity-[0.12]"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DDFFF]/10 via-[#05070a]/90 to-[#05070a]" />
            </div>

            <div className="relative grid items-center gap-8 p-6 sm:gap-10 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12 xl:p-14">
              <div className="lg:col-span-6">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4DDFFF]/20 bg-[#4DDFFF]/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4DDFFF]/85 sm:mb-6">
                  <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-[#4DDFFF]" />
                  {ui.platformTag}
                </p>

                <AudienceModeTransition variant="fade">
                <SectionHeader
                  heading={finalCta.heading}
                  headingAccent={finalCta.headingAccent}
                  align="left"
                  size="large"
                  premium
                  className="!mb-0"
                />

                <div className="mt-8 flex flex-col gap-5 sm:mt-10 lg:mt-12">
                  <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                    <MagneticButton
                      href={siteConfig.appStoreUrl}
                      external
                      size="large"
                      className="w-full justify-center sm:w-auto"
                    >
                      {finalCta.primaryCta}
                    </MagneticButton>
                    <Link
                      href="#how-it-works"
                      className="group inline-flex items-center justify-center gap-2 text-[15px] font-medium text-white/55 transition-colors hover:text-white/90 sm:justify-start"
                    >
                      <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-white/30">
                        {finalCta.secondaryCta}
                      </span>
                      <ArrowRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-90" />
                    </Link>
                  </div>
                  <AppStoreBadge />
                </div>
                </AudienceModeTransition>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.75, delay: 0.1, ease: REVEAL_EASE }}
                className="relative hidden lg:col-span-6 lg:block"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DDFFF]/15 blur-[80px]" />
                <div className="premium-frame relative ml-auto w-[88%]">
                  <Image
                    src={ctaScreen.src}
                    alt={ctaScreen.alt}
                    width={560}
                    height={440}
                    className="h-auto w-full object-cover object-top"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </CinematicSection>
  );
}
