"use client";

import { useUi } from "@/lib/i18n/LocaleProvider";

export function SkipToContent() {
  const ui = useUi();

  return (
    <a
      href="#main-content"
      className="focus-premium sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[#05070a] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
    >
      {ui.skipToContent}
    </a>
  );
}
