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
    "CutCoach gives barbers real-time structure, performance feedback, and pacing intelligence\nso every client session becomes a training opportunity.",
};

export const features: Feature[] = [
  {
    title: "Performance Awareness",
    description:
      "CutCoach tracks pacing, workflow rhythm, and technical consistency so barbers understand how they actually perform - not how they think they perform",
    image: images.liveAiSupport,
    bgImage: images.featureBg1,
  },
  {
    title: "Live Cut Guidance",
    description:
      "Real-time cues help barbers stay on schedule, maintain structure, and reduce hesitation during complex sections of a haircut",
    image: images.liveCutGuidance,
    bgImage: images.featureBg2,
  },
  {
    title: "Guided Session Activation",
    description:
      "Start a CutCoach session before the haircut begins and receive structured timing guidance designed to keep your workflow efficient and professional.",
    image: images.guidedSession,
    bgImage: images.leftCard,
  },
  {
    title: "Live AI Cut Support",
    description:
      "Receive subtle real-time cues that help you move through each section of the haircut with confidence, reduce hesitation, and maintain professional pacing.",
    image: images.liveAiSupport,
    bgImage: images.rightCard,
  },
];

export const howItWorksSection = {
  tag: "How CutCoach Works",
  heading: "Train Faster on",
  headingAccent: "Real Clients",
  description:
    "CutCoach guides your haircut from start to finish using real-time pacing cues, structured workflow reminders, and AI performance feedback after every session.",
};

export const steps: Step[] = [
  {
    number: "Step 01",
    title: "Start a Guided Session",
    description:
      "Activate CutCoach before the haircut begins to receive timing structure and workflow direction designed to keep you efficient and confident.",
    tags: ["Begin Session", "View Session Plan"],
    icon: images.step1Icon,
  },
  {
    number: "Step 02",
    title: "Cut with Live AI Guidance",
    description:
      "During the haircut, CutCoach delivers subtle pacing cues and workflow reminders through your smart glasses so you stay structured, efficient, and confident in every section.",
    tags: ["Stay On Pace", "View Live Metrics"],
    icon: images.step2Icon,
  },
  {
    number: "Step 03",
    title: "Review Your Performance & Improve",
    description:
      "After the haircut, CutCoach analyzes your timing efficiency, workflow decisions, and technical consistency - helping you identify mistakes, build confidence, and improve with every real client.",
    tags: ["View Session Report", "Track Skill Progress"],
    icon: images.step3Icon,
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
    "Early access barbers are testing CutCoach in real shops. Full stories and video reviews launch with our next release.",
};

export const testimonialPreviewThemes = [
  {
    title: "Faster Sessions",
    description: "Barbers tracking pacing improvements across back-to-back client days.",
    metric: "Speed",
  },
  {
    title: "Consistent Structure",
    description: "Structured workflow cues helping barbers stay on schedule every cut.",
    metric: "Consistency",
  },
  {
    title: "Shop Confidence",
    description: "Real-time guidance building confidence behind the chair with live clients.",
    metric: "Confidence",
  },
];

export const pricingSection = {
  tag: "Membership",
  heading: "Choose",
  headingAccent: "Your CutCoach Plan",
  description:
    "Start improving your haircut speed, structure, and consistency with AI coaching built for real client sessions.",
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
