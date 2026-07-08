"use client";

import { useServerInsertedHTML } from "next/navigation";
import { preferenceBootstrapScript } from "@/lib/audience/bootstrap-script";

/** Injects preference sync script during SSR — avoids React 19 script-in-tree warnings. */
export function PreferenceBootstrap() {
  useServerInsertedHTML(() => (
    <script
      id="preference-bootstrap"
      dangerouslySetInnerHTML={{ __html: preferenceBootstrapScript }}
    />
  ));

  return null;
}
