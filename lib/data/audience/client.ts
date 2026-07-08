import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const clientContent: AudienceContentPack = {
  navLinks: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Your Benefits", href: "#features" },
    { label: "Client Passport", href: "#pricing" },
    { label: "Client Stories", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  footerLinks: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Your Benefits", href: "#features" },
    { label: "Client Passport", href: "#pricing" },
    { label: "Client Stories", href: "#testimonials" },
  ],
  hero: {
    headline: "Get The Cut You Asked For.",
    headlineAccent: "Every Time.",
    subtext:
      "Your Client Passport remembers everything your barber should know—preferences, haircut history, inspiration photos, notes, and more.",
    cta: "Create Your Free Client Passport",
    secondaryCta: "See How It Works",
    eyebrow: "Client Passport",
    eyebrowSecondary: "Free Forever · No Card",
    screens: [
      { src: images.liveAiSupport, alt: "Client Passport preferences" },
      { src: images.performanceAwareness, alt: "Haircut history and notes" },
      { src: images.guidedSession, alt: "Inspiration photos saved" },
    ],
    sideScreens: [
      {
        src: images.performanceAwareness,
        alt: "Haircut history",
        side: "left",
      },
      { src: images.guidedSession, alt: "Saved inspiration", side: "right" },
    ],
  },
  trustBar: {
    columnStart: "Get started",
    columnMetrics: "What you get",
    columnProof: "Who it's for",
    iosPill: "Free on iOS",
    downloadNote: "Completely free · No subscription required",
    trustedLabel: "Client Ready",
    quote: "Finally, I never explain my haircut from scratch.",
    mission:
      "Preferences, history, QR profile, favorite styles, barber notes, and before & after photos — so any barber starts with clarity.",
    earlyAccess: "Join clients building their CutCoach Client Passport.",
    avatars: ["AS", "MR", "JL", "DK"],
    avatarLabel: "Early access clients",
  },
  stats: [
    { value: 0, suffix: "", label: "Cost Forever" },
    { value: 1, suffix: "", label: "QR Profile" },
    { value: 2, suffix: " min", label: "To Set Up" },
  ],
  featureSection: {
    tag: "Why Clients Love It",
    heading: "Never Get a",
    headingAccent: "Bad Haircut Again",
    description:
      "Client Passport keeps preferences, history, photos, and notes ready — so communication with any barber starts clear.",
    pillars: ["Preferences", "History", "Clarity"],
  },
  features: [
    {
      title: "Haircut Preferences & Favorite Styles",
      description:
        "Save the cuts, fades, and favorite styles that define your look — always ready for the next chair.",
      highlights: [
        "Haircut preferences in one place",
        "Favorite styles you can revisit",
        "AI summaries of your preferences",
      ],
      image: images.liveAiSupport,
      bgImage: images.featureBg1,
      callouts: [
        { label: "Preferences", value: "Saved", live: true },
        { label: "Styles", value: "Ready" },
      ],
    },
    {
      title: "History, Photos & Barber Notes",
      description:
        "Haircut history, before & after photos, and barber notes so every visit builds on the last — not a blank slate.",
      highlights: [
        "Haircut history that follows you",
        "Before & after photos",
        "Barber notes you can keep",
      ],
      image: images.liveCutGuidance,
      bgImage: images.featureBg2,
      callouts: [
        { label: "History", value: "On file" },
        { label: "Photos", value: "Saved", live: true },
      ],
    },
    {
      title: "QR Profile for Any Barber",
      description:
        "Share your Client Passport with a QR profile so any barber gets clarity — better communication, less guessing.",
      highlights: [
        "QR profile at the chair",
        "Better communication with any barber",
        "Free setup — no subscription",
      ],
      image: images.guidedSession,
      bgImage: images.leftCard,
      callouts: [
        { label: "QR Profile", value: "Ready", live: true },
        { label: "Cost", value: "Free" },
      ],
    },
  ],
  howItWorksSection: {
    tag: "How Client Passport Works",
    heading: "Your Look,",
    headingAccent: "Always Clear",
    description:
      "Three steps. One passport. Preferences, photos, and notes so you never explain from scratch again.",
    pillars: ["Create", "Share", "Refine"],
  },
  steps: [
    {
      number: "Step 01",
      phase: "Create your profile",
      title: "Build Your Client Passport",
      description:
        "Add haircut preferences, favorite styles, and photos in under two minutes — free forever.",
      highlights: [
        "Haircut preferences & favorite styles",
        "Before & after photos",
        "Completely free — no subscription",
      ],
      tags: ["Create Passport", "Add Preferences"],
      icon: images.step1Icon,
      callouts: [
        { label: "Passport", value: "Ready", live: true },
        { label: "Cost", value: "Free" },
      ],
    },
    {
      number: "Step 02",
      phase: "At the chair",
      title: "Share Your QR Profile",
      description:
        "Show your QR profile so any barber sees preferences, history, and notes with clarity.",
      highlights: [
        "QR profile share at the chair",
        "Better communication with any barber",
        "Less re-explaining from scratch",
      ],
      tags: ["Show QR", "Confirm Style"],
      icon: images.step2Icon,
      callouts: [
        { label: "QR", value: "Live", live: true },
        { label: "Clarity", value: "High" },
      ],
    },
    {
      number: "Step 03",
      phase: "After the cut",
      title: "Keep History & Notes Fresh",
      description:
        "Update barber notes, photos, and AI preference summaries so the next visit starts even clearer.",
      highlights: [
        "Haircut history & barber notes",
        "Before & after photo updates",
        "AI summaries of your preferences",
      ],
      tags: ["Update Notes", "View History"],
      icon: images.step3Icon,
      callouts: [
        { label: "History", value: "Saved", live: true },
        { label: "Next visit", value: "Ready" },
      ],
    },
  ],
  compatibilitySection: {
    tag: "Built For Real Visits",
    heading: "Works With The Tools",
    headingAccent: "You Already Use",
    description:
      "CutCoach is brand-neutral and built to fit naturally into any barber’s workflow, regardless of the tools they prefer.",
    pillars: ["Passport", "QR", "Photos", "Cloud"],
  },
  compatibilityPlatforms: [
    {
      label: "Mobile App",
      description: "Create and update your Client Passport from your iPhone.",
    },
    {
      label: "QR Profile",
      description: "Share preferences with any barber in one scan.",
    },
    {
      label: "AI Summaries",
      description:
        "Clear preference summaries so communication starts smarter every visit.",
    },
    {
      label: "Secure Cloud",
      description:
        "Encrypted storage for preferences, photos, and notes — no clipper brand required.",
    },
  ],
  testimonialsSection: {
    tag: "Client Outcomes",
    heading: "Clients Want",
    headingAccent: "Consistent Cuts",
    description:
      "Never explain from scratch again — preferences, history, and clearer communication with any barber.",
    pillars: ["Clarity", "Consistency", "Control"],
    storiesComingSoon: "Full Client Stories — Coming Soon",
    cta: "Create Your Free Client Passport",
  },
  testimonialPreviewThemes: [
    {
      title: "Never Explain From Scratch",
      description:
        "Preferences, favorite styles, and history ready at the chair — so you stop repeating your cut every visit.",
      metric: "Clarity",
      outcome: "Preferences ready for any barber",
    },
    {
      title: "Photos & Notes That Stick",
      description:
        "Before & after photos and barber notes keep your look aligned visit after visit.",
      metric: "Consistency",
      outcome: "History and photos that follow you",
    },
    {
      title: "QR Clarity, Your Control",
      description:
        "Share your QR profile when you’re ready — better communication with any barber, free forever.",
      metric: "Control",
      outcome: "Share on your terms",
    },
  ],
  pricing: {
    section: {
      tag: "Client Passport",
      heading: "Completely",
      headingAccent: "Free",
      description:
        "Client Passport is free forever. No subscription. No paid pricing until future updates.",
      pillars: ["Free Forever", "No Card", "No Subscription"],
      footnote:
        "Paid client features may arrive later — Passport stays free for now.",
    },
    showBillingToggle: false,
    plans: [],
    freeProduct: {
      name: "Client Passport",
      badge: "Completely Free",
      description:
        "Haircut preferences, photos, history, barber notes, and a QR profile — no subscription required.",
      features: [
        "No subscription required",
        "Haircut preferences & favorite styles",
        "Haircut history & before/after photos",
        "QR profile + barber notes",
        "AI summaries of your preferences",
      ],
      cta: "Create Your Free Client Passport",
    },
  },
  faqSection: {
    tag: "Client Questions",
    heading: "Everything Clients",
    headingAccent: "Want To Know",
    description:
      "Straight answers about Client Passport, QR profiles, and never explaining from scratch again.",
    pillars: ["Getting Started", "Privacy", "Pricing"],
  },
  faqItems: [
    {
      question: "What is Client Passport?",
      answer:
        "Client Passport stores your haircut preferences, favorite styles, history, before & after photos, and barber notes — plus AI summaries — so every barber starts with clarity.",
    },
    {
      question: "How does the QR profile work?",
      answer:
        "Your passport includes a QR profile you can show at the chair. Any barber can scan it to see the preferences and context you choose to share.",
    },
    {
      question: "Is Client Passport really free?",
      answer:
        "Yes. Client Passport is completely free with no subscription required. No paid pricing is shown until future updates.",
    },
    {
      question: "Do I have to share my profile with every barber?",
      answer:
        "No. You control when and whether to share. Your passport stays private until you choose to show your QR profile.",
    },
    {
      question: "Will this help me avoid bad haircuts?",
      answer:
        "That’s the goal. Clear preferences, photos, history, and notes mean better communication with any barber — so you’re not explaining your haircut from scratch every time.",
    },
  ],
  finalCta: {
    heading: "Get The Cut You",
    headingAccent: "Asked For",
    primaryCta: "Create Your Free Client Passport",
    secondaryCta: "See How It Works",
  },
  footerDescription:
    "Client Passport remembers preferences, history, inspiration photos, and notes — so every barber starts with clarity.",
  mobileHighlights: [
    { title: "Preferences", subtitle: "Always Remembered", live: true },
    { title: "Cut History", subtitle: "Inspiration Photos" },
    { title: "Barber Notes", subtitle: "Every Visit" },
  ],
};
