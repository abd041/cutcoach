import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const barberContent: AudienceContentPack = {
  navLinks: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Barber", href: "#features", audience: "barber" },
    { label: "Client Passport", href: "#features", audience: "client" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  footerLinks: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Barber", href: "#features", audience: "barber" },
    { label: "Client Passport", href: "#features", audience: "client" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    headline: "Improve Your Craft",
    headlineAccent: "Faster.",
    subtext:
      "AI haircut coaching designed to help barbers and students build speed, consistency, and confidence on real clients.",
    cta: "Start Training Smarter",
    secondaryCta: "See How It Works",
    eyebrow: "AI Haircut Coaching",
    eyebrowSecondary: "iOS + Smart Glasses",
    screens: [
      { src: images.guidedSession, alt: "Guided session screen" },
      { src: images.liveCutGuidance, alt: "Live cut guidance" },
      { src: images.liveAiSupport, alt: "Live AI coaching support" },
    ],
    sideScreens: [
      { src: images.liveCutGuidance, alt: "Live cut guidance", side: "left" },
      { src: images.liveAiSupport, alt: "Live AI support", side: "right" },
    ],
  },
  trustBar: {
    columnStart: "Get started",
    columnMetrics: "What you get",
    columnProof: "Who it's for",
    iosPill: "Free on iOS",
    downloadNote: "No card required · 25 free credits at signup",
    trustedLabel: "Built for Barbers",
    quote: "Designed to match the pace of a real shop floor.",
    mission:
      "Built for shop-floor pressure — AI coaching designed to support skill development and Client Passport summaries behind the chair.",
    earlyAccess: "Join barbers and students training smarter with CutCoach.",
    avatars: ["JM", "TD", "KR", "AL"],
    avatarLabel: "Early access barbers",
  },
  stats: [
    { value: 25, suffix: "+", label: "Free Credits" },
    { value: 150, suffix: "", label: "Monthly Credits" },
    { value: 2, suffix: " min", label: "To Start Training" },
  ],
  featureSection: {
    tag: "How CutCoach Helps",
    heading: "AI Coaching Designed to",
    headingAccent: "Support Your Sessions",
    description:
      "AI haircut coaching, analysis, video review, and progress tracking — built to help turn real client sessions into learning opportunities.",
    pillars: ["Coaching", "Analysis", "Progress"],
  },
  features: [
    {
      title: "AI Haircut Coaching",
      description:
        "Designed to provide coaching during real sessions — structure, pacing, and confidence support while you work.",
      highlights: [
        "Real-time guidance behind the chair",
        "Smart glasses workflow cues",
        "Designed to support student learning during each cut",
      ],
      image: images.liveAiSupport,
      bgImage: images.featureBg1,
      callouts: [
        { label: "Session score", value: "87" },
        { label: "Coaching", value: "Live", live: true },
      ],
    },
    {
      title: "Smart Glasses Workflow",
      description:
        "Designed to help you stay on schedule and in control during complex sections with subtle, hands-free cues.",
      highlights: [
        "Hands-free pacing through smart glasses",
        "Section-by-section structure reminders",
        "Built to help reduce hesitation and support smoother flow",
      ],
      image: images.liveCutGuidance,
      bgImage: images.featureBg2,
      callouts: [
        { label: "Fade left", value: "4:12" },
        { label: "Cue", value: "Active", live: true },
      ],
    },
    {
      title: "Analysis & Progress Tracking",
      description:
        "Haircut analysis, video upload review, and Client Passport AI summaries designed to help skill development build over time.",
      highlights: [
        "Haircut analysis after sessions",
        "Video upload analysis & progress tracking",
        "Client Passport AI summaries",
      ],
      image: images.guidedSession,
      bgImage: images.leftCard,
      callouts: [
        { label: "Analysis", value: "Ready", live: true },
        { label: "Progress", value: "Tracked" },
      ],
    },
  ],
  howItWorksSection: {
    tag: "How CutCoach Works",
    heading: "Train Faster on",
    headingAccent: "Real Clients",
    description:
      "Three phases. One workflow. Coaching, analysis, and skill development from first clip to final review.",
    pillars: ["Before", "During", "After"],
  },
  steps: [
    {
      number: "Step 01",
      phase: "Before the cut",
      title: "Start a Guided Session",
      description:
        "Launch AI haircut coaching in under two minutes — clear plan before the first clip.",
      highlights: [
        "One-tap activation on iOS",
        "Student-ready session structure",
        "Confidence before the client sits down",
      ],
      tags: ["Begin Session", "View Session Plan"],
      icon: images.step1Icon,
      screen: images.guidedSession,
      callouts: [
        { label: "Session plan", value: "Ready", live: true },
        { label: "Setup", value: "2 min" },
      ],
    },
    {
      number: "Step 02",
      phase: "During the cut",
      title: "Cut with Live AI Guidance",
      description:
        "Smart glasses workflow cues are designed to help you stay on pace through each section of the cut.",
      highlights: [
        "Live pacing through smart glasses",
        "Workflow reminders per section",
        "Designed to support skill development in real time",
      ],
      tags: ["Stay On Pace", "View Live Metrics"],
      icon: images.step2Icon,
      screen: images.liveCutGuidance,
      callouts: [
        { label: "Fade left", value: "4:12" },
        { label: "Cue", value: "Active", live: true },
      ],
    },
    {
      number: "Step 03",
      phase: "After the cut",
      title: "Analyze, Upload & Review Progress",
      description:
        "Haircut analysis, video upload review, progress tracking, and Client Passport AI summaries.",
      highlights: [
        "Haircut analysis & pacing breakdown",
        "Video upload analysis",
        "Progress tracking after sessions",
      ],
      tags: ["View Analysis", "Track Progress"],
      icon: images.step3Icon,
      screen: images.liveAiSupport,
      callouts: [
        { label: "Session score", value: "87" },
        { label: "Insights", value: "Ready", live: true },
      ],
    },
  ],
  compatibilitySection: {
    tag: "Brand-Neutral Workflow",
    heading: "Works With The Tools",
    headingAccent: "You Already Use",
    description:
      "CutCoach is brand-neutral and built to fit naturally into any barber’s workflow, regardless of the tools they prefer.",
    pillars: ["Clippers", "Shears", "Glasses", "AI"],
  },
  compatibilityPlatforms: [
    {
      label: "Shop Tools",
      description:
        "Clippers, trimmers, guards, shears, and combs — whatever you already run on the floor.",
    },
    {
      label: "Smart Glasses",
      description: "Live pacing cues designed to help while you cut — hands stay on the client.",
    },
    {
      label: "Mobile App",
      description: "Start coaching sessions from your iPhone in under 2 minutes.",
    },
    {
      label: "AI + Secure Cloud",
      description:
        "Private sessions, analysis, and Client Passport summaries — brand-neutral by design.",
    },
  ],
  testimonialsSection: {
    tag: "Early Access Feedback",
    heading: "Barbers Exploring",
    headingAccent: "CutCoach in Real Shops",
    description:
      "Early access barbers are testing AI coaching, analysis, and progress tracking in real shops.",
    pillars: ["Speed", "Consistency", "Confidence"],
    storiesComingSoon: "Full Barber Stories — Coming Soon",
    cta: "Start Training Smarter",
  },
  testimonialPreviewThemes: [
    {
      title: "Faster Sessions",
      description:
        "Barbers tracking pacing improvements across back-to-back client days — less downtime between sections, smoother flow.",
      metric: "Speed",
      outcome: "Pacing tracked per section",
    },
    {
      title: "Consistent Structure",
      description:
        "Smart glasses workflow cues designed to help barbers stay on schedule — supporting a steadier rhythm across clients.",
      metric: "Consistency",
      outcome: "Workflow cues during sessions",
    },
    {
      title: "Skill Development",
      description:
        "Haircut analysis and progress tracking designed to help build confidence behind the chair with live clients.",
      metric: "Confidence",
      outcome: "Progress tracked after sessions",
    },
  ],
  pricing: {
    section: {
      tag: "Membership",
      heading: "Choose",
      headingAccent: "Your CutCoach Plan",
      description:
        "Start AI haircut coaching, analysis, and progress tracking built for real client sessions.",
      pillars: ["Free Start", "Pro Plan", "Credit Packs"],
      footnote:
        "All plans include secure session storage and iOS access. Credit packs are one-time purchases.",
    },
    showBillingToggle: true,
    plans: [
      {
        name: "Free Starter",
        description: "For new barbers and students testing CutCoach.",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        free: true,
        cta: "Start Training Smarter",
        features: [
          "25 free credits",
          "Learn Tab",
          "AI Coach Chat",
          "Basic haircut guidance",
        ],
      },
      {
        name: "CutCoach Pro",
        description: "Best for barbers and students training every week.",
        monthlyPrice: "$29.99",
        yearlyPrice: "$305.90",
        yearlyEquivalent: "Equivalent to only $25.49/month",
        cta: "Start Training Smarter",
        highlighted: true,
        badge: "Most popular",
        features: [
          "150 monthly credits",
          "AI Coach Chat",
          "Haircut Analysis",
          "Video Upload Analysis",
          "Progress Tracking",
          "Client Passport AI Summaries",
        ],
      },
    ],
    creditPacksTitle: "Credit Packs",
    creditPacksDescription:
      "One-time purchases. Extra AI credits when you need them — no subscription required.",
    creditPacks: [
      { credits: 50, price: "$9.99" },
      { credits: 150, price: "$24.99" },
      { credits: 500, price: "$69.99" },
    ],
  },
  faqSection: {
    tag: "CutCoach Questions",
    heading: "Everything Barbers",
    headingAccent: "Want To Know",
    description:
      "Clear answers about AI coaching, analysis, smart glasses, and skill development.",
    pillars: ["Getting Started", "Privacy", "Billing"],
  },
  faqItems: [
    {
      question: "How does CutCoach actually help during a haircut?",
      answer:
        "CutCoach is designed to provide real-time AI haircut coaching while you cut. Smart glasses workflow cues can help you move through sections with structure, stay on schedule, and reduce hesitation. After the haircut, analysis and progress tracking are built to show where you gained or lost time.",
    },
    {
      question: "Is CutCoach for students as well as working barbers?",
      answer:
        "Yes. Student learning and skill development are built in — guided sessions, analysis, and video upload review help you grow on real clients, not just mannequins.",
    },
    {
      question: "Are my haircut recordings and performance data private?",
      answer:
        "Yes. Your sessions, video uploads, and performance insights are private to your account. CutCoach uses secure storage and does not share your client footage or performance data.",
    },
    {
      question: "How fast can I start training with CutCoach?",
      answer:
        "Most barbers can start a guided session in under 2 minutes. Select hair type, choose a haircut structure, connect your glasses, and begin cutting.",
    },
    {
      question: "What are Client Passport AI Summaries?",
      answer:
        "After sessions, CutCoach can generate AI summaries that help you communicate cut preferences and outcomes more clearly — useful for your own progress and for client continuity.",
    },
    {
      question: "Does CutCoach replace barber school?",
      answer:
        "No. It supports learning and real-world improvement but does not replace licensing or formal education.",
    },
    {
      question: "Do I need smart glasses?",
      answer:
        "No. Smart glasses are optional. CutCoach works fully on iPhone.",
    },
    {
      question: "Can experienced barbers use CutCoach?",
      answer:
        "Yes. It's designed for both beginners and professionals looking for consistency and continued growth.",
    },
  ],
  finalCta: {
    heading: "Ready to Improve",
    headingAccent: "Your Cuts?",
    primaryCta: "Start Training Smarter",
    secondaryCta: "See How CutCoach Works",
  },
  footerDescription:
    "AI haircut coaching designed to help barbers and students — analysis, video review, progress tracking, and smart glasses workflow support for real shop pressure.",
  mobileHighlights: [
    { title: "AI Coaching", subtitle: "Live Sessions", live: true },
    { title: "Analysis", subtitle: "Video + Progress" },
    { title: "Smart Glasses", subtitle: "Hands-Free Cues" },
  ],
};
