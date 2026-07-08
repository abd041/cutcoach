"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data/content";
import { useLocale, useUi } from "@/lib/i18n/LocaleProvider";
import { legalCopy } from "@/lib/i18n/legal";

interface LegalPageShellProps {
  document: "privacy" | "terms";
}

function renderParagraph(text: string, name: string, email: string) {
  const withName = text.replaceAll("{name}", name);
  const parts = withName.split("{email}");

  if (parts.length === 1) {
    return <p>{withName}</p>;
  }

  return (
    <p>
      {parts[0]}
      <a
        href={`mailto:${email}`}
        className="text-[#4DDFFF] transition-opacity hover:opacity-80"
      >
        {email}
      </a>
      {parts.slice(1).join("")}
    </p>
  );
}

export function LegalPageShell({ document }: LegalPageShellProps) {
  const { locale } = useLocale();
  const ui = useUi();
  const copy = legalCopy[locale];
  const doc = copy[document];

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen bg-[#05070a] py-[calc(6rem+var(--safe-top))] sm:py-24"
      >
        <Container className="max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white/85"
          >
            {copy.backToHome}
          </Link>

          <div className="mt-10">
            <BrandLogo size="legal" href="/" />
          </div>

          <SectionEyebrow className="mt-8">{ui.legal}</SectionEyebrow>

          <h1 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm text-white/40">{copy.lastUpdated}</p>

          <div className="premium-panel mt-8 space-y-6 p-5 text-sm leading-[1.85] text-white/55 sm:mt-10 sm:p-8 lg:p-10">
            {doc.paragraphs.map((paragraph) => (
              <div key={paragraph.slice(0, 48)}>
                {renderParagraph(
                  paragraph,
                  siteConfig.name,
                  siteConfig.supportEmail
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/40">
            {copy.questions}{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-[#4DDFFF] transition-opacity hover:opacity-80"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
