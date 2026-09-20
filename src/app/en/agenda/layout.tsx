import { Footer } from '@/components/Footer'
import { ResizableNavbar } from '@/components/ResizableNavbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SkipLink } from '@/components/SkipLink'
import { siteSettings } from '@/content/siteSettings'
import { NAV_ITEMS_EN } from '@/lib/nav'

export default function EnFerrolLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="route-ferrol site-shell">
      <SkipLink label="Skip to main content" />
      <ResizableNavbar
        siteName={siteSettings?.title ?? 'Xeración'}
        items={NAV_ITEMS_EN}
        activeRoute="ferrol"
        locale="en"
        altLangHref="/agenda/"
      />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer siteSettings={siteSettings} locale="en" />
      <ScrollReveal />
    </div>
  )
}
