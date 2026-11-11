import type { MetadataRoute } from 'next'

import { paisanosEs } from '@/content/paisanos'
import { getExperienciaSlugs } from '@/content/experiencias'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['/', '/agenda/', '/experiencias/', '/nosotros/', '/gl/', '/gl/axenda/', '/gl/experiencias/', '/gl/nos/', '/nosotros/equipo/', '/mentores/', '/preguntas/', '/empresas/', '/mesaredonda/', '/speakfactor/', '/speak-factor-tc/', '/paisanos/', ...paisanosEs.map((paisano) => `/paisanos/${paisano.slug}/`)]

  const experienciaSlugs = getExperienciaSlugs()
  const experienciaRoutes = experienciaSlugs.map((slug) => `/experiencias/${slug}/`)

  return [...routes, ...experienciaRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))
}
