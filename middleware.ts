import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

// Define a whitelist of paths
const WHITELISTED_PATHS = [
  "/dev",
  "/sub",
  "/proxyshare.conf",
  "/en/refund",
  "/en/tos",
  "/api/juchatmodels",
  "/api/svg",
  "/en/privacy",
  "/en/faq",
  "/zh/refund",
  "/zh/tos",
  "/zh/privacy",
  "/zh/faq",
  "/en",
  "/zh",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // Check if the request path is in the whitelist
  if (WHITELISTED_PATHS.some((path) => pathname.startsWith(path))) {
    return;
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Also include the root path '/'
     */
    "/((?!_next/static|_next/image|dev|favicon.ico|proxyshare\\.conf|.*\\.(?:svg|png|ico|jpg|jpeg|gif|webp)$).*)",
  ],
};
