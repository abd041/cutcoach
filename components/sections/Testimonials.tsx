"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gauge, Layers, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { siteConfig } from "@/lib/data/content";
import { useAudienceContent } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";

const ease = [0.16, 1, 0.3, 1] as const;

const themeIcons = {
  Speed: Gauge,
  Consistency: Layers,
  Confidence: Shield,
  Clarity: Layers,
  Control: Shield,
} as const;

const themeGlows = [
  "rgba(77, 223, 255, 0.14)",
  "rgba(0, 200, 255, 0.12)",
  "rgba(0, 232, 197, 0.1)",
];

export function Testimonials() {
  const { testimonialsSection, testimonialPreviewThemes } = useAudienceContent();
  const ui = useUi();

  return (
    <CinematicSection
      id="testimonials"
      mood="void"
      className="section-divider -mt-6 !overflow-visible sm:-mt-8"
    >
      <Container className="section-py relative overflow-visible">
        <SectionHeader
          key={testimonialsSection.heading}
          tag={testimonialsSection.tag}
          heading={testimonialsSection.heading}
          headingAccent={testimonialsSection.headingAccent}
          description={testimonialsSection.description}
          pills={testimonialsSection.pillars}
          premium
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {testimonialPreviewThemes.map((theme, index) => {
            const Icon =
              themeIcons[theme.metric as keyof typeof themeIcons] ?? Gauge;

            return (
              <motion.article
                key={theme.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                className="testimonial-theme-shell relative overflow-hidden rounded-[1.35rem] p-px sm:rounded-[1.5rem]"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.32rem] bg-[#060a10]/92 p-6 sm:rounded-[1.47rem] sm:p-7">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-[48px]"
                    style={{ backgroundColor: themeGlows[index] }}
                    aria-hidden
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4DDFFF]/80">
                      <span className="h-px w-4 bg-[#4DDFFF]/60" aria-hidden />
                      {theme.metric}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#4DDFFF]/20 bg-[#4DDFFF]/10">
                      <Icon className="h-4 w-4 text-[#4DDFFF]" aria-hidden />
                    </span>
                  </div>

                  <h3 className="relative mt-5 font-display text-xl font-semibold text-white">
                    {theme.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-[1.75] text-white/45">
                    {theme.description}
                  </p>

                  <div className="relative mt-6 border-t border-white/[0.06] pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                      {ui.earlyAccessOutcome}
                    </p>
                    <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-white/65">
                      <span className="hero-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DDFFF]" />
                      {theme.outcome}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease }}
          className="testimonial-cta-shell mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.35rem] p-px sm:mt-12 sm:rounded-[1.5rem]"
        >
          <div className="relative flex flex-col items-center gap-6 rounded-[1.32rem] bg-[#060a10]/90 px-6 py-8 text-center sm:rounded-[1.47rem] sm:px-10 sm:py-10">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span className="hidden h-px w-8 bg-[#4DDFFF]/60 sm:block sm:w-10" aria-hidden />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-[11px] sm:tracking-[0.22em]">
                {testimonialsSection.storiesComingSoon}
              </span>
              <span className="hidden h-px w-8 bg-[#4DDFFF]/60 sm:block sm:w-10" aria-hidden />
            </div>

            <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
              <MagneticButton
                href={siteConfig.appStoreUrl}
                external
                size="large"
                className="w-full justify-center sm:w-auto"
              >
                {testimonialsSection.cta}
              </MagneticButton>
              <Link
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white/85"
              >
                {ui.viewOnAppStore}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <AppStoreBadge />
          </div>
        </motion.div>
      </Container>
    </CinematicSection>
  );
}
