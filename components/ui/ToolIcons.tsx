"use client";

import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

function IconShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7", className)}
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Generic premium clipper silhouette — not a manufacturer mark. */
export function ClippersIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <rect
        x="18"
        y="8"
        width="12"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M20 26v10.5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V26"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M21 12h6M21 16h6M21 20h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M16 10h-2.5a2 2 0 0 0-2 2v4M32 10h2.5a2 2 0 0 1 2 2v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </IconShell>
  );
}

export function TrimmersIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M22 8h4a2 2 0 0 1 2 2v14l-4 12-4-12V10a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M22 14h4M22 18h4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="24" cy="11" r="1" fill="currentColor" opacity="0.8" />
    </IconShell>
  );
}

export function GuardsIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M12 18h24v6c0 2-1.5 4-4 5.5L24 36l-8-6.5C13.5 28 12 26 12 24v-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 18V14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M18 22h12M18 26h8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.65"
      />
    </IconShell>
  );
}

export function ShearsIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <circle cx="15" cy="34" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="33" cy="34" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M17.5 30.5 30 10M30.5 30.5 18 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="22" r="2" stroke="currentColor" strokeWidth="1.4" />
    </IconShell>
  );
}

export function CombIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <rect
        x="14"
        y="10"
        width="20"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17 18v16M21 18v18M25 18v18M29 18v16M33 18v14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </IconShell>
  );
}

export function SmartGlassesIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M10 22h8a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4Zm20 0h8a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M22 25h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 24H8M40 24h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="16" cy="27" r="1.2" fill="currentColor" className="text-[#4DDFFF]" />
    </IconShell>
  );
}

export function MobileAppIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <rect
        x="16"
        y="6"
        width="16"
        height="36"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M21 10h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="24" cy="37" r="1.4" fill="currentColor" opacity="0.75" />
      <path
        d="M20 16h8v14H20z"
        stroke="currentColor"
        strokeWidth="1.3"
        opacity="0.55"
      />
    </IconShell>
  );
}

export function AiIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M24 16v16M18 20.5h12M18 27.5h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M24 8v3M24 37v3M8 24h3M37 24h3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </IconShell>
  );
}

export function SecureCloudIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M16.5 32h16a7 7 0 0 0 1.2-13.9 9 9 0 0 0-17.5 2.4A5.5 5.5 0 0 0 16.5 32Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect
        x="20"
        y="22"
        width="8"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M22.5 22v-1.5a1.5 1.5 0 0 1 3 0V22"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </IconShell>
  );
}

export const TOOL_ICON_MAP = {
  clippers: ClippersIcon,
  trimmers: TrimmersIcon,
  guards: GuardsIcon,
  shears: ShearsIcon,
  comb: CombIcon,
  glasses: SmartGlassesIcon,
  mobile: MobileAppIcon,
  ai: AiIcon,
  cloud: SecureCloudIcon,
} as const;

export type ToolIconId = keyof typeof TOOL_ICON_MAP;
