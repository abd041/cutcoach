import type { AudienceMode } from "@/lib/audience/types";
import type { Locale } from "@/lib/i18n/types";
import type { AudienceContentPack } from "@/lib/data/audience/types";
import { barberContent } from "@/lib/data/audience/barber";
import { barberContentEs } from "@/lib/data/audience/barber.es";
import { barberContentFr } from "@/lib/data/audience/barber.fr";
import { clientContent } from "@/lib/data/audience/client";
import { clientContentEs } from "@/lib/data/audience/client.es";
import { clientContentFr } from "@/lib/data/audience/client.fr";

export type { AudienceContentPack, CreditPack } from "@/lib/data/audience/types";

export const audienceContent: Record<
  Locale,
  Record<AudienceMode, AudienceContentPack>
> = {
  en: {
    barber: barberContent,
    client: clientContent,
  },
  es: {
    barber: barberContentEs,
    client: clientContentEs,
  },
  fr: {
    barber: barberContentFr,
    client: clientContentFr,
  },
};

export function getAudienceContent(
  locale: Locale,
  mode: AudienceMode
): AudienceContentPack {
  return audienceContent[locale][mode];
}
