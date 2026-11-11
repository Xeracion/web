import { SiteShell } from '@/components/SiteShell'

export default function InicioGlLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="gl" activeRoute="home">
      {children}
    </SiteShell>
  )
}
