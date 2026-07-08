import { cookies } from "next/headers";
import { AUDIENCE_STORAGE_KEY, type AudienceMode } from "@/lib/audience/types";
import {
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/types";
import { parseAudienceMode } from "@/lib/preferences/resolve";

export async function getServerAudienceMode(): Promise<AudienceMode> {
  const store = await cookies();
  return parseAudienceMode(store.get(AUDIENCE_STORAGE_KEY)?.value);
}

export async function getServerLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_STORAGE_KEY)?.value;
  return isLocale(value) ? value : "en";
}
