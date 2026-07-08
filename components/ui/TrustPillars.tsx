"use client";

import { Apple, Shield, Sparkles, Wrench } from "lucide-react";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

const pillarIcons = [Apple, Wrench, Shield, Sparkles] as const;

export function TrustPillars({ className }: { className?: string }) {
  const ui = useUi();

  const pillars = [
    ui.trustPillarIos,
    ui.trustPillarNeutral,
    ui.trustPillarSecure,
    ui.trustPillarFree,
  ];

  return (
    <div
      className={cn(
        "trust-pillars-grid grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3",
        className
      )}
      role="list"
      aria-label="Platform trust signals"
    >
      {pillars.map((label, index) => {
        const Icon = pillarIcons[index] ?? Sparkles;

        return (
          <div
            key={label}
            role="listitem"
            className="trust-pillar-chip flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5 sm:px-3.5 sm:py-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#4DDFFF]/15 bg-[#4DDFFF]/[0.08] text-[#4DDFFF]">
              <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            </span>
            <span className="text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-white/50 sm:text-[10px] sm:tracking-[0.14em]">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
