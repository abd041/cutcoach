import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { siteConfig } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <p>
        {siteConfig.name} respects your privacy. Session data, performance
        insights, and account information are stored securely and are not sold
        to third parties.
      </p>
      <p>
        We collect information you provide when creating an account, starting
        sessions, and using coaching features. This may include timing data,
        session history, and device information needed to deliver the service.
      </p>
      <p>
        We use industry-standard security practices to protect your data. You
        may request account deletion or data export by contacting our support
        team.
      </p>
      <p>
        For questions about this policy or your data, contact us at{" "}
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="text-[#4DDFFF] transition-opacity hover:opacity-80"
        >
          {siteConfig.supportEmail}
        </a>
        .
      </p>
    </LegalPageShell>
  );
}
