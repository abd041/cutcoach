import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, stores, and protects your haircut session data, account information, and Client Passport details.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPageShell document="privacy" />;
}
