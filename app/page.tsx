import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { HeroTrustBar } from "@/components/sections/HeroTrustBar";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PlatformCompatibility } from "@/components/sections/PlatformCompatibility";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative scroll-mt-[calc(5.5rem+var(--safe-top))] sm:scroll-mt-24">
        <Hero />
        <HeroTrustBar />
        <FeatureHighlights />
        <HowItWorks />
        <Pricing />
        <PlatformCompatibility />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
