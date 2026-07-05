import { cn } from "@/lib/cn";

interface GlowOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "accent" | "purple" | "indigo";
}

const sizes = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
  xl: "h-[32rem] w-[32rem]",
};

const colors = {
  accent: "bg-accent/25",
  purple: "bg-purple-600/20",
  indigo: "bg-indigo-500/15",
};

export function GlowOrb({
  className,
  size = "lg",
  color = "accent",
}: GlowOrbProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-[100px] animate-pulse-glow",
        sizes[size],
        colors[color],
        className
      )}
      aria-hidden
    />
  );
}
