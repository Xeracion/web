import type { MetadataRoute } from 'next'

import { paisanosEs } from '@/content/paisanos'
import { getExperienciaSlugs } from '@/content/experiencias'
import { historiasEs } from '@/content/historias'
import { getProyectoSlugs } from '@/content/proyectos'
import { languageAlternates } from '@/lib/i18n'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const revalidate = 300

// Las páginas para socios europeos van primero y con más prioridad: son las
// que compiten en búsquedas como «hosting partner Spain».
const PRIORITY: Record<string, number> = {
  '/': 1,
  '/en/': 0.9,
  '/internships/': 0.9,
  '/volunteering/': 0.9,
  '/experiencias/': 0.9,
  '/about/': 0.8,
  '/nosotros/': 0.8,
  '/empresas/': 0.8,
  '/agenda/': 0.8,
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '/', '/en/', '/internships/', '/volunteering/', '/about/', '/team/',
    '/agenda/', '/experiencias/', '/nosotros/', '/nosotros/equipo/', '/empresas/', '/preguntas/',
    '/gl/', '/gl/axenda/', '/gl/experiencias/', '/gl/nos/', '/gl/nos/equipo/',
    '/mentores/', '/mesaredonda/', '/speakfactor/', '/speak-factor-tc/',
    '/proyectos/', ...getProyectoSlugs().map((slug) => `/proyectos/${slug}/`),
    ...getExperienciaSlugs().map((slug) => `/experiencias/${slug}/`),
    '/paisanos/', ...paisanosEs.map((paisano) => `/paisanos/${paisano.slug}/`),
    ...historiasEs.map((historia) => `/${historia.slug}/`),
    '/aviso-legal/', '/privacidad/', '/cookies/',
  ]

  // Sin lastModified: la web no guarda fechas de edición, y una fecha que
  // cambia en cada despliegue hace que Google deje de fiarse del campo.
  return routes.map((route) => {
    const languages = languageAlternates(route)
    return {
      url: `${SITE_URL}${route}`,
      priority: PRIORITY[route] ?? 0.5,
      ...(languages && {
        alternates: {
          languages: Object.fromEntries(Object.entries(languages).map(([lang, path]) => [lang, `${SITE_URL}${path}`])),
        },
      }),
    }
  })
}
