"use client";

import { motion } from "framer-motion";
import { Scissors, UserRound } from "lucide-react";
import type { AudienceMode } from "@/lib/audience/types";
import { useAudienceMode } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { heroFadeUp } from "@/components/hero/hero-motion";

const audienceIcons: Record<AudienceMode, typeof Scissors> = {
  barber: Scissors,
  client: UserRound,
};

export function HeroPlatformIntro() {
  const ui = useUi();
  const { mode, setMode } = useAudienceMode();

  const cards: {
    id: AudienceMode;
    title: string;
    line: string;
  }[] = [
    {
      id: "barber",
      title: ui.platformBarberTitle,
      line: ui.platformBarberLine,
    },
    {
      id: "client",
      title: ui.platformClientTitle,
      line: ui.platformClientLine,
    },
  ];

  return (
    <motion.div variants={heroFadeUp} className="mb-6 sm:mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#4DDFFF]/20 bg-[#4DDFFF]/[0.06] px-3 py-1.5">
        <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-[#4DDFFF]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4DDFFF]/90 sm:text-[11px]">
          {ui.platformTag}
        </span>
      </div>

      <p className="mt-4 max-w-[540px] text-[14px] font-medium leading-snug text-white/62 sm:text-[15px]">
        {ui.platformHeadline}
      </p>

      <div
        role="group"
        aria-label={ui.experience}
        className="mt-4 grid gap-2.5 sm:grid-cols-2 sm:gap-3"
      >
        {cards.map((card) => {
          const isActive = mode === card.id;
          const Icon = audienceIcons[card.id];

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setMode(card.id)}
              aria-pressed={isActive}
              className={cn(
                "focus-premium group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:min-h-[7.25rem] sm:p-4",
                isActive
                  ? "border-[#4DDFFF]/35 bg-[#4DDFFF]/[0.08] shadow-[0_0_32px_-14px_rgba(77,223,255,0.55)]"
                  : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.14] hover:bg-white/[0.05]"
              )}
            >
              {isActive && (
                <span
                  className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#4DDFFF]/60 to-transparent"
                  aria-hidden
                />
              )}
              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-lg border transition-colors",
                    isActive
                      ? "border-[#4DDFFF]/30 bg-[#4DDFFF]/15 text-[#4DDFFF]"
                      : "border-white/[0.08] bg-white/[0.04] text-white/45 group-hover:text-[#4DDFFF]/80"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                </span>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.18em] transition-colors",
                    isActive ? "text-[#4DDFFF]" : "text-white/45 group-hover:text-white/62"
                  )}
                >
                  {card.title}
                </span>
              </span>
              <span
                className={cn(
                  "mt-2.5 block text-[13px] leading-[1.6] transition-colors sm:text-sm",
                  isActive ? "text-white/78" : "text-white/48 group-hover:text-white/62"
                )}
              >
                {card.line}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/32 sm:text-xs">
        {ui.platformConnected}
      </p>
    </motion.div>
  );
}
