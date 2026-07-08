/** Shared motion tokens — keep reveals consistent across sections. */
export const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;

export const REVEAL_VIEWPORT = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -48px 0px",
} as const;

export function revealTransition(duration = 0.65, delay = 0) {
  return {
    duration,
    delay,
    ease: REVEAL_EASE,
  };
}
