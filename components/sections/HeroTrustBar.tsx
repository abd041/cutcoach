"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Coins,
  Gift,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useAudienceContent } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const fallbackStatIcons = [Gift, Coins, Clock] as const;

const statIcons: Record<string, LucideIcon> = {
  "Free Sessions": Gift,
  "Free Credits": Gift,
  "Monthly Credits": Coins,
  "To Start Training": Clock,
  "Cost Forever": Gift,
  "Passport Profile": Star,
  "To Set Up": Clock,
  "QR Profile": Star,
  "Créditos gratis": Gift,
  "Créditos mensuales": Coins,
  "Para empezar a entrenar": Clock,
  "Costo para siempre": Gift,
  "Perfil QR": Star,
  "Para configurarlo": Clock,
  "Crédits gratuits": Gift,
  "Crédits mensuels": Coins,
  "Pour commencer l'entraînement": Clock,
  "Coût pour toujours": Gift,
  "Profil QR": Star,
  "Pour configurer": Clock,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

function ColumnLabel({ children }: { children: string }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
      {children}
    </p>
  );
}

function TrustDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "trust-bar-divider pointer-events-none hidden shrink-0 lg:block",
        className
      )}
      aria-hidden
    />
  );
}

function TrustStatTile({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const Icon = statIcons[label] ?? fallbackStatIcons[index] ?? Gift;

  return (
    <motion.div
      variants={itemVariants}
      transition={{ delay: 0.15 + index * 0.08 }}
      className="trust-stat-chip group min-w-[8.75rem] shrink-0 snap-center sm:min-w-0"
    >
      <div className="mx-auto mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#4DDFFF] transition-colors duration-300 group-hover:border-[#4DDFFF]/25 group-hover:bg-[#4DDFFF]/10 sm:mb-3">
        <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      </div>
      <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
        <AnimatedCounter
          value={value}
          suffix={suffix}
          duration={1.8}
          className="trust-stat-value tabular-nums"
        />
      </p>
      <p className="mt-1.5 text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/45 sm:text-[10px] sm:tracking-[0.18em]">
        {label}
      </p>
    </motion.div>
  );
}

function AvatarStack({
  avatars,
  label,
}: {
  avatars: string[];
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {avatars.map((initials, index) => (
          <div
            key={initials}
            className="trust-avatar flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#060a10] text-[10px] font-semibold text-white/80"
            style={{ zIndex: avatars.length - index }}
          >
            {initials}
          </div>
        ))}
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/35">
        {label}
      </span>
    </div>
  );
}

export function HeroTrustBar() {
  const { stats, trustBar } = useAudienceContent();
  const ui = useUi();

  return (
    <section
      aria-label="App download and social proof"
      className="relative -mt-4 bg-[#05070a] pb-10 pt-0 sm:-mt-6 sm:pb-14"
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
          transition={{ duration: 0.7, ease }}
          className="trust-bar-shell relative overflow-hidden rounded-[1.35rem] p-px sm:rounded-[1.5rem]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_0%,rgba(77,223,255,0.14),transparent_55%)]" />
          <div className="noise-overlay pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.28]" aria-hidden />
          <div className="trust-bar-vignette pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />

          <div className="relative overflow-hidden rounded-[1.32rem] bg-[#060a10]/92 backdrop-blur-2xl sm:rounded-[1.47rem]">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              aria-hidden
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col gap-8 px-5 py-7 sm:gap-10 sm:px-8 sm:py-9 lg:flex-row lg:items-stretch lg:gap-0 lg:px-0 lg:py-10"
            >
              {/* Get started */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-start gap-4 lg:w-[min(100%,220px)] lg:shrink-0 lg:px-10"
              >
                <ColumnLabel>{trustBar.columnStart}</ColumnLabel>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
                  <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-[#4DDFFF]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    {trustBar.iosPill}
                  </span>
                </span>

                <div className="trust-badge-frame w-full rounded-2xl p-3">
                  <AppStoreBadge size="large" />
                </div>

                <p className="text-xs leading-relaxed text-white/40">
                  {trustBar.downloadNote}
                </p>
              </motion.div>

              <TrustDivider className="mx-0 my-0 h-auto w-px self-stretch" />

              {/* Metrics */}
              <motion.div
                variants={itemVariants}
                className="min-w-0 flex-1 lg:px-10"
              >
                <ColumnLabel>{trustBar.columnMetrics}</ColumnLabel>

                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30 sm:hidden">
                  {ui.swipeForStats}
                </p>

                <div className="trust-stats-scroll relative mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                  {stats.map((stat, index) => (
                    <TrustStatTile
                      key={stat.label}
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>

              <TrustDivider className="mx-0 my-0 h-auto w-px self-stretch" />

              {/* Social proof */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4 lg:w-[min(100%,260px)] lg:shrink-0 lg:px-10"
              >
                <ColumnLabel>{trustBar.columnProof}</ColumnLabel>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="trust-star h-3.5 w-3.5 fill-[#4DDFFF] text-[#4DDFFF]"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    {trustBar.trustedLabel}
                  </span>
                </div>

                <blockquote className="border-l-2 border-[#4DDFFF]/35 pl-4">
                  <p className="text-sm italic leading-relaxed text-white/55 sm:text-[15px]">
                    &ldquo;{trustBar.quote}&rdquo;
                  </p>
                </blockquote>

                <p className="text-sm leading-[1.75] text-white/42 sm:text-[15px]">
                  {trustBar.mission}
                </p>

                <AvatarStack
                  avatars={trustBar.avatars}
                  label={trustBar.avatarLabel}
                />

                <p className="text-xs text-white/30">{trustBar.earlyAccess}</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
