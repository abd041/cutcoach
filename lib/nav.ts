import type { AudienceMode } from "@/lib/audience/types";
import type { NavLink } from "@/types";
import { scrollToHash } from "@/lib/scroll";

export function navLinkKey(link: NavLink) {
  return `${link.href}:${link.audience ?? "any"}`;
}

/** Prefer audience-tagged matches when the active section is shared (e.g. #pricing). */
export function resolveActiveNavLink(
  links: NavLink[],
  activeHref: string,
  mode: AudienceMode
): NavLink | null {
  if (!activeHref) return null;

  const matches = links.filter((link) => link.href === activeHref);
  if (matches.length === 0) return null;

  const modeMatch = matches.find((link) => link.audience === mode);
  if (modeMatch) return modeMatch;

  const neutral = matches.find((link) => !link.audience);
  return neutral ?? matches[0];
}

export function applyNavLink(
  link: NavLink,
  options: {
    mode: AudienceMode;
    setMode: (mode: AudienceMode) => void;
    isHome: boolean;
  }
) {
  const { mode, setMode, isHome } = options;

  if (link.audience && link.audience !== mode) {
    setMode(link.audience);
  }

  if (isHome) {
    // Wait for mode-swapped section content to commit before scrolling.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash(link.href);
      });
    });
    return;
  }

  const params = new URLSearchParams();
  if (link.audience) params.set("mode", link.audience);
  const query = params.toString();
  window.location.assign(`/${query ? `?${query}` : ""}${link.href}`);
}
