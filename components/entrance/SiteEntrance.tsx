"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEntrance } from "@/lib/entrance/EntranceProvider";
import { images } from "@/lib/images";

const ease = [0.16, 1, 0.3, 1] as const;

/** Soft ambient motes — sparse CSS particles, GPU-friendly. */
function AmbientMotes() {
  const motes = [
    { x: "18%", y: "28%", delay: 0, size: 0.35 },
    { x: "72%", y: "22%", delay: 0.4, size: 0.28 },
    { x: "58%", y: "68%", delay: 0.15, size: 0.42 },
    { x: "30%", y: "74%", delay: 0.55, size: 0.3 },
    { x: "84%", y: "54%", delay: 0.25, size: 0.25 },
    { x: "12%", y: "58%", delay: 0.7, size: 0.22 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {motes.map((mote, index) => (
        <span
          key={index}
          className="entrance-mote absolute rounded-full bg-[#4DDFFF]"
          style={{
            left: mote.x,
            top: mote.y,
            width: `${mote.size * 8}px`,
            height: `${mote.size * 8}px`,
            animationDelay: `${mote.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function SiteEntrance() {
  const { isPlaying, completeEntrance } = useEntrance();
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    if (!isPlaying) return;

    // Reveal content underneath just before the curtain lifts.
    const readyTimer = window.setTimeout(() => {
      setPhase("out");
      completeEntrance();
    }, 1980);

    return () => window.clearTimeout(readyTimer);
  }, [isPlaying, completeEntrance]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          key="site-entrance"
          role="presentation"
          aria-hidden
          className="entrance-overlay fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#030508]"
          initial={{ opacity: 1 }}
          animate={
            phase === "out"
              ? { opacity: 0, scale: 1.04, filter: "blur(10px)" }
              : { opacity: 1, scale: 1, filter: "blur(0px)" }
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          {/* Camera vignette / focus rim */}
          <div className="entrance-vignette pointer-events-none absolute inset-0" />

          {/* Blueprint grid */}
          <motion.div
            className="entrance-grid pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "out" ? 0 : 0.55 }}
            transition={{ duration: 0.7, ease }}
          />

          {/* Soft radial glow behind logo */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(60vw,28rem)] w-[min(60vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(77,223,255,0.22) 0%, rgba(0,200,255,0.06) 42%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: phase === "out" ? 0.9 : [0.35, 0.65, 0.5],
              scale: phase === "out" ? 1.55 : [0.85, 1.05, 1],
            }}
            transition={
              phase === "out"
                ? { duration: 0.55, ease }
                : { duration: 2.2, ease: "easeInOut" }
            }
          />

          <AmbientMotes />

          {/* Focus crosshair — subtle, Apple/Tesla-like */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(52vw,16rem)] w-[min(52vw,16rem)] -translate-x-1/2 -translate-y-1/2 sm:h-64 sm:w-64"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: phase === "out" ? 0 : 0.45, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <span className="entrance-corner entrance-corner--tl" />
            <span className="entrance-corner entrance-corner--tr" />
            <span className="entrance-corner entrance-corner--bl" />
            <span className="entrance-corner entrance-corner--br" />
          </motion.div>

          {/* Logo stage */}
          <div className="relative z-10 flex flex-col items-center px-6">
            <motion.div
              className="entrance-logo-stage relative"
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{
                opacity: phase === "out" ? 0 : 1,
                scale: phase === "out" ? 1.08 : 1,
                y: 0,
              }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
            >
              {/* Hair-strand guideline accents */}
              <motion.span
                className="entrance-guideline entrance-guideline--a"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: phase === "out" ? 0 : 0.55 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
              />
              <motion.span
                className="entrance-guideline entrance-guideline--b"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: phase === "out" ? 0 : 0.4 }}
                transition={{ duration: 0.7, delay: 0.7, ease }}
              />

              <div className="entrance-logo-mask relative overflow-hidden">
                <Image
                  src={images.logo}
                  alt=""
                  width={280}
                  height={220}
                  priority
                  unoptimized
                  className="entrance-logo relative z-10 h-auto w-[min(58vw,12.5rem)] drop-shadow-[0_0_32px_rgba(77,223,255,0.28)] sm:w-[13.5rem]"
                />

                {/* AI scan line */}
                <motion.span
                  className="entrance-scan pointer-events-none absolute inset-x-[-8%] z-20 h-[2px]"
                  initial={{ top: "8%", opacity: 0 }}
                  animate={{
                    top: ["8%", "92%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1.15,
                    delay: 0.75,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              </div>
            </motion.div>

            <motion.p
              className="mt-7 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35 sm:mt-8 sm:tracking-[0.38em]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: phase === "out" ? 0 : 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.05, ease }}
            >
              CutCoach
            </motion.p>

            {/* Progress hairline */}
            <div className="entrance-progress mt-8 h-px w-28 overflow-hidden rounded-full bg-white/[0.08] sm:w-36">
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-transparent via-[#4DDFFF] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Soft wash that blooms into the hero */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "out" ? 1 : 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(77,223,255,0.18), transparent 65%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
