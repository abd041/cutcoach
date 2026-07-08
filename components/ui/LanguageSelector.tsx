"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Languages } from "lucide-react";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NAMES,
  type Locale,
} from "@/lib/i18n/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useScrollSubscription } from "@/hooks/useScrollSubscription";
import { cn } from "@/lib/cn";

interface LanguageSelectorProps {
  className?: string;
  /** Compact for nav pill; expanded for mobile drawer */
  variant?: "nav" | "menu";
}

type MenuPosition = {
  top: number;
  left: number;
  minWidth: number;
};

function LanguageOption({
  option,
  active,
  onSelect,
}: {
  option: Locale;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      onClick={onSelect}
      className={cn(
        "flex w-full min-h-11 items-center justify-between gap-3 rounded-lg px-3 py-3 text-left transition-colors",
        active
          ? "bg-[#4DDFFF]/12 text-white"
          : "text-white/65 hover:bg-white/[0.05] hover:text-white"
      )}
    >
      <span className="flex flex-col">
        <span className="text-[12px] font-bold tracking-[0.08em]">
          {LOCALE_LABELS[option]}
        </span>
        <span className="text-[10px] text-white/40">{LOCALE_NAMES[option]}</span>
      </span>
      {active && <Check className="h-3.5 w-3.5 text-[#4DDFFF]" aria-hidden />}
    </button>
  );
}

export function LanguageSelector({
  className,
  variant = "nav",
}: LanguageSelectorProps) {
  const { locale, setLocale, ui } = useLocale();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateMenuPosition = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const minWidth = 168;

    setMenuPosition({
      top: rect.bottom + 6,
      left: Math.max(8, rect.right - minWidth),
      minWidth: Math.max(minWidth, rect.width),
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    updateMenuPosition();
  }, [open, updateMenuPosition]);

  useScrollSubscription(() => {
    if (open) updateMenuPosition();
  });

  useEffect(() => {
    if (!open) return;

    const onResize = () => updateMenuPosition();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [open, updateMenuPosition]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        rootRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (variant === "menu") {
    return (
      <div className={cn("space-y-3", className)}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
          {ui.language}
        </p>
        <div
          role="group"
          aria-label={ui.language}
          className="grid grid-cols-3 gap-2"
        >
          {LOCALES.map((option) => {
            const isActive = locale === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setLocale(option)}
                aria-pressed={isActive}
                className={cn(
                  "focus-premium flex min-h-11 flex-col items-center justify-center rounded-xl border px-2 py-2 transition-all duration-300",
                  isActive
                    ? "border-[#4DDFFF]/40 bg-[#4DDFFF]/10 text-[#4DDFFF]"
                    : "border-white/[0.08] bg-white/[0.02] text-white/55 hover:text-white/85"
                )}
              >
                <span className="text-sm font-bold tracking-[0.08em]">
                  {LOCALE_LABELS[option]}
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] opacity-80">
                  {LOCALE_NAMES[option]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const menu =
    mounted && menuPosition
      ? createPortal(
          <AnimatePresence>
            {open ? (
              <motion.div
                key="language-menu"
                ref={menuRef}
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                role="listbox"
                aria-label={ui.language}
                style={{
                  position: "fixed",
                  top: menuPosition.top,
                  left: menuPosition.left,
                  minWidth: menuPosition.minWidth,
                  zIndex: 120,
                }}
                className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#060a10]/96 p-1 shadow-[0_20px_48px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl"
              >
                {LOCALES.map((option) => (
                  <LanguageOption
                    key={option}
                    option={option}
                    active={locale === option}
                    onSelect={() => {
                      setLocale(option);
                      setOpen(false);
                    }}
                  />
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${ui.language}: ${LOCALE_NAMES[locale]}`}
        className="focus-premium inline-flex min-h-11 items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 text-[11px] font-bold tracking-[0.1em] text-white/75 transition-colors hover:border-[#4DDFFF]/30 hover:text-white"
      >
        <Languages className="h-3.5 w-3.5 text-[#4DDFFF]/80" aria-hidden />
        <span>{LOCALE_LABELS[locale]}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 opacity-60 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      {menu}
    </div>
  );
}
