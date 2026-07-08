"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  EntranceProvider,
  useEntrance,
} from "@/lib/entrance/EntranceProvider";
import { SiteEntrance } from "@/components/entrance/SiteEntrance";

function HomeContent({ children }: { children: ReactNode }) {
  const { isReady } = useEntrance();

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isReady ? 1 : 0.01,
        filter: isReady ? "blur(0px)" : "blur(6px)",
      }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={isReady ? undefined : "pointer-events-none select-none"}
    >
      {children}
    </motion.div>
  );
}

export function HomeShell({ children }: { children: ReactNode }) {
  return (
    <EntranceProvider>
      <SiteEntrance />
      <HomeContent>{children}</HomeContent>
    </EntranceProvider>
  );
}
