import { barberContent } from "@/lib/data/audience/barber";
import { clientContent } from "@/lib/data/audience/client";
import { siteConfig } from "@/lib/data/content";
import { getLiveSocialProfiles } from "@/lib/social";
import { APP_STORE_URL, images } from "@/lib/images";

export function buildJsonLdSchema() {
  const socialProfiles = getLiveSocialProfiles(siteConfig.socialProfiles);

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: [...barberContent.faqItems, ...clientContent.faqItems]
      .slice(0, 10)
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/cutcoach-logo.png`,
          width: 512,
          height: 512,
        },
        email: siteConfig.supportEmail,
        ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.seoDescription,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.seoTitle,
        description: siteConfig.seoDescription,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "MobileApplication",
        "@id": `${siteConfig.url}/#app`,
        name: siteConfig.name,
        operatingSystem: "iOS",
        applicationCategory: "BusinessApplication",
        description: siteConfig.seoDescription,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free starter plan with optional Pro subscription",
        },
        downloadUrl: APP_STORE_URL,
        screenshot: images.seo,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      faqSchema,
    ],
  };
}
