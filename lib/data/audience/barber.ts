import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const barberContent: AudienceContentPack = {
  navLinks: [
    { label: "How CutCoach Works", href: "#how-it-works" },
    { label: "Real Benefits", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Barber Feedback", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  footerLinks: [
    { label: "How CutCoach Works", href: "#how-it-works" },
    { label: "Real Benefits", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Barber Feedback", href: "#testimonials" },
  ],
  hero: {
    headline: "Cut Faster. Stay Consistent.",
    headlineAccent: "Build Real Confidence.",
    subtext:
      "AI haircut coaching for barbers and students — live guidance, haircut analysis, video upload review, and progress tracking without mannequins or guesswork.",
    cta: "Start Training Smarter",
    secondaryCta: "See How It Works",
    eyebrow: "AI Haircut Coaching",
    eyebrowSecondary: "iOS + Smart Glasses",
  },
  trustBar: {
    columnStart: "Get started",
    columnMetrics: "What you get",
    columnProof: "Who it's for",
    iosPill: "Free on iOS",
    downloadNote: "No card required · 25 free credits at signup",
    trustedLabel: "Barber Trusted",
    quote: "Finally training that matches shop pace.",
    mission:
      "Built for shop-floor pressure — AI coaching, skill development, and Client Passport summaries behind the chair.",
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
    tag: "Why CutCoach Works",
    heading: "AI Coaching that Elevates",
    headingAccent: "Every Haircut",
    description:
      "AI haircut coaching, analysis, video review, and progress tracking — so every real client session becomes skill development.",
    pillars: ["Coaching", "Analysis", "Progress"],
  },
  features: [
    {
      title: "AI Haircut Coaching",
      description:
        "Live coaching during real sessions — structure, pacing, and confidence without stopping to guess.",
      highlights: [
        "Real-time guidance behind the chair",
        "Smart glasses workflow cues",
        "Student learning built into every cut",
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
        "Stay on schedule and in control during complex sections with subtle, hands-free cues.",
      highlights: [
        "Hands-free pacing through smart glasses",
        "Section-by-section structure reminders",
        "Less hesitation, smoother flow",
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
        "Haircut analysis, video upload review, and Client Passport AI summaries so skill development compounds over time.",
      highlights: [
        "Haircut analysis after every session",
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
        "Smart glasses workflow cues keep you on pace through every section of the cut.",
      highlights: [
        "Live pacing through smart glasses",
        "Workflow reminders per section",
        "Skill development in real time",
      ],
      tags: ["Stay On Pace", "View Live Metrics"],
      icon: images.step2Icon,
      callouts: [
        { label: "Fade left", value: "4:12" },
        { label: "Cue", value: "Active", live: true },
      ],
    },
    {
      number: "Step 03",
      phase: "After the cut",
      title: "Analyze, Upload & Level Up",
      description:
        "Haircut analysis, video upload review, progress tracking, and Client Passport AI summaries.",
      highlights: [
        "Haircut analysis & pacing breakdown",
        "Video upload analysis",
        "Progress tracking after every cut",
      ],
      tags: ["View Analysis", "Track Progress"],
      icon: images.step3Icon,
      callouts: [
        { label: "Session score", value: "87" },
        { label: "Insights", value: "Ready", live: true },
      ],
    },
  ],
  compatibilitySection: {
    tag: "Real Tool Compatibility",
    heading: "Guidance Security",
    headingAccent: "Across All Platforms",
    description:
      "CutCoach works with the tools barbers already use — iOS, smart glasses, pro tools, and secure cloud.",
    pillars: ["iOS", "Smart Glasses", "Pro Tools", "Cloud"],
  },
  compatibilityPlatforms: [
    {
      label: "iOS App",
      description: "Start coaching sessions from your iPhone in under 2 minutes.",
    },
    {
      label: "Smart Glasses",
      description: "Live pacing cues while you cut — hands stay on the client.",
    },
    {
      label: "Pro Tool Brands",
      description: "Built for the clippers and setups shops already run.",
    },
    {
      label: "Secure Cloud",
      description: "Private sessions, analysis, and Client Passport summaries.",
    },
  ],
  testimonialsSection: {
    tag: "Real Barber Feedback",
    heading: "Barbers Are Already",
    headingAccent: "Training Smarter",
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
        "Smart glasses workflow cues helping barbers stay on schedule every cut — same rhythm, every client.",
      metric: "Consistency",
      outcome: "Workflow cues on every cut",
    },
    {
      title: "Skill Development",
      description:
        "Haircut analysis and progress tracking building confidence behind the chair with live clients.",
      metric: "Confidence",
      outcome: "Progress after every cut",
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
          "25 free credits at signup",
          "Learn tab access",
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
          "150 credits every month",
          "AI Coach Chat",
          "Haircut Analysis",
          "Video Upload Analysis & Progress Tracking",
          "Client Passport AI Summaries",
        ],
      },
    ],
    creditPacksTitle: "Credit Packs",
    creditPacksDescription:
      "One-time purchases. For barbers who need extra AI credits — no subscription required.",
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
      "Real answers about AI coaching, analysis, smart glasses, and skill development.",
    pillars: ["Getting Started", "Privacy", "Billing"],
  },
  faqItems: [
    {
      question: "How does CutCoach actually help during a haircut?",
      answer:
        "CutCoach gives real-time AI haircut coaching while you cut. Smart glasses workflow cues help you move through sections with structure, stay on schedule, and reduce hesitation. After the haircut, analysis and progress tracking show where you gained or lost time.",
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
  ],
  finalCta: {
    heading: "Ready to Level",
    headingAccent: "Up Your Cuts?",
    primaryCta: "Start Training Smarter",
    secondaryCta: "See How CutCoach Works",
  },
  footerDescription:
    "AI haircut coaching for barbers and students — analysis, video review, progress tracking, and smart glasses workflow built for real shop pressure.",
  mobileHighlights: [
    { title: "AI Coaching", subtitle: "Live Sessions", live: true },
    { title: "Analysis", subtitle: "Video + Progress" },
    { title: "Smart Glasses", subtitle: "Hands-Free Cues" },
  ],
};
