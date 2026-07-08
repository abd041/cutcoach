import type {
  FAQItem,
  Feature,
  NavLink,
  PricingPlan,
  Step,
} from "@/types";

export interface CreditPack {
  credits: number;
  price: string;
}

export interface AudiencePricingSection {
  tag: string;
  heading: string;
  headingAccent: string;
  description: string;
  pillars: string[];
  footnote?: string;
}

export interface AudiencePricing {
  section: AudiencePricingSection;
  /** Subscription / free plans (shown as cards). */
  plans: PricingPlan[];
  /** One-time credit packs — Barber only; never subscription framing. */
  creditPacks?: CreditPack[];
  creditPacksTitle?: string;
  creditPacksDescription?: string;
  /** Client free Passport block (when no paid plans). */
  freeProduct?: {
    name: string;
    badge: string;
    /** Display price, e.g. "FREE" — defaults to "$0". */
    priceLabel?: string;
    description: string;
    features: string[];
    cta: string;
  };
  showBillingToggle: boolean;
}

export interface AudienceContentPack {
  navLinks: NavLink[];
  footerLinks: NavLink[];
  hero: {
    headline: string;
    headlineAccent: string;
    subtext: string;
    cta: string;
    secondaryCta?: string;
    eyebrow: string;
    eyebrowSecondary: string;
    /** Featured phone carousel screens for this mode */
    screens: { src: string; alt: string }[];
    /** Background flanking phones (desktop) */
    sideScreens: { src: string; alt: string; side: "left" | "right" }[];
  };
  trustBar: {
    columnStart: string;
    columnMetrics: string;
    columnProof: string;
    iosPill: string;
    downloadNote: string;
    trustedLabel: string;
    quote: string;
    mission: string;
    earlyAccess: string;
    avatars: string[];
    avatarLabel: string;
  };
  stats: { value: number; suffix: string; label: string; display?: string }[];
  featureSection: {
    tag: string;
    heading: string;
    headingAccent: string;
    description: string;
    pillars: string[];
  };
  features: Feature[];
  howItWorksSection: {
    tag: string;
    heading: string;
    headingAccent: string;
    description: string;
    pillars: string[];
  };
  steps: Step[];
  compatibilitySection: {
    tag: string;
    heading: string;
    headingAccent: string;
    description: string;
    pillars: string[];
  };
  compatibilityPlatforms: { label: string; description: string }[];
  testimonialsSection: {
    tag: string;
    heading: string;
    headingAccent: string;
    description: string;
    pillars: string[];
    storiesComingSoon: string;
    cta: string;
  };
  testimonialPreviewThemes: {
    title: string;
    description: string;
    metric: string;
    outcome: string;
  }[];
  pricing: AudiencePricing;
  faqSection: {
    tag: string;
    heading: string;
    headingAccent: string;
    description: string;
    pillars: string[];
  };
  faqItems: FAQItem[];
  finalCta: {
    heading: string;
    headingAccent: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footerDescription: string;
  mobileHighlights: {
    title: string;
    subtitle: string;
    live?: boolean;
  }[];
}
