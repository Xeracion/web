import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LivePreview } from '@/components/LivePreview'
import { SkipLink } from '@/components/SkipLink'
import { getSiteSettings } from '@/sanity/lib/queries'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings()

  return (
    <div className="site-shell">
      <SkipLink />
      <Header siteName={siteSettings?.title ?? 'Xeración'} />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer siteSettings={siteSettings} locale="es" />
      <LivePreview />
    </div>
  )
}
