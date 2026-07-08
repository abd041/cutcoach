"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/cn";
import { useEntranceReady } from "@/lib/entrance/EntranceProvider";
import { useScrollSubscription } from "@/hooks/useScrollSubscription";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const ready = useEntranceReady();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.08,
    margin: "0px 0px -20% 0px",
  });
  const [scrollRevealed, setScrollRevealed] = useState(false);
  const visible = ready || inView || scrollRevealed;
  const words = children.split(" ");

  useEffect(() => {
    if (inView) setScrollRevealed(true);
  }, [inView]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      setScrollRevealed(true);
    }
  }, []);

  useScrollSubscription(() => {
    if (scrollRevealed || ready) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      setScrollRevealed(true);
    }
  });

  return (
    <Tag ref={ref as never} className={cn("inline", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-0.5">
          <motion.span
            className="inline-block"
            initial={false}
            animate={
              visible ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }
            }
            transition={{
              duration: 0.55,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
