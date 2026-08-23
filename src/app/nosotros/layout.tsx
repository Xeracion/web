import { Footer } from '@/components/Footer'
import { LivePreview } from '@/components/LivePreview'
import { ResizableNavbar } from '@/components/ResizableNavbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SkipLink } from '@/components/SkipLink'
import { NAV_ITEMS } from '@/lib/nav'
import { getSiteSettings } from '@/sanity/lib/queries'

export default async function NosotrosLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings()

  return (
    <div className="site-shell">
      <SkipLink />
      <ResizableNavbar siteName={siteSettings?.title ?? 'Xeración'} items={NAV_ITEMS} />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer siteSettings={siteSettings} locale="es" />
      <LivePreview />
      <ScrollReveal />
    </div>
  )
}
