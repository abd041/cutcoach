import { images } from "@/lib/images";
import type {
  Benefit,
  FAQItem,
  Feature,
  NavLink,
  PricingPlan,
  Step,
} from "@/types";

export const siteConfig = {
  name: "CutCoach",
  title: "CutCoach | AI Barber Training & Coaching",
  description:
    "CutCoach helps barbers improve speed, consistency, confidence, and client results with AI-powered coaching, haircut analysis, and training tools.",
  url: "https://www.cutcoachai.com",
  appStoreUrl:
    "https://apps.apple.com/us/app/cutcoach/id6773789911",
  copyright:
    "© 2025 All rights reserved. Designed by Matthew Diggs, Founder/CEO.",
  footerDescription:
    "AI training tools built for real barbers, real clients, and real shop pressure. CutCoach helps you move faster, stay consistent, and build confidence behind the chair.",
  supportEmail: "hello@cutcoachai.com",
  socialProfiles: [
    "https://facebook.com",
    "https://instagram.com",
    "https://x.com",
    "https://linkedin.com",
  ],
};

export const navLinks: NavLink[] = [
  { label: "How CutCoach Works", href: "#how-it-works" },
  { label: "Real Benefits", href: "#features" },
  { label: "Early Access", href: "#pricing" },
  { label: "Barber Feedback", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  headline: "Cut Faster. Stay Consistent.",
  headlineAccent: "Build Real Confidence.",
  subtext:
    "AI coaching designed for live haircuts -- helping barbers improve speed, precision, and confidence without relying on mannequins or guesswork.",
  cta: "Start Training Smarter",
};

export const trustedBrands = [
  { name: "BaByliss PRO", logo: images.babyliss },
  { name: "Andis", logo: images.andis },
  { name: "CutCoach", logo: images.logo },
];

export const featureSection = {
  tag: "Why CutCoach Works",
  heading: "AI Coaching that Elevates",
  headingAccent: "Every Haircut",
  description:
    "Real-time structure, performance feedback, and pacing intelligence — so every client session becomes a training opportunity.",
  pillars: ["Performance", "Pacing", "Confidence"],
};

export const features: Feature[] = [
  {
    title: "Performance Awareness",
    description:
      "Understand how you actually perform behind the chair — not how you think you perform.",
    highlights: [
      "Tracks pacing and workflow rhythm",
      "Surfaces technical consistency gaps",
      "Turns every cut into measurable feedback",
    ],
    image: images.liveAiSupport,
    bgImage: images.featureBg1,
    callouts: [
      { label: "Session score", value: "87" },
      { label: "Pacing", value: "On track", live: true },
    ],
  },
  {
    title: "Live Cut Guidance",
    description:
      "Stay on schedule and in control during complex sections with subtle, hands-free cues.",
    highlights: [
      "Real-time pacing through smart glasses",
      "Structure reminders per section",
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
    title: "Guided Session Activation",
    description:
      "Start a session in under two minutes and get a clear plan before the first clip.",
    highlights: [
      "One-tap session launch on iOS",
      "Structured timing from the first section",
      "Professional workflow from minute one",
    ],
    image: images.guidedSession,
    bgImage: images.leftCard,
    callouts: [
      { label: "Status", value: "Live", live: true },
      { label: "Start time", value: "2 min" },
    ],
  },
];

export const howItWorksSection = {
  tag: "How CutCoach Works",
  heading: "Train Faster on",
  headingAccent: "Real Clients",
  description:
    "Three phases. One workflow. Coaching from first clip to final mirror check.",
  pillars: ["Before", "During", "After"],
};

export const steps: Step[] = [
  {
    number: "Step 01",
    phase: "Before the cut",
    title: "Start a Guided Session",
    description:
      "Launch a session in under two minutes with a clear plan before the first clip.",
    highlights: [
      "One-tap activation on iOS",
      "Structured section timing from the start",
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
      "Stay on pace with subtle, hands-free cues through every section of the cut.",
    highlights: [
      "Live pacing through smart glasses",
      "Workflow reminders per section",
      "Less hesitation, smoother flow",
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
    title: "Analyze Performance & Level Up",
    description:
      "Review timing, workflow, and consistency — then improve with every real client.",
    highlights: [
      "Session score and pacing breakdown",
      "Clear notes on what slowed you down",
      "Actionable feedback after every cut",
    ],
    tags: ["View Session Report", "Track Skill Progress"],
    icon: images.step3Icon,
    callouts: [
      { label: "Session score", value: "87" },
      { label: "Insights", value: "Ready", live: true },
    ],
  },
];

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

export const benefits: Benefit[] = [
  {
    title: "Improve Speed",
    description:
      "CutCoach tracks pacing, workflow rhythm, and technical consistency so barbers understand how they actually perform — not how they think they perform",
    icon: "speed",
  },
  {
    title: "Stay Consistent",
    description:
      "Real-time cues help barbers stay on schedule, maintain structure, and reduce hesitation during complex sections of a haircut",
    icon: "consistency",
  },
  {
    title: "Build Confidence",
    description:
      "Receive subtle real-time cues that help you move through each section of the haircut with confidence, reduce hesitation, and maintain professional pacing.",
    icon: "confidence",
  },
  {
    title: "Track Progress",
    description:
      "After the haircut, CutCoach analyzes your timing efficiency, workflow decisions, and technical consistency - helping you identify mistakes, build confidence, and improve with every real client.",
    icon: "growth",
  },
];

export const compatibilitySection = {
  tag: "Real Tool Compatibility",
  heading: "Guidance Security",
  headingAccent: "Across All Platforms",
  description:
    "CutCoach works with the tools barbers already use — effortless integration across your devices and shop setup.",
  pillars: ["iOS", "Smart Glasses", "Pro Tools", "Cloud"],
};

export const compatibilityPlatforms = [
  {
    label: "iOS App",
    description: "Start sessions from your iPhone in under 2 minutes.",
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
    description: "Private sessions, performance data, and client insights.",
  },
];

export const testimonialsSection = {
  tag: "Real Barber Feedback",
  heading: "Barbers Are Already",
  headingAccent: "Training Smarter",
  description:
    "Early access barbers are testing CutCoach in real shops. These are the outcomes they're tracking — full video stories launch with our next release.",
  pillars: ["Speed", "Consistency", "Confidence"],
};

export const testimonialPreviewThemes = [
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
      "Structured workflow cues helping barbers stay on schedule every cut — same rhythm, every client.",
    metric: "Consistency",
    outcome: "Workflow cues on every cut",
  },
  {
    title: "Shop Confidence",
    description:
      "Real-time guidance building confidence behind the chair with live clients — less hesitation, more control.",
    metric: "Confidence",
    outcome: "Live guidance during cuts",
  },
];

export const pricingSection = {
  tag: "Membership",
  heading: "Choose",
  headingAccent: "Your CutCoach Plan",
  description:
    "Start improving your haircut speed, structure, and consistency with AI coaching built for real client sessions.",
  pillars: ["Free Start", "Pro Plan", "Credit Packs"],
  footnote: "All plans include secure session storage and iOS access.",
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For new barbers testing CutCoach.",
    monthlyPrice: "$0",
    yearlyPrice: "$60.00",
    cta: "Start Free",
    features: [
      "25 Free Sessions At Signup",
      "AI Coach Chat",
      "Basic Haircut Guidance",
      "Client Passport Preview",
    ],
  },
  {
    name: "CutCoach Pro",
    description: "Best for barbers using AI guidance every week.",
    monthlyPrice: "$99.00",
    yearlyPrice: "$199.00",
    cta: "Start Training",
    highlighted: true,
    badge: "Most popular",
    features: [
      "150 Credits Every Month",
      "AI Coach Chat",
      "Haircut Analysis",
      "Video Upload Analysis & Progress Tracking",
      "Client Passport Summaries",
    ],
  },
  {
    name: "Credit Packs",
    description:
      "Pay as you go.\n\nFor barbers who need extra AI credits.",
    monthlyPrice: "$199.00",
    yearlyPrice: "$220.00",
    cta: "Buy Credits",
    features: [
      "50 Credits — $9.99",
      "150 Credits — $24.99",
      "Credits Used For Chat, Analysis, Uploads, and Summaries",
      "No Subscription Required",
    ],
  },
];

export const faqSection = {
  tag: "CutCoach Questions",
  heading: "Everything Barbers",
  headingAccent: "Want To Know",
  description: "Real answers about how CutCoach works during real haircuts.",
  pillars: ["Getting Started", "Privacy", "Billing"],
};

export const faqItems: FAQItem[] = [
  {
    question: "How does CutCoach actually help during a haircut?",
    answer:
      "CutCoach gives real-time pacing guidance while you cut. It helps you move through sections with structure, stay on schedule, and reduce hesitation. After the haircut, it analyzes timing and technique so you understand where you gained or lost time.",
  },
  {
    question: 'Do I need to be "tech-savvy" to use CutCoach?',
    answer:
      "No. If you can use a smartphone, you can use CutCoach. Sessions are simple to start, and guidance happens automatically while you focus on the haircut.",
  },
  {
    question: "Are my haircut recordings and performance data private?",
    answer:
      "Yes. Your sessions and performance insights are private to your account. CutCoach uses secure storage and does not share your client footage or performance data.",
  },
  {
    question: "How fast can I start training with CutCoach?",
    answer:
      "Most barbers can start a guided session in under 2 minutes. Select hair type, choose a haircut structure, connect your glasses, and begin cutting.",
  },
  {
    question: "Does CutCoach replace my booking apps or shop systems?",
    answer:
      "No. CutCoach focuses only on training and performance improvement. It works alongside your current booking apps, payment tools, and shop workflow.",
  },
];

export const finalCta = {
  heading: "Ready to Level",
  headingAccent: "Up Your Cuts?",
  primaryCta: "Join Early Access",
  secondaryCta: "See How CutCoach Works",
};

export const footerLinks = [
  { label: "How CutCoach Works", href: "#how-it-works" },
  { label: "Real Benefits", href: "#features" },
  { label: "Early Access", href: "#pricing" },
  { label: "Barber Feedback", href: "#testimonials" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: images.socialFacebook },
  { label: "Instagram", href: "https://instagram.com", icon: images.socialInstagram },
  { label: "X", href: "https://x.com", icon: images.socialX },
  { label: "LinkedIn", href: "https://linkedin.com", icon: images.socialLinkedin },
];

export const stats = [
  { value: 25, suffix: "+", label: "Free Sessions" },
  { value: 150, suffix: "", label: "Monthly Credits" },
  { value: 2, suffix: " min", label: "To Start Training" },
];

export const trustBar = {
  columnStart: "Get started",
  columnMetrics: "What you get",
  columnProof: "Who it's for",
  iosPill: "Free on iOS",
  downloadNote: "No card required · First sessions free",
  trustedLabel: "Barber Trusted",
  quote: "Finally training that matches shop pace.",
  mission:
    "Built for shop-floor pressure — real clients, real pacing, real confidence behind the chair.",
  earlyAccess: "Join barbers training smarter with CutCoach early access.",
  avatars: ["JM", "TD", "KR", "AL"],
};
