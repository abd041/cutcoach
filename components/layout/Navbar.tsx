"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navLinks, siteConfig } from "@/lib/data/content";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHash = () => setActiveHash(window.location.hash);
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-[calc(1rem+var(--safe-top))] sm:px-8 lg:px-10 lg:pt-[calc(1.5rem+var(--safe-top))]"
    >
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto mx-auto w-full max-w-[1320px]"
      >
        <div
          className={cn(
            "nav-pill relative grid h-[3.75rem] grid-cols-[1fr_auto_1fr] items-center px-4 sm:h-[4.25rem] sm:px-6 lg:h-[4.5rem] lg:px-10",
            isScrolled && "nav-pill-scrolled"
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            aria-hidden
          />

          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center justify-self-start py-1 pr-3"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <BrandLogo size="nav" priority />
            </motion.div>
          </Link>

          <div className="hidden items-center justify-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                activeHash === link.href || pathname + link.href === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative rounded-xl px-5 py-2.5 text-[13px] font-semibold tracking-[0.02em] transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted/90 hover:text-foreground"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="nav-link-underline w-[70%]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="nav-link-underline w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-[55%] group-hover:opacity-100" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden justify-self-end lg:block">
            <MagneticButton href={siteConfig.appStoreUrl} external>
              Start Training Smarter
            </MagneticButton>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 col-start-3 flex h-11 w-11 items-center justify-center justify-self-end rounded-xl border border-white/[0.1] bg-white/[0.04] transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.08] lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-auto fixed inset-0 z-40 bg-background/92 backdrop-blur-2xl lg:hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-transparent to-transparent" />
            <div className="relative flex h-full flex-col justify-center px-6 pb-[calc(1.5rem+var(--safe-bottom))] pt-[calc(6.5rem+var(--safe-top))] sm:px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block border-b border-white/[0.06] py-4 font-display text-2xl font-medium tracking-tight text-foreground sm:py-5 sm:text-3xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10"
              >
                <MagneticButton
                  href={siteConfig.appStoreUrl}
                  external
                  size="large"
                  className="w-full justify-center"
                >
                  Start Training Smarter
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
