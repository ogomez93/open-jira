import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const handleBadRequest = (req: NextRequest, search: string) => {
  const url = req.nextUrl.clone()
  url.pathname = '/api/bad-request'
  url.search = search
  return NextResponse.rewrite(url)
}
