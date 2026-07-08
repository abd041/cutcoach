"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useEntranceReady } from "@/lib/entrance/EntranceProvider";

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
  const words = children.split(" ");

  return (
    <Tag className={cn("inline", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={
              ready
                ? { y: 0, opacity: 1 }
                : { y: "110%", opacity: 0 }
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
