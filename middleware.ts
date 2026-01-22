import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Password for production
const PROD_PASSWORD = 'LetsGoCMT2026!';
const PASSWORD_COOKIE = 'cmt_auth';

export function middleware(request: NextRequest) {
  // Only apply password protection in production
  const isProduction = process.env.VERCEL_ENV === 'production' || 
                       (process.env.NODE_ENV === 'production' && process.env.VERCEL === '1');
  
  // Skip password check in development/local
  if (!isProduction) {
    return NextResponse.next();
  }

  // Check if user is already authenticated
  const isAuthenticated = request.cookies.get(PASSWORD_COOKIE)?.value === 'authenticated';

  // Allow access to login page and API route
  if (request.nextUrl.pathname.startsWith('/api/auth') || 
      request.nextUrl.pathname === '/login') {
    return NextResponse.next();
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
