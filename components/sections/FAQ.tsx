"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { faqItems, faqSection } from "@/lib/data/content";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <CinematicSection id="faq" mood="void" className="section-divider">
      <Container className="section-py relative">
        <div className="grid gap-[var(--section-inner-gap)] lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <SectionHeader
              tag={faqSection.tag}
              heading={faqSection.heading}
              headingAccent={faqSection.headingAccent}
              description={faqSection.description}
              align="left"
              className="!mb-0"
            />
          </div>

          <div className="lg:col-span-8">
            <div className="premium-panel overflow-hidden px-2 sm:px-4">
              <div className="divide-y divide-white/[0.06]">
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="faq-row"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="focus-premium group flex w-full items-start justify-between gap-4 px-3 py-5 text-left sm:gap-6 sm:px-6 sm:py-6 lg:py-7"
                        aria-expanded={isOpen}
                      >
                        <div className="flex min-w-0 gap-3 sm:gap-6">
                          <span className="mt-1 shrink-0 font-display text-sm font-bold text-white/15">
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
                            "mt-1 shrink-0 rounded-lg p-1 transition-colors",
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
                            <p className="pb-6 pl-[2.75rem] pr-3 text-[15px] leading-[1.75] text-white/50 sm:pb-8 sm:pl-[4.5rem] sm:pr-6 sm:text-base lg:pb-10 lg:text-[17px]">
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
        </div>
      </Container>
    </CinematicSection>
  );
}
