"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { featureSection, features } from "@/lib/data/content";
import { cn } from "@/lib/cn";

const sideLayouts = [
  { imageSide: "right" as const, number: "01" },
  { imageSide: "left" as const, number: "02" },
  { imageSide: "right" as const, number: "03" },
];

export function FeatureHighlights() {
  const [first, second, third, fourth] = features;

  return (
    <CinematicSection id="features" mood="horizon" className="section-divider">
      <div className="section-py">
        <Container className="relative">
          <SectionHeader
            tag={featureSection.tag}
            heading={featureSection.heading}
            headingAccent={featureSection.headingAccent}
            description={featureSection.description}
            size="large"
          />
        </Container>

        <div className="feature-stack">
          {[first, second, third].map((feature, index) => (
            <SideFeaturePanel
              key={feature.title}
              feature={feature}
              layout={sideLayouts[index]}
            />
          ))}
          {fourth && <CenterFeaturePanel feature={fourth} number="04" />}
        </div>
      </div>
    </CinematicSection>
  );
}

function SideFeaturePanel({
  feature,
  layout,
}: {
  feature: (typeof features)[0];
  layout: (typeof sideLayouts)[0];
}) {
  const isImageLeft = layout.imageSide === "left";

  return (
    <div className="relative">
      <Container>
        <div
          className={cn(
            "grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14",
            isImageLeft && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
          )}
        >
          <div className="flex flex-col justify-center lg:max-w-md lg:justify-self-center xl:max-w-lg">
            <span className="feature-index">{layout.number}</span>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[2.25rem] lg:leading-[1.15]">
              {feature.title}
            </h3>
            <p className="mt-4 text-base leading-[1.75] text-white/50 lg:mt-5 lg:text-[17px]">
              {feature.description}
            </p>
          </div>

          <div className="group relative w-full lg:max-w-xl lg:justify-self-center">
            <div className="pointer-events-none absolute -inset-6 rounded-full bg-[#4DDFFF]/8 blur-[64px]" />
            <div className="premium-frame card-rim-light relative">
              <div className="relative aspect-[4/3] w-full">
                {feature.bgImage && (
                  <Image
                    src={feature.bgImage}
                    alt=""
                    fill
                    className="object-cover opacity-20"
                    aria-hidden
                    unoptimized
                  />
                )}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function CenterFeaturePanel({
  feature,
  number,
}: {
  feature: (typeof features)[0];
  number: string;
}) {
  return (
    <div className="relative px-5 sm:px-6 lg:px-8">
      <Container>
        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute -inset-x-[10%] top-1/2 h-1/2 -translate-y-1/2 rounded-full bg-[#4DDFFF]/10 blur-[80px]" />
          <div className="premium-frame card-rim-light relative">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[21/10]">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover object-top"
                sizes="100vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/25 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center lg:mt-10">
          <span className="feature-index mx-auto">{number}</span>
          <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            {feature.title}
          </h3>
          <p className="mt-4 text-base leading-[1.75] text-white/50 lg:text-[17px]">
            {feature.description}
          </p>
        </div>
      </Container>
    </div>
  );
}
