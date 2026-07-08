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

const ENTRANCE_SESSION_KEY = "cutcoach-entrance-seen";

interface EntranceContextValue {
  /** True once the entrance has finished (or was skipped). */
  isReady: boolean;
  /** True while the full-screen entrance overlay is mounted. */
  isPlaying: boolean;
  completeEntrance: () => void;
}

const EntranceContext = createContext<EntranceContextValue | null>(null);

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasSeenEntrance() {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(ENTRANCE_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markEntranceSeen() {
  try {
    sessionStorage.setItem(ENTRANCE_SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function EntranceProvider({ children }: { children: ReactNode }) {
  // Optimistic play state avoids a flash of the hero before the gate decides.
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion() || hasSeenEntrance()) {
      setIsReady(true);
      setIsPlaying(false);
      document.documentElement.classList.remove("entrance-locked");
      return;
    }

    setIsPlaying(true);
    document.documentElement.classList.add("entrance-locked");

    return () => {
      document.documentElement.classList.remove("entrance-locked");
    };
  }, []);

  const completeEntrance = useCallback(() => {
    markEntranceSeen();
    setIsReady(true);
    window.setTimeout(() => {
      setIsPlaying(false);
      document.documentElement.classList.remove("entrance-locked");
    }, 520);
  }, []);

  const value = useMemo(
    () => ({ isReady, isPlaying, completeEntrance }),
    [isReady, isPlaying, completeEntrance]
  );

  return (
    <EntranceContext.Provider value={value}>{children}</EntranceContext.Provider>
  );
}

export function useEntrance() {
  const ctx = useContext(EntranceContext);
  if (!ctx) {
    throw new Error("useEntrance must be used within EntranceProvider");
  }
  return ctx;
}

/** Safe for components that may render outside the homepage entrance gate. */
export function useEntranceReady() {
  const ctx = useContext(EntranceContext);
  return ctx?.isReady ?? true;
}
