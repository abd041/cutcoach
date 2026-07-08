"use client";

import { useServerInsertedHTML } from "next/navigation";
import { buildJsonLdSchema } from "@/lib/seo/jsonld-schema";

export function JsonLd() {
  const schemaJson = JSON.stringify(buildJsonLdSchema());

  useServerInsertedHTML(() => (
    <script
      id="cutcoach-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaJson }}
    />
  ));

  return null;
}
