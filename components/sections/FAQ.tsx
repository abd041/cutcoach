"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { useAudienceContent } from "@/lib/audience/AudienceModeProvider";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

export function FAQ() {
  const { faqItems, faqSection } = useAudienceContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [faqSection.heading]);

  return (
    <CinematicSection
      id="faq"
      mood="void"
      className="section-divider -mt-6 !overflow-visible sm:-mt-8"
    >
      <Container className="section-py relative overflow-visible">
        <SectionHeader
          key={faqSection.heading}
          tag={faqSection.tag}
          heading={faqSection.heading}
          headingAccent={faqSection.headingAccent}
          description={faqSection.description}
          pills={faqSection.pillars}
          premium
        />

        <div className="faq-shell mx-auto mt-10 max-w-3xl overflow-hidden rounded-[1.35rem] p-px sm:mt-12 sm:rounded-[1.5rem]">
          <div className="relative overflow-hidden rounded-[1.32rem] bg-[#060a10]/92 px-1 sm:rounded-[1.47rem] sm:px-2">
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden />
            <div className="divide-y divide-white/[0.06]">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: index * 0.04, duration: 0.45, ease }}
                    className="faq-row"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="focus-premium group flex w-full items-start justify-between gap-4 px-4 py-5 text-left sm:gap-6 sm:px-6 sm:py-6 lg:py-7"
                      aria-expanded={isOpen}
                    >
                      <div className="flex min-w-0 gap-3 sm:gap-5">
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 font-display text-sm font-bold transition-colors duration-300",
                            isOpen ? "text-[#4DDFFF]/70" : "text-white/15"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className={cn(
                            "font-display text-base font-medium leading-snug transition-colors sm:text-lg lg:text-xl",
                            isOpen
                              ? "text-white"
                              : "text-white/55 group-hover:text-white/85"
                          )}
                        >
                          {item.question}
                        </h3>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        className={cn(
                          "mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                          isOpen
                            ? "text-[#4DDFFF]"
                            : "text-white/40 group-hover:text-white/70"
                        )}
                      >
                        {isOpen ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 30,
                            mass: 0.8,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pl-[2.6rem] pr-4 text-[15px] leading-[1.75] text-white/50 sm:pb-8 sm:pl-[3.25rem] sm:pr-6 sm:text-base lg:pb-10 lg:text-[17px]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </CinematicSection>
  );
}
