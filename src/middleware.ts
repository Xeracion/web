import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALE_COOKIE = 'xeracion_lang'
const EN_PREFIXES = ['/en', '/about', '/volunteering']

function isEnglishPath(pathname: string) {
  return EN_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const headers = new Headers(request.headers)
  headers.set('x-pathname', pathname)

  if (pathname === '/') {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value

    if (cookieLocale === 'en') {
      return NextResponse.redirect(new URL('/en/', request.url))
    }

    if (!cookieLocale) {
      const acceptLanguage = request.headers.get('accept-language') ?? ''
      const primary = acceptLanguage.split(',')[0]?.split('-')[0]?.trim().toLowerCase()

      if (primary && primary !== 'es' && primary !== 'gl') {
        return NextResponse.redirect(new URL('/en/', request.url))
      }
    }
  }

  const response = NextResponse.next({ request: { headers } })

  if (pathname !== '/_next' && !pathname.startsWith('/api')) {
    response.cookies.set(LOCALE_COOKIE, isEnglishPath(pathname) ? 'en' : 'es', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
