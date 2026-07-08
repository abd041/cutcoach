"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  isLocale,
  LOCALE_HTML_LANG,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/types";
import { uiCopy, type UiCopy } from "@/lib/i18n/ui";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  ui: UiCopy;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readLocaleFromLocation(): Locale | null {
  if (typeof window === "undefined") return null;
  const param = new URLSearchParams(window.location.search).get("lang");
  return isLocale(param) ? param : null;
}

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

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

function applyDocumentLang(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = LOCALE_HTML_LANG[locale];
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const fromUrl = readLocaleFromLocation();
    const fromStorage = readStoredLocale();
    const initial = fromUrl ?? fromStorage ?? "en";
    setLocaleState(initial);
    applyDocumentLang(initial);
    setHydrated(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    applyDocumentLang(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    syncLocaleToUrl(next);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    syncLocaleToUrl(locale);
    applyDocumentLang(locale);
  }, [hydrated, locale]);

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
