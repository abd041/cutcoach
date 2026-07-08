"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useAudienceMode } from "@/lib/audience/AudienceModeProvider";
import {
  audienceModeTransition,
  audienceModeVariants,
  type AudienceTransitionVariant,
} from "@/lib/audience-motion";
import { cn } from "@/lib/cn";

interface AudienceModeTransitionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AudienceTransitionVariant;
  /** `wait` = exit then enter; `popLayout` = crossfade with layout morph */
  presenceMode?: "wait" | "popLayout" | "sync";
  layout?: boolean;
}

export function AudienceModeTransition({
  children,
  className,
  variant = "slide",
  presenceMode = "wait",
  layout = false,
}: AudienceModeTransitionProps) {
  const { mode } = useAudienceMode();
  const reduceMotion = useReducedMotion();
  const v = audienceModeVariants(mode, variant);

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <AnimatePresence mode={presenceMode} initial={false}>
      <motion.div
        key={mode}
        layout={layout}
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={audienceModeTransition()}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
