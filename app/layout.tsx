import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data/content";
import { images } from "@/lib/images";
import { JsonLd } from "@/components/seo/JsonLd";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { AudienceModeProvider } from "@/lib/audience/AudienceModeProvider";
import { SkipToContent } from "@/components/ui/SkipToContent";

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
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "barber training",
    "AI barber coaching",
    "haircut guidance",
    "barber app",
    "CutCoach",
  ],
  authors: [{ name: "Matthew Diggs" }],
  creator: "CutCoach",
  icons: {
    icon: "/images/cutcoach-logo.png",
    apple: "/images/cutcoach-logo.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    images: [{ url: images.seo, width: 1200, height: 630, alt: siteConfig.title }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [images.seo],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "apple-itunes-app": "app-id=6773789911",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${urbanist.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <LenisProvider>
        <LocaleProvider>
        <AudienceModeProvider>
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
