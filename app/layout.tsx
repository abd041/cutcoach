import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { rootSiteMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { AudienceModeProvider } from "@/lib/audience/AudienceModeProvider";
import { PreferenceBootstrap } from "@/components/preferences/PreferenceBootstrap";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { getServerAudienceMode } from "@/lib/preferences/server";
import { getServerLocale } from "@/lib/preferences/server";
import { LOCALE_HTML_LANG } from "@/lib/i18n/types";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#05070a",
};

export const metadata: Metadata = rootSiteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [initialMode, initialLocale] = await Promise.all([
    getServerAudienceMode(),
    getServerLocale(),
  ]);

  return (
    <html
      lang={LOCALE_HTML_LANG[initialLocale]}
      data-audience-mode={initialMode}
      className={`${inter.variable} ${urbanist.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <PreferenceBootstrap />
        <JsonLd />
        <LenisProvider>
        <LocaleProvider initialLocale={initialLocale}>
        <AudienceModeProvider initialMode={initialMode}>
        <SmoothScroll />
        <SkipToContent />
        {children}
        </AudienceModeProvider>
        </LocaleProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
