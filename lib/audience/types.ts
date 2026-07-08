export type AudienceMode = "barber" | "client";

export const AUDIENCE_MODES: AudienceMode[] = ["barber", "client"];

export const AUDIENCE_LABELS: Record<AudienceMode, string> = {
  barber: "Barber",
  client: "Client",
};

export const AUDIENCE_STORAGE_KEY = "cutcoach-audience-mode";
