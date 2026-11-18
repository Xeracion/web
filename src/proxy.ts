import { NextResponse, type NextRequest } from 'next/server'

import { EN_PAGES, PAGE_PAIRS } from '@/lib/i18n'

// Idioma automático: quien entra desde fuera (buscador, enlace, URL escrita)
// en una página en castellano que tiene versión en gallego o en inglés va a
// esa versión si su navegador la prefiere. Sin cookies ni almacenamiento
// (los textos legales dicen que la web no usa ninguno): la elección se
// respeta porque solo se redirige al llegar de fuera; al navegar dentro de
// la web (selector ES · GL · EN incluido) el referer es la propia web y no se
// toca nada. Los buscadores no se redirigen.

type Idioma = 'es' | 'gl' | 'en'

const BOTS = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|preview|lighthouse|headless/i

/** Idioma preferido del navegador entre los de la web; null si no lo dice. */
function idiomaPreferido(acceptLanguage: string | null): Idioma | null {
  if (!acceptLanguage) return null
  const idiomas = acceptLanguage
    .split(',')
    .map((parte, orden) => {
      const [etiqueta, ...params] = parte.trim().split(';')
      const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='))
      return { idioma: etiqueta.trim().toLowerCase().split('-')[0], q: q ? Number(q.slice(2)) || 0 : 1, orden }
    })
    .filter(({ idioma, q }) => idioma && idioma !== '*' && q > 0)
    .sort((a, b) => b.q - a.q || a.orden - b.orden)
  if (idiomas.length === 0) return null
  const soportado = idiomas.find(({ idioma }) => idioma === 'es' || idioma === 'gl' || idioma === 'en')
  // Si no habla ninguno de los tres (alemán, francés…), mejor el inglés.
  return (soportado?.idioma as Idioma | undefined) ?? 'en'
}

function destino(path: string, idioma: Idioma): string | null {
  if (idioma === 'gl') return PAGE_PAIRS.find((pair) => pair.es === path)?.gl ?? null
  // El inglés no traduce la web: solo la portada y el equipo tienen equivalente.
  if (idioma === 'en') return path === '/' ? '/en/' : (EN_PAGES.find((page) => page.traduccion && page.es === path)?.en ?? null)
  return null
}

function vieneDeLaWeb(request: NextRequest): boolean {
  const referer = request.headers.get('referer')
  if (!referer) return false
  try {
    return new URL(referer).host === request.nextUrl.host
  } catch {
    return false
  }
}

export function proxy(request: NextRequest) {
  if (request.method !== 'GET' || vieneDeLaWeb(request)) return NextResponse.next()
  if (BOTS.test(request.headers.get('user-agent') ?? '')) return NextResponse.next()

  const idioma = idiomaPreferido(request.headers.get('accept-language'))
  if (!idioma || idioma === 'es') return NextResponse.next()

  const path = request.nextUrl.pathname.endsWith('/') ? request.nextUrl.pathname : `${request.nextUrl.pathname}/`
  const href = destino(path, idioma)
  if (!href) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = href
  const response = NextResponse.redirect(url, 307)
  response.headers.set('Cache-Control', 'private, no-store')
  response.headers.set('Vary', 'Accept-Language, Referer')
  return response
}

// Solo las páginas en castellano con versión en otro idioma (ver PAGE_PAIRS),
// sin las peticiones internas de Next (prefetch y RSC).
export const config = {
  matcher: [
    {
      source: '/((?:agenda|experiencias|nosotros|nosotros/equipo)?/?)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'rsc' },
      ],
    },
  ],
}
