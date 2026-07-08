import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { siteConfig } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return <LegalPageShell document="privacy" />;
}
