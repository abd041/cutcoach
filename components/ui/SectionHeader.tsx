"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TextReveal } from "@/components/ui/TextReveal";

interface SectionHeaderProps {
  tag?: string;
  heading: string;
  headingAccent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  size?: "default" | "large";
  premium?: boolean;
  pills?: string[];
}

export function SectionHeader({
  tag,
  heading,
  headingAccent,
  description,
  align = "center",
  className,
  size = "default",
  premium = false,
  pills,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "section-header-gap",
        align === "center" && "mx-auto max-w-4xl text-center",
        className
      )}
    >
      {tag && <SectionEyebrow align={align}>{tag}</SectionEyebrow>}

      <h2
        className={cn(
          "font-display font-bold leading-[0.95] tracking-[-0.03em] text-white",
          size === "large"
            ? "text-[1.75rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem]"
            : "text-[1.625rem] leading-[1.08] sm:text-4xl lg:text-5xl"
        )}
      >
        {premium ? (
          <>
            <span className="block">
              <TextReveal as="span" delay={0.08}>
                {heading}
              </TextReveal>
            </span>
            {headingAccent && (
              <span className="mt-1 block sm:mt-2">
                <TextReveal
                  as="span"
                  delay={0.28}
                  className="hero-premium-gradient-text"
                >
                  {headingAccent}
                </TextReveal>
              </span>
            )}
          </>
        ) : (
          <>
            <span className="block">{heading}</span>
            {headingAccent && (
              <span className="hero-premium-accent-line mt-1 block sm:mt-2">
                {headingAccent}
              </span>
            )}
          </>
        )}
      </h2>

      {pills && pills.length > 0 && (
        <div
          className={cn(
            "mt-5 flex flex-wrap gap-2 sm:mt-6",
            align === "center" && "justify-center"
          )}
        >
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.16em]"
            >
              {pill}
            </span>
          ))}
        </div>
      )}

      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-[1.75] text-white/50 sm:mt-8 sm:text-[17px]",
            align === "center" && "mx-auto max-w-3xl",
            align === "left" && "max-w-xl"
          )}
        >
          {description.split("\n").map((line, i) => (
            <span key={i} className={cn("block", i > 0 && "mt-0.5")}>
              {line}
            </span>
          ))}
        </p>
      )}
    </motion.div>
  );
}
