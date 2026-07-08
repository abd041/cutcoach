"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { AudienceModeToggle } from "@/components/ui/AudienceModeToggle";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { legalLinks, siteConfig, socialLinks } from "@/lib/data/content";
import { useAudienceContent } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";

export function Footer() {
  const ui = useUi();
  const { footerDescription } = useAudienceContent();
  const contactHref = `mailto:${siteConfig.supportEmail}`;

  return (
    <footer className="section-divider relative border-t border-white/[0.06] bg-[#05070a] pt-[var(--section-pad)] pb-[calc(2rem+var(--safe-bottom))]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DDFFF]/20 to-transparent"
        aria-hidden
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <div>
            <BrandLogo size="footer" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/45">
              {footerDescription}
            </p>
            <div className="mt-7">
              <AppStoreBadge />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
                {ui.experience}
              </p>
              <AudienceModeToggle
                size="hero"
                layoutId="audience-mode-pill-footer"
                className="w-full max-w-sm"
              />
            </div>

            <div>
              <LanguageSelector variant="menu" className="max-w-md" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
                {ui.legal}
              </p>
              <nav
                className="flex flex-col gap-3"
                aria-label={ui.legal}
              >
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="touch-target text-sm text-white/50 transition-colors hover:text-white/90"
                  >
                    {link.href === "/privacy"
                      ? ui.privacyPolicy
                      : ui.termsOfService}
                  </Link>
                ))}
                <a
                  href={contactHref}
                  className="touch-target text-sm text-white/50 transition-colors hover:text-white/90"
                >
                  {ui.contact}
                </a>
              </nav>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
                {ui.socialMedia}
              </p>
              {socialLinks.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all hover:border-[#4DDFFF]/25 hover:bg-[#4DDFFF]/8"
                    aria-label={social.label}
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={18}
                      height={18}
                      aria-hidden
                    />
                  </a>
                ))}
              </div>
              ) : (
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-sm text-white/45 transition-colors hover:text-white/80"
                >
                  {ui.contact}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-center sm:mt-12 sm:flex-row sm:text-left">
          <p className="text-xs text-white/35">{siteConfig.copyright}</p>
          <p className="text-xs text-white/30">
            {ui.availableOn}{" "}
            <a
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 transition-colors hover:text-[#4DDFFF]"
            >
              {ui.iosAppStore}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
