import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')

  // Define the primary domain
  const primaryDomain = 'mscode.id'

  // Standard paths to exclude from redirection (SEO files)
  const pathname = request.nextUrl.pathname
  if (pathname === '/robots.txt' || pathname === '/sitemap.xml') {
    return NextResponse.next()
  }

  // If the hostname is not the primary domain (e.g., mscode.co.id or www versions)
  if (hostname && hostname !== primaryDomain) {
    url.hostname = primaryDomain
    // Preserve protocol if possible, or force https
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.png, etc (static assets in public)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
