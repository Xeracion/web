import type { ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { ResizableNavbar } from '@/components/ResizableNavbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SkipLink } from '@/components/SkipLink'
import { siteSettingsGl } from '@/content/gl/siteSettings'
import { siteSettings } from '@/content/siteSettings'
import { cn } from '@/lib/cn'
import type { Locale } from '@/lib/i18n'
import { NAV_ITEMS, type RouteKey } from '@/lib/nav'

const SKIP_LABEL: Record<Locale, string> = {
  es: 'Saltar al contenido principal',
  gl: 'Saltar ao contido principal',
}

interface SiteShellProps {
  children: ReactNode
  locale?: Locale
  activeRoute?: RouteKey
  /** Clase de acento de la ruta (route-ferrol, route-irse), ver CLAUDE.md punto 5. */
  routeClass?: string
}

// Esqueleto común de página: salto al contenido, menú, contenido y pie. Las
// páginas en gallego marcan su contenedor con lang="gl" (el <html> de la
// raíz es común a toda la web y va en castellano).
export function SiteShell({ children, locale = 'es', activeRoute, routeClass }: SiteShellProps) {
  const settings = locale === 'gl' ? siteSettingsGl : siteSettings

  return (
    <div className={cn(routeClass, 'site-shell')} lang={locale === 'es' ? undefined : locale}>
      <SkipLink label={SKIP_LABEL[locale]} />
      <ResizableNavbar siteName={settings.title} items={NAV_ITEMS[locale]} activeRoute={activeRoute} />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer siteSettings={settings} locale={locale} />
      <ScrollReveal />
    </div>
  )
}
