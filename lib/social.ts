const PLACEHOLDER_SOCIAL_ROOTS = new Set([
  "https://facebook.com",
  "https://www.facebook.com",
  "https://instagram.com",
  "https://www.instagram.com",
  "https://x.com",
  "https://www.x.com",
  "https://twitter.com",
  "https://www.twitter.com",
  "https://linkedin.com",
  "https://www.linkedin.com",
]);

/** Returns true for generic root social URLs that should not ship in production. */
export function isPlaceholderSocialUrl(href: string) {
  try {
    const normalized = href.replace(/\/$/, "").toLowerCase();
    return PLACEHOLDER_SOCIAL_ROOTS.has(normalized);
  } catch {
    return true;
  }
}

export function getLiveSocialProfiles(urls: string[]) {
  return urls.filter((url) => !isPlaceholderSocialUrl(url));
}
