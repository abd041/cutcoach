"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { AudienceModeTransition } from "@/components/ui/AudienceModeTransition";
import {
  useAudienceContent,
} from "@/lib/audience/AudienceModeProvider";
import { siteConfig } from "@/lib/data/content";
import { images } from "@/lib/images";
import { usePricingToggle } from "@/hooks/usePricingToggle";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import type { PricingPlan } from "@/types";

const ease = [0.16, 1, 0.3, 1] as const;

function PlanCard({
  plan,
  index,
  isYearly,
}: {
  plan: PricingPlan;
  index: number;
  isYearly: boolean;
}) {
  const ui = useUi();
  const showYearly = isYearly && !plan.free;
  const price = showYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const billingUnit = plan.free
    ? null
    : showYearly
      ? ui.perYear
      : ui.perMonth;

  return (
    <motion.article
      className={cn(
        "relative flex w-full max-w-sm flex-col",
        plan.highlighted && "lg:z-10 lg:-mt-2 lg:mb-2"
      )}
    >
      <div
        className={cn(
          "pricing-card-shell relative flex h-full flex-col overflow-hidden rounded-[1.35rem] p-px sm:rounded-[1.75rem]",
          plan.highlighted && "pricing-card-shell--featured"
        )}
      >
        <div
          className={cn(
            "relative flex h-full flex-col overflow-hidden rounded-[1.32rem] p-6 sm:rounded-[1.72rem] sm:p-8 lg:p-9",
            plan.highlighted ? "bg-[#060a10]/95" : "bg-[#060a10]/88"
          )}
        >
          {plan.highlighted && (
            <>
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src={images.priceGlow}
                  alt=""
                  fill
                  className="object-cover opacity-[0.18]"
                  aria-hidden
                />
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                aria-hidden
              />
              {plan.badge && (
                <span className="pricing-featured-badge relative mb-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#4DDFFF]/30 bg-[#4DDFFF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4DDFFF]">
                  <Sparkles className="h-3 w-3" aria-hidden />
                  {plan.badge}
                </span>
              )}
            </>
          )}

          <span
            className="pricing-watermark pointer-events-none absolute -right-1 top-2 hidden select-none font-display text-[4.5rem] font-bold leading-none text-white/[0.03] sm:block"
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative flex flex-1 flex-col">
            <h3 className="font-display text-2xl font-semibold text-white">
              {plan.name}
            </h3>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/45">
              {plan.description}
            </p>

            <div className="mt-8 border-b border-white/[0.06] pb-8">
              <span className="font-display text-5xl font-bold tracking-tight text-white">
                {price}
              </span>
              {billingUnit && (
                <span className="ml-2 text-sm text-white/40">{billingUnit}</span>
              )}
              {showYearly && (
                <p className="mt-2 text-sm font-semibold text-[#4DDFFF]">
                  {ui.save15}
                </p>
              )}
              {showYearly && plan.yearlyEquivalent && (
                <p className="mt-1 text-sm font-medium text-white/55">
                  {plan.yearlyEquivalent}
                </p>
              )}
            </div>

            <div className="mt-8">
              <MagneticButton
                href={siteConfig.appStoreUrl}
                external
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full justify-center"
                size={plan.highlighted ? "large" : "default"}
              >
                {plan.cta}
              </MagneticButton>
            </div>

            <div className="mt-10 flex-1 border-t border-white/[0.06] pt-8">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                {ui.whatsIncluded}
              </p>
              <ul className="space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#4DDFFF]/25 bg-[#4DDFFF]/10">
                      <Check className="h-3 w-3 text-[#4DDFFF]" />
                    </span>
                    <span className="text-sm leading-relaxed text-white/50">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Pricing() {
  const content = useAudienceContent();
  const { pricing } = content;
  const { isYearly, toggle } = usePricingToggle();
  const ui = useUi();

  return (
    <CinematicSection
      id="pricing"
      mood="spotlight"
      aria-labelledby="pricing-heading"
      className="section-divider -mt-6 !overflow-visible sm:-mt-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_55%_70%_at_50%_0%,rgba(77,223,255,0.1),transparent_72%)]"
        aria-hidden
      />

      <Container className="section-py relative overflow-visible">
        <AudienceModeTransition
          variant="scale"
          presenceMode="popLayout"
          layout
        >
          <SectionHeader
            headingId="pricing-heading"
            tag={pricing.section.tag}
            heading={pricing.section.heading}
            headingAccent={pricing.section.headingAccent}
            description={pricing.section.description}
            pills={pricing.section.pillars}
            premium
          />

          {pricing.showBillingToggle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="pricing-toggle-shell mx-auto mb-10 flex max-w-md flex-col items-stretch justify-center gap-3 rounded-2xl p-4 sm:mb-12 sm:flex-row sm:items-center sm:gap-6 sm:p-5"
          >
            <button
              type="button"
              onClick={() => !isYearly || toggle()}
              className={cn(
                "focus-premium min-h-11 rounded-xl px-3 py-2.5 text-sm tracking-wide transition-colors duration-300 lg:rounded-lg lg:px-2 lg:py-1",
                !isYearly ? "text-white" : "text-white/45 hover:text-white/75"
              )}
            >
              {ui.billedMonthly}
            </button>
            <button
              type="button"
              onClick={toggle}
              role="switch"
              aria-checked={isYearly}
              aria-label={ui.toggleYearlyBilling}
              className="pricing-toggle focus-premium relative mx-auto h-11 w-[4.5rem] shrink-0 rounded-full border border-white/10 p-1 lg:mx-0 lg:h-9 lg:w-16"
            >
              <motion.div
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 520,
                  damping: 32,
                  mass: 0.7,
                }}
                className="h-9 w-9 rounded-full bg-accent shadow-glow-accent lg:h-7 lg:w-7"
              />
            </button>
            <button
              type="button"
              onClick={() => isYearly || toggle()}
              className={cn(
                "focus-premium min-h-11 rounded-xl px-3 py-2.5 text-center text-sm tracking-wide transition-colors duration-300 lg:rounded-lg lg:px-2 lg:py-1",
                isYearly ? "text-[#4DDFFF]" : "text-white/45 hover:text-white/75"
              )}
            >
              {ui.billedYearly}
              <span className="text-white/40"> {ui.save15}</span>
            </button>
          </motion.div>
        )}

        {pricing.freeProduct && (
          <article className="mx-auto w-full max-w-lg">
            <div className="pricing-card-shell pricing-card-shell--featured relative overflow-hidden rounded-[1.35rem] p-px sm:rounded-[1.75rem]">
              <div className="relative overflow-hidden rounded-[1.32rem] bg-[#060a10]/95 p-6 sm:rounded-[1.72rem] sm:p-10">
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src={images.priceGlow}
                    alt=""
                    fill
                    className="object-cover opacity-[0.18]"
                    aria-hidden
                  />
                </div>
                <span className="relative mb-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#4DDFFF]/30 bg-[#4DDFFF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4DDFFF]">
                  <Sparkles className="h-3 w-3" aria-hidden />
                  {pricing.freeProduct.badge}
                </span>
                <h3 className="relative font-display text-3xl font-semibold text-white">
                  {pricing.freeProduct.name}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/45">
                  {pricing.freeProduct.description}
                </p>
                <div className="relative mt-8 border-b border-white/[0.06] pb-8">
                  <span className="font-display text-5xl font-bold tracking-tight text-white">
                    {pricing.freeProduct.priceLabel ?? "$0"}
                  </span>
                  {!pricing.freeProduct.priceLabel && (
                    <span className="ml-2 text-sm text-white/40">
                      {ui.forever}
                    </span>
                  )}
                </div>
                <div className="relative mt-8">
                  <MagneticButton
                    href={siteConfig.appStoreUrl}
                    external
                    className="w-full justify-center"
                    size="large"
                  >
                    {pricing.freeProduct.cta}
                  </MagneticButton>
                </div>
                <ul className="relative mt-10 space-y-3.5 border-t border-white/[0.06] pt-8">
                  {pricing.freeProduct.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#4DDFFF]/25 bg-[#4DDFFF]/10">
                        <Check className="h-3 w-3 text-[#4DDFFF]" />
                      </span>
                      <span className="text-sm leading-relaxed text-white/50">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        )}

        {pricing.plans.length > 0 && (
          <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
            {pricing.plans.map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                index={index}
                isYearly={isYearly}
              />
            ))}
          </div>
        )}

        {pricing.creditPacks && pricing.creditPacks.length > 0 && (
          <div className="mx-auto mt-12 max-w-3xl sm:mt-16">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4DDFFF]/70">
                {ui.oneTimePurchases}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                {pricing.creditPacksTitle ?? "Credit Packs"}
              </h3>
              {pricing.creditPacksDescription && (
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/45">
                  {pricing.creditPacksDescription}
                </p>
              )}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pricing.creditPacks.map((pack) => (
                <div
                  key={pack.credits}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-center backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-bold text-white">
                    {pack.credits}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {ui.credits}
                  </p>
                  <p className="mt-4 font-display text-xl font-semibold text-[#4DDFFF]">
                    {pack.price}
                  </p>
                  <p className="mt-1 text-xs text-white/35">{ui.oneTime}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {pricing.section.footnote && (
          <p className="mt-10 text-center text-sm text-white/35 sm:mt-12">
            {pricing.section.footnote}
          </p>
        )}
        </AudienceModeTransition>
      </Container>
    </CinematicSection>
  );
}
