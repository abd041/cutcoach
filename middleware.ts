import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUDIENCE_STORAGE_KEY } from "@/lib/audience/types";
import { isLocale, LOCALE_STORAGE_KEY } from "@/lib/i18n/types";
import { PREFERENCE_COOKIE_MAX_AGE } from "@/lib/preferences/constants";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const mode = request.nextUrl.searchParams.get("mode");
  const lang = request.nextUrl.searchParams.get("lang");

  if (mode === "client" || mode === "barber") {
    response.cookies.set(AUDIENCE_STORAGE_KEY, mode, {
      path: "/",
      maxAge: PREFERENCE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
  }

  if (isLocale(lang)) {
    response.cookies.set(LOCALE_STORAGE_KEY, lang, {
      path: "/",
      maxAge: PREFERENCE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
