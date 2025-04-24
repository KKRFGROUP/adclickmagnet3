// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the protocol from headers (DigitalOcean specific)
  const requestHeaders = new Headers(request.headers);
  const protocol = requestHeaders.get('x-forwarded-proto') || '';
  const host = request.headers.get('host') || '';
  
  // Force HTTPS redirect
  if (protocol === 'http') {
    const url = `https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(url);
  }
  
  // Handle mixed content by setting security headers
  const response = NextResponse.next();
  
  // Comprehensive security headers
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Content-Security-Policy', 
    "default-src 'self' https:; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; " + 
    "style-src 'self' 'unsafe-inline' https:; " + 
    "img-src 'self' data: https:; " + 
    "media-src 'self' https:; " + 
    "connect-src 'self' https:; " + 
    "font-src 'self' https:; " + 
    "object-src 'none'; " + 
    "upgrade-insecure-requests;"
  );
  
  return response;
}

// Configure middleware to run on all paths except those that don't need it
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};