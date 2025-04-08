import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/login"

  // Get the authentication token from cookies
  const isAuthenticated = request.cookies.has("auth-storage")

  // Redirect logic
  if (isPublicPath && isAuthenticated) {
    // If user is on a public path but is authenticated, redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  if (!isPublicPath && !isAuthenticated) {
    // If user is on a protected path but is not authenticated, redirect to login
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Continue with the request if no redirects are needed
  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ["/login", "/dashboard/:path*"],
}

