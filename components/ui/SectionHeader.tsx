"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TextReveal } from "@/components/ui/TextReveal";
import { REVEAL_EASE } from "@/lib/motion";
import { useScrollSubscription } from "@/hooks/useScrollSubscription";

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
  /** Associates section landmark with this heading for screen readers. */
  headingId?: string;
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
  headingId,
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -40px 0px",
  });
  const [revealed, setRevealed] = useState(reduceMotion);

  useEffect(() => {
    if (inView) setRevealed(true);
  }, [inView]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > -40) {
      setRevealed(true);
    }
  }, []);

  useScrollSubscription(() => {
    if (revealed) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > -40) {
      setRevealed(true);
    }
  });

  const content = (
    <>
      {tag && <SectionEyebrow align={align}>{tag}</SectionEyebrow>}

      <h2
        id={headingId}
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
    </>
  );

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "section-header-gap",
          align === "center" && "mx-auto max-w-4xl text-center",
          className
        )}
      >
        {content}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: 1, y: revealed ? 0 : 18 }}
      transition={{ duration: 0.65, ease: REVEAL_EASE }}
      className={cn(
        "section-header-gap",
        align === "center" && "mx-auto max-w-4xl text-center",
        className
      )}
    >
      {content}
    </motion.div>
  );
}
