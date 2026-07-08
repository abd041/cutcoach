"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { HomeShell } from "@/components/entrance/HomeShell";
import { Hero } from "@/components/sections/Hero";
import { HeroTrustBar } from "@/components/sections/HeroTrustBar";
import { PlatformEcosystem } from "@/components/sections/PlatformEcosystem";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PlatformCompatibility } from "@/components/sections/PlatformCompatibility";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function HomePage() {
  return (
    <HomeShell>
      <ScrollProgress />
      <Navbar />
      <main
        id="main-content"
        className="relative scroll-mt-[calc(5.5rem+var(--safe-top))] sm:scroll-mt-24"
      >
        <Hero />
        <HeroTrustBar />
        <PlatformEcosystem />
        <FeatureHighlights />
        <HowItWorks />
        <PlatformCompatibility />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </HomeShell>
  );
}
