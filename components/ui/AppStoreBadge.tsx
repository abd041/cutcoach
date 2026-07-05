import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/data/content";

interface AppStoreBadgeProps {
  className?: string;
  size?: "default" | "large";
}

export function AppStoreBadge({ className, size = "default" }: AppStoreBadgeProps) {
  const dimensions =
    size === "large"
      ? { width: 180, height: 60, className: "h-[52px] w-auto sm:h-[60px]" }
      : { width: 156, height: 52, className: "h-[44px] w-auto sm:h-[52px]" };

  return (
    <Link
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download CutCoach on the App Store"
      className={cn(
        "focus-premium inline-block rounded-xl opacity-90 transition-all duration-300 hover:opacity-100 hover:-translate-y-0.5",
        className
      )}
    >
      <Image
        src="/images/app-store-badge.svg"
        alt=""
        width={dimensions.width}
        height={dimensions.height}
        className={dimensions.className}
        priority={size === "large"}
      />
    </Link>
  );
}
