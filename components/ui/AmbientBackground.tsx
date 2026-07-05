import { cn } from "@/lib/cn";

type AmbientVariant =
  | "hero"
  | "features"
  | "workflow"
  | "showcase"
  | "pricing"
  | "cta"
  | "minimal";

interface AmbientBackgroundProps {
  variant?: AmbientVariant;
  className?: string;
}

const variantStyles: Record<AmbientVariant, string> = {
  hero: "ambient-hero",
  features: "ambient-features",
  workflow: "ambient-workflow",
  showcase: "ambient-showcase",
  pricing: "ambient-pricing",
  cta: "ambient-cta",
  minimal: "ambient-minimal",
};

export function AmbientBackground({
  variant = "minimal",
  className,
}: AmbientBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        variantStyles[variant],
        className
      )}
      aria-hidden
    >
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-orb ambient-orb-3" />
      <div className="ambient-mesh" />
      <div className="noise-overlay absolute inset-0 opacity-60" />
    </div>
  );
}
