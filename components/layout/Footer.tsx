"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { legalLinks, siteConfig, socialLinks } from "@/lib/data/content";
import { useAudienceContent } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { images } from "@/lib/images";

export function Footer() {
  const { footerLinks, footerDescription } = useAudienceContent();
  const ui = useUi();
  const localizedLegal = legalLinks.map((link) => ({
    ...link,
    label:
      link.href === "/privacy"
        ? ui.privacyPolicy
        : link.href === "/terms"
          ? ui.termsOfService
          : link.label,
  }));

  return (
    <footer className="section-divider border-t border-white/[0.06] bg-[#05070a] pt-[var(--section-pad)] pb-[calc(2rem+var(--safe-bottom))]">
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo size="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
              {footerDescription}
            </p>
            <div className="mt-6">
              <AppStoreBadge />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
              {ui.navigation}
            </h4>
            <nav className="flex flex-col gap-3" aria-label={ui.navigation}>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-white/90"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
              {ui.legal}
            </h4>
            <nav className="flex flex-col gap-3" aria-label={ui.legal}>
              {localizedLegal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-white/90"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
              {ui.socialMedia}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all hover:border-[#4DDFFF]/25 hover:bg-[#4DDFFF]/8"
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
