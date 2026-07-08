import type { AudienceMode } from "@/lib/audience/types";
import { REVEAL_EASE } from "@/lib/motion";

export type AudienceTransitionVariant = "slide" | "fade" | "scale";

export const AUDIENCE_TRANSITION_DURATION = 0.42;

export function audienceModeVariants(
  mode: AudienceMode,
  variant: AudienceTransitionVariant = "slide"
) {
  switch (variant) {
    case "scale":
      return {
        initial: { opacity: 0, scale: 0.97, y: 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.97, y: -8 },
      };
    case "fade":
      return {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      };
    case "slide":
    default: {
      const enterX = mode === "barber" ? -24 : 24;
      const exitX = mode === "barber" ? 24 : -24;
      return {
        initial: { opacity: 0, x: enterX, y: 8 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: exitX, y: -6 },
      };
    }
  }
}

export function audienceModeTransition() {
  return {
    duration: AUDIENCE_TRANSITION_DURATION,
    ease: REVEAL_EASE,
  };
}
