"use client";

import { Scissors, Link2, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

function EcosystemNode({
  icon: Icon,
  title,
  description,
  variant,
}: {
  icon: typeof Scissors;
  title: string;
  description: string;
  variant: "barber" | "bridge" | "client";
}) {
  return (
    <article
      className={cn(
        "platform-eco-node relative flex h-full flex-col rounded-[1.35rem] border p-5 sm:rounded-[1.5rem] sm:p-6",
        variant === "bridge"
          ? "border-[#4DDFFF]/25 bg-[#4DDFFF]/[0.06]"
          : "border-white/[0.08] bg-white/[0.03]"
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-10 w-10 items-center justify-center rounded-xl border",
          variant === "bridge"
            ? "border-[#4DDFFF]/30 bg-[#4DDFFF]/10 text-[#4DDFFF]"
            : "border-white/[0.1] bg-white/[0.04] text-[#4DDFFF]"
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
      </div>
      <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
        {title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-[1.7] text-white/48">
        {description}
      </p>
    </article>
  );
}

export function PlatformEcosystem() {
  const ui = useUi();

  return (
    <CinematicSection
      id="platform"
      mood="horizon"
      aria-labelledby="platform-ecosystem-heading"
      className="section-divider relative -mt-4 sm:-mt-6"
    >
      <Container className="pb-[var(--section-pad)] pt-2 sm:pt-4">
        <SectionHeader
          headingId="platform-ecosystem-heading"
          tag={ui.ecosystemTag}
          heading={ui.ecosystemHeading}
          headingAccent={ui.ecosystemHeadingAccent}
          premium
        />

        <div className="platform-eco-grid relative mt-10 sm:mt-12">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-[#4DDFFF]/0 via-[#4DDFFF]/35 to-[#4DDFFF]/0 lg:block"
            aria-hidden
          />

          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-5">
            <EcosystemNode
              icon={Scissors}
              variant="barber"
              title={ui.ecosystemBarberTitle}
              description={ui.ecosystemBarberLine}
            />

            <div className="flex items-center justify-center lg:w-[11.5rem] lg:shrink-0">
              <div className="platform-eco-bridge w-full rounded-[1.25rem] border border-dashed border-[#4DDFFF]/25 bg-[#05070a]/80 px-4 py-5 text-center backdrop-blur-sm sm:px-5">
                <Link2
                  className="mx-auto h-5 w-5 text-[#4DDFFF]/70"
                  strokeWidth={2}
                  aria-hidden
                />
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4DDFFF]/85">
                  {ui.ecosystemBridgeTitle}
                </p>
                <p className="mt-2 text-xs leading-[1.65] text-white/42">
                  {ui.ecosystemBridgeLine}
                </p>
              </div>
            </div>

            <EcosystemNode
              icon={UserRound}
              variant="client"
              title={ui.ecosystemClientTitle}
              description={ui.ecosystemClientLine}
            />
          </div>
        </div>
      </Container>
    </CinematicSection>
  );
}
