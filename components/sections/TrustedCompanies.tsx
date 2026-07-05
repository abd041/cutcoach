"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { trustedBrands } from "@/lib/data/content";

export function TrustedCompanies() {
  const brands = [...trustedBrands, ...trustedBrands];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-muted/60"
        >
          Trusted by barbers using industry-leading tools
        </motion.p>

        <div className="relative flex items-center justify-center gap-16 opacity-30 grayscale lg:gap-28">
          {brands.slice(0, 6).map((brand, i) => (
            <motion.div
              key={`${brand.name}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ opacity: 1, scale: 1.05, filter: "grayscale(0)" }}
              className="transition-all duration-500"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={40}
                className="h-7 w-auto object-contain lg:h-8"
              />
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
