import { Footer } from '@/components/Footer'
import { ResizableNavbar } from '@/components/ResizableNavbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SkipLink } from '@/components/SkipLink'
import { siteSettings } from '@/content/siteSettings'
import { NAV_ITEMS_EN } from '@/lib/nav'

export default function EnHomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <SkipLink label="Skip to main content" />
      <ResizableNavbar
        siteName={siteSettings?.title ?? 'Xeración'}
        items={NAV_ITEMS_EN}
        activeRoute="home"
        locale="en"
        altLangHref="/"
      />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer siteSettings={siteSettings} locale="en" />
      <ScrollReveal />
    </div>
  )
}
