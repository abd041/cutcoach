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
import { type AudienceMode } from "@/lib/audience/types";
import {
  getAudienceContent,
  type AudienceContentPack,
} from "@/lib/data/audience";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  persistAudienceMode,
  resolveClientAudienceMode,
} from "@/lib/preferences/resolve";

interface AudienceModeContextValue {
  mode: AudienceMode;
  setMode: (mode: AudienceMode) => void;
  content: AudienceContentPack;
}

const AudienceModeContext = createContext<AudienceModeContextValue | null>(
  null
);

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

export function AudienceModeProvider({
  children,
  initialMode,
}: {
  children: ReactNode;
  initialMode: AudienceMode;
}) {
  const { locale } = useLocale();
  const [mode, setModeState] = useState(initialMode);

  useLayoutEffect(() => {
    const resolved = resolveClientAudienceMode();
    if (resolved === initialMode) {
      persistAudienceMode(resolved);
      return;
    }
    setModeState(resolved);
    persistAudienceMode(resolved);
    syncModeToUrl(resolved);
  }, [initialMode]);

  const setMode = useCallback((next: AudienceMode) => {
    setModeState(next);
    persistAudienceMode(next);
    syncModeToUrl(next);
  }, []);

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
