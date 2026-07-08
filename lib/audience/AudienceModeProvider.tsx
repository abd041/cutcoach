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
  AUDIENCE_STORAGE_KEY,
  type AudienceMode,
} from "@/lib/audience/types";
import {
  getAudienceContent,
  type AudienceContentPack,
} from "@/lib/data/audience";
import { useLocale } from "@/lib/i18n/LocaleProvider";

interface AudienceModeContextValue {
  mode: AudienceMode;
  setMode: (mode: AudienceMode) => void;
  content: AudienceContentPack;
}

const AudienceModeContext = createContext<AudienceModeContextValue | null>(
  null
);

function readModeFromLocation(): AudienceMode | null {
  if (typeof window === "undefined") return null;
  const param = new URLSearchParams(window.location.search).get("mode");
  if (param === "client" || param === "barber") return param;
  return null;
}

function readStoredMode(): AudienceMode | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(AUDIENCE_STORAGE_KEY);
    if (stored === "client" || stored === "barber") return stored;
  } catch {
    /* ignore */
  }
  return null;
}

function syncModeToUrl(mode: AudienceMode) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (mode === "barber") {
    url.searchParams.delete("mode");
  } else {
    url.searchParams.set("mode", mode);
  }
  window.history.replaceState({}, "", url.toString());
}

export function AudienceModeProvider({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  const [mode, setModeState] = useState<AudienceMode>("barber");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const fromUrl = readModeFromLocation();
    const fromStorage = readStoredMode();
    const initial = fromUrl ?? fromStorage ?? "barber";
    setModeState(initial);
    setHydrated(true);
  }, []);

  const setMode = useCallback((next: AudienceMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(AUDIENCE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    syncModeToUrl(next);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    syncModeToUrl(mode);
  }, [hydrated, mode]);

  const value = useMemo(
    () => ({
      mode,
      setMode,
      content: getAudienceContent(locale, mode),
    }),
    [locale, mode, setMode]
  );

  return (
    <AudienceModeContext.Provider value={value}>
      {children}
    </AudienceModeContext.Provider>
  );
}

export function useAudienceMode() {
  const ctx = useContext(AudienceModeContext);
  if (!ctx) {
    throw new Error("useAudienceMode must be used within AudienceModeProvider");
  }
  return ctx;
}

export function useAudienceContent() {
  return useAudienceMode().content;
}
