"use client";

import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  type MouseEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Smartphone } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { AudienceModeToggle } from "@/components/ui/AudienceModeToggle";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { siteConfig } from "@/lib/data/content";
import { useAudienceContent, useAudienceMode } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { useEntranceReady } from "@/lib/entrance/EntranceProvider";
import { applyNavLink, navLinkKey, resolveActiveNavLink } from "@/lib/nav";
import { useNavScrollSpy } from "@/hooks/useNavScrollSpy";
import { useScrollSubscription } from "@/hooks/useScrollSubscription";
import { cn } from "@/lib/cn";
import type { NavLink } from "@/types";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const content = useAudienceContent();
  const { mode, setMode } = useAudienceMode();
  const ui = useUi();
  const entranceReady = useEntranceReady();
  const navLinks = content.navLinks;
  const navCta = mode === "client" ? ui.getPassport : ui.tryFree;
  const sectionIds = useMemo(
    () => [...new Set(navLinks.map((link) => link.href.replace("#", "")))],
    [navLinks]
  );
  const activeSection = useNavScrollSpy(sectionIds);
  const isHome = pathname === "/";

  useScrollSubscription(({ scrollY }) => {
    setIsScrolled((prev) => {
      const next = scrollY > 24;
      return prev === next ? prev : next;
    });
  });

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const activeHref = useMemo(() => {
    if (isHome && activeSection) {
      return `#${activeSection}`;
    }
    return "";
  }, [isHome, activeSection]);

  const activeLink = useMemo(
    () => resolveActiveNavLink(navLinks, activeHref, mode),
    [navLinks, activeHref, mode]
  );

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, link: NavLink) => {
      event.preventDefault();
      applyNavLink(link, { mode, setMode, isHome });
      setIsMobileOpen(false);
    },
    [isHome, mode, setMode]
  );

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{
        y: entranceReady ? 0 : -24,
        opacity: entranceReady ? 1 : 0,
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 pl-[max(1rem,var(--safe-left))] pr-[max(1rem,var(--safe-right))] pt-[calc(0.85rem+var(--safe-top))] sm:px-8 lg:px-10 lg:pt-[calc(1.25rem+var(--safe-top))]"
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "pointer-events-auto mx-auto w-full transition-[max-width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled ? "max-w-[1180px]" : "max-w-[1320px]"
        )}
      >
        <div
          className={cn(
            "nav-pill-shell rounded-[26px] p-px transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isScrolled && "nav-pill-shell-scrolled"
          )}
        >
          <div
            className={cn(
              "nav-pill relative grid grid-cols-[1fr_auto_1fr] items-center px-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-10",
              isScrolled
                ? "h-[3.35rem] sm:h-[3.6rem] lg:h-[3.85rem]"
                : "h-[3.75rem] sm:h-[4.25rem] lg:h-[4.5rem]",
              isScrolled && "nav-pill-scrolled"
            )}
          >
            <div
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              aria-hidden
            />

            <Link
              href="/"
              aria-label="CutCoach home"
              className="relative z-[2] flex shrink-0 items-center justify-self-start py-1 pr-3"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <BrandLogo
                  size="nav"
                  priority
                  className={cn(
                    "transition-all duration-500",
                    isScrolled && "h-10 sm:h-11 lg:h-12"
                  )}
                />
              </motion.div>
            </Link>

            <div className="nav-pill-links relative z-[2] hidden items-center justify-center gap-1.5 lg:flex xl:gap-2">
              {navLinks.map((link, index) => {
                const isActive = activeLink
                  ? navLinkKey(activeLink) === navLinkKey(link)
                  : false;

                return (
                  <Link
                    key={navLinkKey(link)}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link)}
                    className={cn(
                      "group relative whitespace-nowrap rounded-xl px-3 py-2.5 text-[13px] font-semibold tracking-[0.02em] transition-colors duration-300 xl:px-3.5",
                      isActive
                        ? "text-foreground"
                        : "text-white/55 hover:text-white/90"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute inset-0 rounded-xl border transition-all duration-300",
                        isActive
                          ? "border-white/[0.1] bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                          : "border-transparent bg-transparent group-hover:border-white/[0.06] group-hover:bg-white/[0.04]"
                      )}
                      aria-hidden
                    />
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className="pointer-events-none absolute inset-x-0 bottom-[0.35rem] flex justify-center"
                      aria-hidden
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="nav-underline"
                          className="nav-link-underline w-[65%]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      ) : (
                        <span className="nav-link-underline w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-[50%] group-hover:opacity-70" />
                      )}
                    </span>
                    <span className="sr-only">{`, section ${String(index + 1).padStart(2, "0")}`}</span>
                  </Link>
                );
              })}
            </div>

            <div className="nav-pill-actions relative z-[2] hidden items-center justify-self-end gap-2.5 xl:gap-3 lg:flex">
              <LanguageSelector />
              <AudienceModeToggle layoutId="audience-mode-pill-nav" />
              <MagneticButton
                href={siteConfig.appStoreUrl}
                external
                showArrow={false}
                size="nav"
                className="nav-cta shrink-0"
              >
                <Smartphone
                  className="h-3.5 w-3.5 shrink-0"
                  strokeWidth={2.25}
                  aria-hidden
                />
                {navCta}
              </MagneticButton>
            </div>

            <div className="col-start-3 flex items-center justify-self-end lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.08]"
                aria-label={isMobileOpen ? ui.closeMenu : ui.openMenu}
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
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-auto fixed inset-0 z-40 mobile-nav-overlay bg-background/94 backdrop-blur-2xl lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
            <div className="noise-overlay absolute inset-0 opacity-20" aria-hidden />

            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-full flex-col justify-between px-6 pb-[calc(1.5rem+var(--safe-bottom))] pt-[calc(6.5rem+var(--safe-top))] sm:px-8"
            >
              <div>
                <div className="mb-5">
                  <LanguageSelector variant="menu" />
                </div>

                <div className="mb-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    {ui.experience}
                  </p>
                  <AudienceModeToggle
                    size="hero"
                    layoutId="audience-mode-pill-drawer"
                    className="w-full"
                  />
                </div>

                {navLinks.map((link, i) => {
                  const isActive = activeLink
                    ? navLinkKey(activeLink) === navLinkKey(link)
                    : false;

                  return (
                    <motion.div
                      key={navLinkKey(link)}
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
                        onClick={(event) => handleNavClick(event, link)}
                        className={cn(
                          "flex min-h-11 items-baseline gap-4 border-b border-white/[0.06] py-4 sm:py-5",
                          isActive && "border-accent/20"
                        )}
                      >
                        <span className="font-mono text-xs font-medium tracking-wider text-accent/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-2xl font-medium tracking-tight sm:text-3xl",
                            isActive ? "text-foreground" : "text-white/85"
                          )}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="space-y-5 border-t border-white/[0.06] pt-8"
              >
                <p className="text-xs leading-relaxed text-white/40">
                  {ui.freeOnIos}
                </p>
                <AppStoreBadge size="large" />
                <MagneticButton
                  href={siteConfig.appStoreUrl}
                  external
                  size="large"
                  className="w-full justify-center"
                >
                  {navCta}
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
