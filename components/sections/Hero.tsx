"use client";

import { Container } from "@/components/ui/Container";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroCopy } from "@/components/hero/HeroCopy";
import { HeroPhones } from "@/components/hero/HeroPhones";
import { HeroScrollCue } from "@/components/hero/HeroScrollCue";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-premium relative isolate overflow-x-hidden pb-14 pt-[calc(6.25rem+var(--safe-top))] sm:pb-16 sm:pt-[calc(7rem+var(--safe-top))] lg:pb-20 lg:pt-[calc(8.5rem+var(--safe-top))]"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
          <HeroCopy />
          <HeroPhones />
        </div>
      </Container>

      <HeroScrollCue />
    </section>
  );
}
