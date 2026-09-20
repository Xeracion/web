import type { MetadataRoute } from 'next'

import { getExperienciaSlugs } from '@/sanity/lib/queries'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['/', '/agenda/', '/experiencias/', '/nosotros/', '/mentores/']

  const experienciaSlugs = await getExperienciaSlugs()
  const experienciaRoutes = experienciaSlugs.map((slug) => `/experiencias/${slug}/`)

  return [...routes, ...experienciaRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))
}
