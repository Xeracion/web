import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LivePreview } from '@/components/LivePreview'
import { SkipLink } from '@/components/SkipLink'
import { getSiteSettings } from '@/sanity/lib/queries'

export default async function EnLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings()

  return (
    <div className="route-en site-shell">
      <SkipLink label="Skip to main content" />
      <Header siteName={siteSettings?.title ?? 'Xeración'} activeRoute="en" />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer siteSettings={siteSettings} locale="en" />
      <LivePreview />
    </div>
  )
}
