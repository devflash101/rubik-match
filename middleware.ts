import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('Here is middleware!');
  // return NextResponse.redirect(new URL('/contest', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about/:path*', '/match/(.*)'],
}