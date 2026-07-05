"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#05070A]" aria-hidden>
      <motion.div
        className="hero-premium-gradient absolute inset-[-20%] opacity-90"
        animate={{ rotate: [0, 2, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute left-[8%] top-[22%] h-[min(420px,50vw)] w-[min(420px,50vw)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,223,255,0.12)_0%,transparent_68%)] blur-3xl" />

      <motion.div
        className="absolute right-[5%] top-[38%] h-[min(560px,55vw)] w-[min(560px,55vw)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.22)_0%,rgba(0,232,197,0.06)_42%,transparent_72%)] blur-[80px]"
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-premium-vignette absolute inset-0" />
      <div className="hero-premium-grain absolute inset-0 opacity-[0.025]" />
    </div>
  );
}
