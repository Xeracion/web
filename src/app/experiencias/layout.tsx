import { Footer } from '@/components/Footer'
import { LivePreview } from '@/components/LivePreview'
import { ResizableNavbar } from '@/components/ResizableNavbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SkipLink } from '@/components/SkipLink'
import { siteSettings } from '@/content/siteSettings'
import { NAV_ITEMS_ES } from '@/lib/nav'

export default function ExperienciasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="route-irse site-shell">
      <SkipLink />
      <ResizableNavbar
        siteName={siteSettings?.title ?? 'Xeración'}
        items={NAV_ITEMS_ES}
        activeRoute="experiencias"
        locale="es"
        altLangHref="/en/"
      />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer siteSettings={siteSettings} locale="es" />
      <LivePreview />
      <ScrollReveal />
    </div>
  )
}
