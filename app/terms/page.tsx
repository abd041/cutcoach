import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { siteConfig } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Service">
      <p>
        By using {siteConfig.name}, you agree to use the app for lawful
        professional barbering purposes and to comply with applicable local
        regulations regarding client services.
      </p>
      <p>
        Subscriptions renew according to the plan you select. You may cancel
        through your App Store account settings. Features and pricing may change
        with notice where required.
      </p>
      <p>
        {siteConfig.name} is provided as coaching guidance and does not replace
        professional training, licensing, or judgment. You remain responsible for
        all services performed for clients.
      </p>
      <p>
        Contact{" "}
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="text-[#4DDFFF] transition-opacity hover:opacity-80"
        >
          {siteConfig.supportEmail}
        </a>{" "}
        with questions about these terms.
      </p>
    </LegalPageShell>
  );
}
