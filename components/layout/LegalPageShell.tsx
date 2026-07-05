import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { siteConfig } from "@/lib/data/content";

interface LegalPageShellProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <main id="main-content" className="min-h-screen bg-[#05070a] py-[calc(6rem+var(--safe-top))] sm:py-24">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white/85"
        >
          ← Back to home
        </Link>

        <div className="mt-10">
          <BrandLogo size="legal" href="/" />
        </div>

        <SectionEyebrow className="mt-8">Legal</SectionEyebrow>

        <h1 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-white/40">Last updated: July 2026</p>

        <div className="premium-panel mt-8 space-y-6 p-5 text-sm leading-[1.85] text-white/55 sm:mt-10 sm:p-8 lg:p-10">
          {children}
        </div>

        <p className="mt-8 text-sm text-white/40">
          Questions?{" "}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="text-[#4DDFFF] transition-opacity hover:opacity-80"
          >
            {siteConfig.supportEmail}
          </a>
        </p>
      </Container>
    </main>
  );
}
