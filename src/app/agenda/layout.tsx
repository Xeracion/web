import { Footer } from '@/components/Footer'
import { ResizableNavbar } from '@/components/ResizableNavbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SkipLink } from '@/components/SkipLink'
import { siteSettings } from '@/content/siteSettings'
import { NAV_ITEMS_ES } from '@/lib/nav'

export default function FerrolLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="route-ferrol site-shell">
      <SkipLink />
      <ResizableNavbar
        siteName={siteSettings?.title ?? 'Xeración'}
        items={NAV_ITEMS_ES}
        activeRoute="ferrol"
        locale="es"
        altLangHref="/en/agenda/"
      />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer siteSettings={siteSettings} locale="es" />
      <ScrollReveal />
    </div>
  )
}
