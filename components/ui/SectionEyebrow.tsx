import { cn } from "@/lib/cn";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionEyebrow({
  children,
  className,
  align = "left",
}: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        "mb-6 inline-flex items-center gap-3 sm:mb-8",
        align === "center" && "mx-auto",
        className
      )}
    >
      <span className="h-px w-10 bg-[#4DDFFF] sm:w-12" aria-hidden />
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-[11px] sm:tracking-[0.24em] lg:text-[12px]">
        {children}
      </span>
      {align === "center" && (
        <span className="h-px w-10 bg-[#4DDFFF] sm:w-12" aria-hidden />
      )}
    </div>
  );
}
