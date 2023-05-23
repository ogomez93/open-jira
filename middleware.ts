import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { handleBadRequest, isValidMongoId } from './helpers'
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = req.nextUrl.pathname.replace('/api/entries/', '')
    
    if (!isValidMongoId(id)) return handleBadRequest(req, `?message=${id} is not a valid MongoID`)
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: [
    '/api/entries/:path*'
  ]
}
