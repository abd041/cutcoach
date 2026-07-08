import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { images } from "@/lib/images";

type BrandLogoSize = "nav" | "footer" | "legal" | "orbit";

/** Intrinsic asset size: 1250×1390 */
const sizeMap: Record<
  BrandLogoSize,
  { width: number; height: number; className: string }
> = {
  nav: {
    width: 220,
    height: 244,
    className: "brand-logo h-11 w-auto sm:h-14 lg:h-[3.75rem]",
  },
  footer: {
    width: 200,
    height: 222,
    className: "brand-logo h-11 w-auto sm:h-12",
  },
  legal: {
    width: 180,
    height: 200,
    className: "brand-logo h-10 w-auto",
  },
  orbit: {
    width: 120,
    height: 133,
    className: "brand-logo h-10 w-auto sm:h-11",
  },
};

interface BrandLogoProps {
  size?: BrandLogoSize;
  className?: string;
  priority?: boolean;
  href?: string;
}

export function BrandLogo({
  size = "nav",
  className,
  priority = false,
  href,
}: BrandLogoProps) {
  const config = sizeMap[size];

  const image = (
    <Image
      src={images.logo}
      alt="CutCoach logo"
      width={config.width}
      height={config.height}
      className={cn(config.className, className)}
      priority={priority}
      unoptimized
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center bg-transparent" aria-label="CutCoach home">
        {image}
      </Link>
    );
  }

  return image;
}
