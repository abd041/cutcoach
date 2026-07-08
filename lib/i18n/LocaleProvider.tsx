"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  type Locale,
} from "@/lib/i18n/types";
import { uiCopy, type UiCopy } from "@/lib/i18n/ui";
import {
  persistLocale,
  resolveClientLocale,
} from "@/lib/preferences/resolve";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  ui: UiCopy;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function syncLocaleToUrl(locale: Locale) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (locale === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", locale);
  }
  window.history.replaceState({}, "", url.toString());
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState(initialLocale);

  useLayoutEffect(() => {
    const resolved = resolveClientLocale();
    if (resolved === initialLocale) {
      persistLocale(resolved);
      return;
    }
    setLocaleState(resolved);
    persistLocale(resolved);
    syncLocaleToUrl(resolved);
  }, [initialLocale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
    syncLocaleToUrl(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      ui: uiCopy[locale],
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

export function useUi() {
  return useLocale().ui;
}
