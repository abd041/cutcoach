import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { siteConfig } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return <LegalPageShell document="terms" />;
}
