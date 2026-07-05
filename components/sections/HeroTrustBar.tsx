"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { stats } from "@/lib/data/content";

export function HeroTrustBar() {
  return (
    <section
      aria-label="App download and social proof"
      className="relative bg-[#05070a] pb-10 pt-2 sm:pb-14 sm:pt-0"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DDFFF]/25 to-transparent"
        aria-hidden
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="trust-bar-shell relative overflow-hidden rounded-[1.35rem] p-px sm:rounded-[1.5rem]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_0%,rgba(77,223,255,0.12),transparent_55%)]" />

          <div className="relative rounded-[1.32rem] bg-[#060a10]/90 px-5 py-7 backdrop-blur-2xl sm:rounded-[1.47rem] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,200px)_1fr_minmax(0,240px)] lg:items-center lg:gap-0">
              {/* Download */}
              <div className="flex flex-col items-start gap-4 lg:border-r lg:border-white/[0.06] lg:pr-10">
                <SectionEyebrow className="!mb-0">Get the App</SectionEyebrow>
                <AppStoreBadge size="large" />
                <p className="text-xs leading-relaxed text-white/35">
                  Free to start on iOS. No card required for your first sessions.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:border-r lg:border-white/[0.06] lg:px-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="trust-stat-chip group text-center"
                  >
                    <p className="font-display text-lg font-bold tracking-tight text-[#4DDFFF] sm:text-2xl">
                      {stat.value}
                      <span className="text-[#4DDFFF]/85">{stat.suffix}</span>
                    </p>
                    <p className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-white/40 sm:mt-1.5 sm:text-[11px] sm:tracking-[0.16em]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Social proof */}
              <div className="flex flex-col gap-4 lg:pl-10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-sm text-[#4DDFFF]"
                        aria-hidden
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Barber Trusted
                  </span>
                </div>
                <p className="text-sm leading-[1.75] text-white/45 sm:text-[15px]">
                  Built for shop-floor pressure — real clients, real pacing, real
                  confidence behind the chair.
                </p>
                <p className="text-xs text-white/30">
                  Join barbers training smarter with CutCoach early access.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
