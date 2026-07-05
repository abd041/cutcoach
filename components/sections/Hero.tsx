"use client";

import { Container } from "@/components/ui/Container";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroCopy } from "@/components/hero/HeroCopy";
import { HeroPhones } from "@/components/hero/HeroPhones";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-premium relative isolate overflow-x-hidden pt-[calc(6.5rem+var(--safe-top))] sm:pt-[calc(7.5rem+var(--safe-top))] lg:pt-[calc(9rem+var(--safe-top))]"
    >
      <HeroBackground />

      <Container className="relative z-10 pb-8 sm:pb-16 lg:pb-20">
        <div className="grid items-start gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <HeroCopy />
          <HeroPhones />
        </div>
      </Container>
    </section>
  );
}
