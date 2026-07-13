import { images } from "@/lib/images";
import { barberContent } from "@/lib/data/audience/barber";

import { isPlaceholderSocialUrl } from "@/lib/social";

/** Shared site/brand config — not audience-specific. */
export const siteConfig = {
  name: "CutCoach",
  title: "CutCoach | AI Barber Training & Coaching",
  seoTitle: "CutCoach | One AI Platform for Barbers & Clients",
  description:
    "One AI-powered platform for barbers and clients. Designed to help barbers improve their craft faster with AI coaching — and help clients get more consistent haircuts with a free Client Passport.",
  seoDescription:
    "CutCoach is one AI-powered platform serving two connected audiences: barbers who want to improve their craft faster, and clients who want more consistent haircuts through a free Client Passport.",
  url: "https://www.cutcoachai.com",
  appStoreUrl: "https://apps.apple.com/us/app/cutcoach/id6773789911",
  copyright:
    "© 2026 All rights reserved. Designed by Matthew Diggs, Founder/CEO.",
  footerDescription:
    "One AI-powered platform for barbers and clients — coaching designed to help barbers improve faster, and a free Client Passport designed to help clients get more consistent haircuts.",
  supportEmail: "support@cutcoach.app",
  socialProfiles: [
    "https://facebook.com",
    "https://instagram.com",
    "https://x.com",
    "https://linkedin.com",
  ],
};

export const trustedBrands: { name: string; logo: string }[] = [];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: images.socialFacebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: images.socialInstagram,
  },
  { label: "X", href: "https://x.com", icon: images.socialX },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: images.socialLinkedin,
  },
].filter((link) => !isPlaceholderSocialUrl(link.href));

/**
 * Legacy barber-only exports for unused showcase sections and gradual migration.
 * Homepage sections should use useAudienceContent() instead.
 */
export const navLinks = barberContent.navLinks;
export const footerLinks = barberContent.footerLinks;
export const hero = barberContent.hero;
export const stats = barberContent.stats;
export const trustBar = barberContent.trustBar;
export const featureSection = barberContent.featureSection;
export const features = barberContent.features;
export const howItWorksSection = barberContent.howItWorksSection;
export const steps = barberContent.steps;
export const compatibilitySection = barberContent.compatibilitySection;
export const compatibilityPlatforms = barberContent.compatibilityPlatforms;
export const testimonialsSection = barberContent.testimonialsSection;
export const testimonialPreviewThemes = barberContent.testimonialPreviewThemes;
export const pricingSection = barberContent.pricing.section;
export const pricingPlans = barberContent.pricing.plans;
export const faqSection = barberContent.faqSection;
export const faqItems = barberContent.faqItems;
export const finalCta = barberContent.finalCta;

export const aiFeaturesSection = {
  tag: "AI-Powered Coaching",
  heading: "Intelligence Built for",
  headingAccent: "Live Haircuts",
  description:
    "CutCoach is designed to give barbers real-time structure, performance feedback, and pacing support so client sessions can become learning opportunities.",
};

export const dashboardSection = {
  tag: "Dashboard Showcase",
  heading: "Your Performance,",
  headingAccent: "Visualized",
  description:
    "CutCoach is designed to guide your haircut with real-time pacing cues, structured workflow reminders, and AI performance feedback after sessions.",
};

export const benefitsSection = {
  tag: "Real Benefits",
  heading: "Built for Barbers Who",
  headingAccent: "Want to Grow",
  description:
    "AI training tools designed to support real barbers, real clients, and real shop pressure. CutCoach is built to help you move faster, stay consistent, and build confidence behind the chair.",
};

export const benefits = [
  {
    title: "Improve Speed",
    description:
      "CutCoach is designed to track pacing, workflow rhythm, and technical consistency so barbers can better understand how they perform — not just how they think they perform",
    icon: "speed" as const,
  },
  {
    title: "Stay Consistent",
    description:
      "Real-time cues are designed to help barbers stay on schedule, maintain structure, and reduce hesitation during complex sections of a haircut",
    icon: "consistency" as const,
  },
  {
    title: "Build Confidence",
    description:
      "Receive subtle real-time cues designed to help you move through each section of the haircut with more confidence, reduce hesitation, and maintain professional pacing.",
    icon: "confidence" as const,
  },
  {
    title: "Track Progress",
    description:
      "After the haircut, CutCoach is designed to analyze your timing efficiency, workflow decisions, and technical consistency — helping you identify patterns, build confidence, and improve with real clients.",
    icon: "growth" as const,
  },
];
