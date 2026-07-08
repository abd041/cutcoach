import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description: `Terms of service for the ${siteConfig.name} iOS app, AI coaching features, and Client Passport.`,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPageShell document="terms" />;
}
