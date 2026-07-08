"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useMagneticButton } from "@/hooks/useMagneticButton";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  showArrow?: boolean;
  size?: "default" | "large" | "nav" | "hero";
}

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  showArrow = true,
  size = "default",
}: ButtonProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } =
    useMagneticButton(0.2);

  const variants = {
    primary:
      "hero-primary-cta text-[#041018] font-semibold shadow-none hover:-translate-y-0.5",
    secondary:
      "border border-white/10 bg-white/[0.04] text-foreground backdrop-blur-md hover:border-white/20 hover:bg-white/[0.07]",
    ghost: "text-muted hover:text-foreground",
  };

  const sizes = {
    default: "h-[48px] px-6 text-sm rounded-2xl",
    large: "h-[56px] px-8 text-base rounded-2xl sm:h-[60px]",
    nav: "h-9 gap-2 rounded-xl px-4 text-[13px] font-semibold tracking-[0.01em] sm:h-10 sm:px-5",
    hero: "h-[50px] px-7 text-[15px] rounded-2xl sm:h-[52px] lg:h-[58px] lg:px-8 lg:text-base",
  };

  const content = (
    <motion.span
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 420, damping: 22, mass: 0.8 }}
      whileHover={{ scale: variant === "primary" ? 1 : 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium transition-transform duration-300",
        className?.includes("w-full") && "w-full",
        variants[variant],
        sizes[size],
        className
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-[0.45em] leading-none">
        {children}
      </span>
      {showArrow && variant !== "ghost" && (
        <>
          {variant === "primary" ? (
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          ) : (
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </>
      )}
    </motion.span>
  );

  const sharedProps = {
    ref: ref as React.RefObject<HTMLAnchorElement>,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: cn(
      "group inline-block focus-premium rounded-2xl",
      className?.includes("w-full") && "block w-full"
    ),
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} {...sharedProps}>
      {content}
    </Link>
  );
}
