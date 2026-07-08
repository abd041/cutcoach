import { images } from "@/lib/images";
import { barberContent } from "@/lib/data/audience/barber";

/** Shared site/brand config — not audience-specific. */
export const siteConfig = {
  name: "CutCoach",
  title: "CutCoach | AI Barber Training & Coaching",
  description:
    "CutCoach helps barbers improve speed, consistency, confidence, and client results with AI-powered coaching, haircut analysis, and training tools — plus a free Client Passport for clients.",
  url: "https://www.cutcoachai.com",
  appStoreUrl: "https://apps.apple.com/us/app/cutcoach/id6773789911",
  copyright:
    "© 2025 All rights reserved. Designed by Matthew Diggs, Founder/CEO.",
  footerDescription:
    "AI training tools built for real barbers, students, clients, and real shop pressure.",
  supportEmail: "hello@cutcoachai.com",
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
];

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
    "CutCoach gives barbers real-time structure, performance feedback, and pacing intelligence so every client session becomes a training opportunity.",
};

export const dashboardSection = {
  tag: "Dashboard Showcase",
  heading: "Your Performance,",
  headingAccent: "Visualized",
  description:
    "CutCoach guides your haircut from start to finish using real-time pacing cues, structured workflow reminders, and AI performance feedback after every session.",
};

export const benefitsSection = {
  tag: "Real Benefits",
  heading: "Built for Barbers Who",
  headingAccent: "Want to Grow",
  description:
    "AI training tools built for real barbers, real clients, and real shop pressure. CutCoach helps you move faster, stay consistent, and build confidence behind the chair.",
};

export const benefits = [
  {
    title: "Improve Speed",
    description:
      "CutCoach tracks pacing, workflow rhythm, and technical consistency so barbers understand how they actually perform — not how they think they perform",
    icon: "speed" as const,
  },
  {
    title: "Stay Consistent",
    description:
      "Real-time cues help barbers stay on schedule, maintain structure, and reduce hesitation during complex sections of a haircut",
    icon: "consistency" as const,
  },
  {
    title: "Build Confidence",
    description:
      "Receive subtle real-time cues that help you move through each section of the haircut with confidence, reduce hesitation, and maintain professional pacing.",
    icon: "confidence" as const,
  },
  {
    title: "Track Progress",
    description:
      "After the haircut, CutCoach analyzes your timing efficiency, workflow decisions, and technical consistency - helping you identify mistakes, build confidence, and improve with every real client.",
    icon: "growth" as const,
  },
];
