"use client";

import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#05070A]" aria-hidden>
      <div className="hero-bg-gradient-drift hero-premium-gradient absolute inset-[-20%] opacity-90" />

      <div className="absolute left-[6%] top-[18%] h-[min(380px,48vw)] w-[min(380px,48vw)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,223,255,0.1)_0%,transparent_68%)] blur-3xl" />

      <div className="hero-bg-orb-breathe absolute right-[2%] top-[32%] h-[min(580px,58vw)] w-[min(580px,58vw)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.24)_0%,rgba(0,232,197,0.07)_42%,transparent_72%)] blur-[84px]" />

      <Image
        src="/decor/aurora-mesh.svg"
        alt=""
        width={1200}
        height={800}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.045]"
        priority
      />

      <div className="hero-premium-vignette absolute inset-0" />
      <div className="hero-premium-grain absolute inset-0 opacity-[0.03]" />
      <div className="hero-premium-fade-bottom absolute inset-x-0 bottom-0 h-40" />
    </div>
  );
}
