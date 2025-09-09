import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { Role } from "@prisma/client";

const isPublicOnly = (pathname: string) =>
  pathname.startsWith("/login") || pathname.startsWith("/register");

const roleRequired = (pathname: string) => pathname.startsWith("/upload");

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Get the token to check authentication status and role
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Redirect authenticated users away from login/signup pages
  if (token && isPublicOnly(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Protect admin pages
  if (roleRequired(pathname)) {
    // Redirect unauthenticated users to login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    // Redirect non-admin users to home page
    if (token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images, icons, etc.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)",
  ],
};
