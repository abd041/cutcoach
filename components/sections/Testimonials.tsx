"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { CinematicSection } from "@/components/ui/CinematicSection";
import {
  siteConfig,
  testimonialPreviewThemes,
  testimonialsSection,
} from "@/lib/data/content";

export function Testimonials() {
  return (
    <CinematicSection id="testimonials" mood="void" className="section-divider">
      <Container className="section-py relative">
        <SectionHeader
          tag={testimonialsSection.tag}
          heading={testimonialsSection.heading}
          headingAccent={testimonialsSection.headingAccent}
          description={testimonialsSection.description}
        />

        <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          {testimonialPreviewThemes.map((theme, index) => (
            <motion.article
              key={theme.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hero-glass-card relative flex flex-col p-6 sm:p-7"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4DDFFF]/80">
                {theme.metric}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {theme.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-[1.75] text-white/45">
                {theme.description}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <span className="text-xs font-semibold text-white/30">?</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70">Early Access Barber</p>
                  <p className="text-xs text-white/35">Review coming soon</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-6 sm:mt-12"
        >
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center sm:gap-3">
            <span className="hidden h-px w-8 bg-[#4DDFFF]/60 sm:block sm:w-10" aria-hidden />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-[11px] sm:tracking-[0.24em]">
              Full Barber Stories — Coming Soon
            </span>
            <span className="hidden h-px w-8 bg-[#4DDFFF]/60 sm:block sm:w-10" aria-hidden />
          </div>

          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <AppStoreBadge size="large" />
            <Link
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white/90"
            >
              Join early access on iOS
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </CinematicSection>
  );
}
