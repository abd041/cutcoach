export type Locale = "en" | "es" | "fr";

export const LOCALES: Locale[] = ["en", "es", "fr"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  es: "es",
  fr: "fr",
};

export const LOCALE_STORAGE_KEY = "cutcoach-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es" || value === "fr";
}
