import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information — including account details, Client Passport data, AI processing, and subscriptions.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPageShell document="privacy" />;
}
