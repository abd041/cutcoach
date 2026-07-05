export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
  bgImage?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
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
