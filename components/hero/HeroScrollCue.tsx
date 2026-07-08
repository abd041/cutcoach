"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { useScrollSubscription } from "@/hooks/useScrollSubscription";

export function HeroScrollCue() {
  const ui = useUi();
  const [visible, setVisible] = useState(true);

  useScrollSubscription(({ scrollY }) => {
    setVisible((prev) => {
      const next = scrollY < 80;
      return prev === next ? prev : next;
    });
  });

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none absolute inset-x-0 bottom-4 z-20 hidden flex-col items-center gap-2 sm:bottom-8 sm:flex"
      aria-hidden
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30">
        {ui.scrollToExplore}
      </span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-4 w-4 text-[#4DDFFF]/50" strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}
