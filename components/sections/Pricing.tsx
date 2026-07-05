"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { pricingPlans, pricingSection, siteConfig } from "@/lib/data/content";
import { images } from "@/lib/images";
import { usePricingToggle } from "@/hooks/usePricingToggle";
import { cn } from "@/lib/cn";

export function Pricing() {
  const { isYearly, toggle } = usePricingToggle();

  return (
    <CinematicSection id="pricing" mood="spotlight" className="section-divider">
      <Container className="section-py relative">
        <SectionHeader
          tag={pricingSection.tag}
          heading={pricingSection.heading}
          headingAccent={pricingSection.headingAccent}
          description={pricingSection.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-[var(--section-header-gap)] flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6"
        >
          <button
            type="button"
            onClick={() => !isYearly || toggle()}
            className={cn(
              "focus-premium rounded-lg px-2 py-1 text-sm tracking-wide transition-colors duration-300",
              !isYearly ? "text-foreground" : "text-muted hover:text-foreground/80"
            )}
          >
            Billed Monthly
          </button>
          <button
            type="button"
            onClick={toggle}
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            className="pricing-toggle focus-premium relative h-9 w-16 shrink-0 rounded-full border border-white/10 p-1"
          >
            <motion.div
              animate={{ x: isYearly ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 520, damping: 32, mass: 0.7 }}
              className="h-7 w-7 rounded-full bg-accent shadow-glow-accent"
            />
          </button>
          <button
            type="button"
            onClick={() => isYearly || toggle()}
            className={cn(
              "focus-premium rounded-lg px-2 py-1 text-center text-sm tracking-wide transition-colors duration-300",
              isYearly ? "text-accent-light" : "text-muted hover:text-foreground/80"
            )}
          >
            Billed Yearly
            <span className="text-muted/90"> (save 15%)</span>
          </button>
        </motion.div>

        <div className="relative mt-8 flex flex-col items-center gap-8 sm:mt-10 lg:mt-12 lg:flex-row lg:items-end lg:justify-center lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 28,
              }}
              whileHover={{ y: plan.highlighted ? -10 : -6 }}
              className={cn(
                "relative flex w-full max-w-sm flex-col overflow-hidden rounded-[1.35rem] border p-6 sm:rounded-[1.75rem] sm:p-8 lg:p-10",
                plan.highlighted
                  ? "pricing-card-featured gradient-border z-10 border-accent/35 lg:scale-105"
                  : "pricing-card border-white/[0.06]"
              )}
            >
              {plan.highlighted && (
                <>
                  <div className="pointer-events-none absolute inset-0">
                    <Image
                      src={images.priceGlow}
                      alt=""
                      fill
                      className="object-cover opacity-20"
                      aria-hidden
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    aria-hidden
                  />
                  <span className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-accent-light">
                    {plan.badge}
                  </span>
                </>
              )}

              <div className="relative flex flex-1 flex-col">
                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted whitespace-pre-line">
                  {plan.description}
                </p>
                <div className="mt-10">
                  <span className="font-display text-5xl font-bold tracking-tight">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-2 text-sm text-muted">/ month</span>
                </div>
                <div className="mt-10">
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
                <div className="mt-12 flex-1 border-t border-white/[0.06] pt-10">
                  <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
                    Features +
                  </p>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-muted">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </CinematicSection>
  );
}
