import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')
  const pathname = request.nextUrl.pathname

  // DEPLOYMENT CHECK: Ensure this code is on the branch that powers your live site.
  
  // 1. Static files and Next.js internal paths should NEVER be redirected
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') || // Matches files with extensions (favicon.ico, image.png, etc.)
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next()
  }

  // 2. Define the primary domain
  const primaryDomain = 'mscode.id'

  // 3. If the hostname is not the primary domain (e.g., mscode.co.id or www versions)
  if (hostname && hostname !== primaryDomain) {
    url.hostname = primaryDomain
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths for domain redirection logic.
     * Exclusions are handled inside the middleware function for better precision.
     */
    '/:path*',
  ],
}
