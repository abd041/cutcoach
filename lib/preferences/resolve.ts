import { AUDIENCE_STORAGE_KEY, type AudienceMode } from "@/lib/audience/types";
import {
  isLocale,
  LOCALE_HTML_LANG,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/types";

export function parseAudienceMode(value: string | null | undefined): AudienceMode {
  return value === "client" ? "client" : "barber";
}

export function parsePreferenceCookie(
  name: string,
  cookieHeader: string | null | undefined
): string | null {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(";");
  for (const part of parts) {
    const [rawKey, ...rest] = part.trim().split("=");
    if (rawKey === name) {
      try {
        return decodeURIComponent(rest.join("="));
      } catch {
        return rest.join("=");
      }
    }
  }
  return null;
}

export function readClientCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  return parsePreferenceCookie(name, document.cookie);
}

export function writeClientCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

export function resolveClientAudienceMode(): AudienceMode {
  if (typeof window === "undefined") return "barber";

  const param = new URLSearchParams(window.location.search).get("mode");
  if (param === "client" || param === "barber") return param;

  const fromCookie = readClientCookie(AUDIENCE_STORAGE_KEY);
  if (fromCookie === "client" || fromCookie === "barber") return fromCookie;

  try {
    const stored = window.localStorage.getItem(AUDIENCE_STORAGE_KEY);
    if (stored === "client" || stored === "barber") return stored;
  } catch {
    /* ignore */
  }

  return "barber";
}

export function resolveClientLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const param = new URLSearchParams(window.location.search).get("lang");
  if (isLocale(param)) return param;

  const fromCookie = readClientCookie(LOCALE_STORAGE_KEY);
  if (isLocale(fromCookie)) return fromCookie;

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }

  return "en";
}

export function persistAudienceMode(mode: AudienceMode) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-audience-mode", mode);
  }
  writeClientCookie(AUDIENCE_STORAGE_KEY, mode);
  try {
    window.localStorage.setItem(AUDIENCE_STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }
}

export function persistLocale(locale: Locale) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = LOCALE_HTML_LANG[locale];
  }
  writeClientCookie(LOCALE_STORAGE_KEY, locale);
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
}
