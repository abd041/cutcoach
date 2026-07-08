export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
  bgImage?: string;
  highlights?: string[];
  callouts?: {
    label: string;
    value: string;
    live?: boolean;
  }[];
}

export interface Step {
  number: string;
  phase: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: string;
  callouts?: {
    label: string;
    value: string;
    live?: boolean;
  }[];
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  /** Shown under yearly price, e.g. "Equivalent to only $25.49/month" */
  yearlyEquivalent?: string;
  /** When true, free plan stays $0 with no "/ month" billing unit */
  free?: boolean;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: "speed" | "consistency" | "confidence" | "growth";
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}
