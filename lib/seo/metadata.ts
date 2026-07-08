import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/content";
import { images } from "@/lib/images";

const OG_IMAGE = {
  url: images.seo,
  width: 1200,
  height: 630,
  alt: "CutCoach — one AI-powered platform for barbers and clients",
};

const KEYWORDS = [
  "barber training",
  "AI barber coaching",
  "haircut guidance",
  "barber app",
  "barber education",
  "client haircut preferences",
  "Client Passport",
  "CutCoach",
  "barber shop app",
  "haircut analysis",
];

function socialMetadata({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images.seo],
    },
  };
}

/** Site-wide defaults merged in root layout. */
export const rootSiteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seoDescription,
  keywords: KEYWORDS,
  applicationName: siteConfig.name,
  authors: [{ name: "Matthew Diggs", url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  icons: {
    icon: "/images/cutcoach-logo.png",
    apple: "/images/cutcoach-logo.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...socialMetadata({
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.url,
  }),
  other: {
    "apple-itunes-app": "app-id=6773789911",
  },
};

/** Per-page metadata (legal, etc.). Homepage uses `homePageMetadata`. */
export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    ...socialMetadata({ title: `${title} | ${siteConfig.name}`, description, url }),
  };
}

export const homePageMetadata: Metadata = {
  title: { absolute: siteConfig.seoTitle },
  description: siteConfig.seoDescription,
  alternates: { canonical: siteConfig.url },
  ...socialMetadata({
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.url,
  }),
};
