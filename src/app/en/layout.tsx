import { Footer } from '@/components/Footer'
import { LivePreview } from '@/components/LivePreview'
import { ResizableNavbar } from '@/components/ResizableNavbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SkipLink } from '@/components/SkipLink'
import { NAV_ITEMS_EN } from '@/lib/nav'
import { getSiteSettings } from '@/sanity/lib/queries'

export default async function EnHomeLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings()

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
      <LivePreview />
      <ScrollReveal />
    </div>
  )
}
