"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { trustedBrands } from "@/lib/data/content";
import { cn } from "@/lib/cn";
import { heroFadeUp } from "@/components/hero/hero-motion";

export function HeroBrandStrip() {
  return (
    <motion.div
      variants={heroFadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.55 }}
      className="relative z-10 mt-14 border-t border-white/[0.06] pt-8 sm:mt-16 sm:pt-10"
    >
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
        Trusted by Barbers & Brands
      </p>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-5 sm:gap-x-12">
        {trustedBrands.map((brand) => (
          <div
            key={brand.name}
            className={cn(
              "flex items-center bg-transparent",
              brand.name !== "CutCoach" && brand.name === "BaByliss PRO" && "h-12 sm:h-14",
              brand.name !== "CutCoach" && brand.name === "Andis" && "h-10 sm:h-11"
            )}
          >
            {brand.name === "CutCoach" ? (
              <BrandLogo size="footer" className="opacity-90 hover:opacity-100" />
            ) : (
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={48}
                className={cn(
                  "w-auto object-contain object-left opacity-80 transition-opacity duration-300 hover:opacity-100",
                  brand.name === "BaByliss PRO" &&
                    "h-8 origin-left scale-[2.1] brightness-0 invert sm:h-9 sm:scale-[2.25]",
                  brand.name === "Andis" &&
                    "max-h-full max-w-[5rem] brightness-0 invert sm:max-w-[5.5rem]"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
