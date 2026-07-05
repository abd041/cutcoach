import { cn } from "@/lib/cn";

type SectionMood =
  | "void"
  | "spotlight"
  | "horizon"
  | "theater"
  | "depth"
  | "climax";

interface CinematicSectionProps {
  children: React.ReactNode;
  mood?: SectionMood;
  className?: string;
  id?: string;
  bleed?: boolean;
}

const moodLights: Record<SectionMood, string> = {
  void: "cinematic-void",
  spotlight: "cinematic-spotlight",
  horizon: "cinematic-horizon",
  theater: "cinematic-theater",
  depth: "cinematic-depth",
  climax: "cinematic-climax",
};

export function CinematicSection({
  children,
  mood = "void",
  className,
  id,
  bleed = false,
}: CinematicSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-breath relative isolate overflow-hidden",
        bleed && "section-bleed",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          moodLights[mood]
        )}
        aria-hidden
      />
      <div className="vignette pointer-events-none absolute inset-0" aria-hidden />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      {children}
    </section>
  );
}
