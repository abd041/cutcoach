"use client";

import { motion } from "framer-motion";
import type { AudienceMode } from "@/lib/audience/types";
import { useAudienceMode } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

const modes: AudienceMode[] = ["barber", "client"];

interface AudienceModeToggleProps {
  className?: string;
  size?: "nav" | "hero";
}

export function AudienceModeToggle({
  className,
  size = "nav",
}: AudienceModeToggleProps) {
  const { mode, setMode } = useAudienceMode();
  const ui = useUi();
  const isHero = size === "hero";
  const labels: Record<AudienceMode, string> = {
    barber: ui.barber,
    client: ui.client,
  };

  return (
    <div
      role="group"
      aria-label={ui.experience}
      className={cn(
        "audience-mode-toggle relative isolate inline-flex rounded-full border border-[#4DDFFF]/30 bg-[#0a1018]/90 p-1 shadow-[0_0_28px_-10px_rgba(77,223,255,0.45)] backdrop-blur-md",
        isHero && "w-full max-w-sm sm:w-auto",
        className
      )}
    >
      <motion.span
        layoutId="audience-mode-pill"
        className="pointer-events-none absolute bottom-1 top-1 rounded-full bg-gradient-to-r from-[#4DDFFF] via-[#00c8ff] to-[#00e8c5] shadow-[0_0_24px_-6px_rgba(77,223,255,0.65)]"
        initial={false}
        animate={{
          left: mode === "barber" ? "0.25rem" : "calc(50% + 0.125rem)",
          width: "calc(50% - 0.375rem)",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
        aria-hidden
      />
      {modes.map((option) => {
        const isActive = mode === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setMode(option)}
            aria-pressed={isActive}
            className={cn(
              "focus-premium relative z-10 min-h-11 min-w-[4.75rem] flex-1 rounded-full px-4 text-[12px] font-bold tracking-[0.08em] transition-colors duration-300",
              isHero &&
                "min-h-11 min-w-[6.5rem] flex-1 px-6 text-[13px] sm:flex-none sm:text-sm",
              isActive
                ? "text-[#031018]"
                : "text-white/72 hover:text-white/92"
            )}
          >
            {labels[option]}
          </button>
        );
      })}
    </div>
  );
}
