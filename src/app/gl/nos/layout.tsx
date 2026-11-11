import { SiteShell } from '@/components/SiteShell'

export default function NosLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="gl" activeRoute="nosotros">
      {children}
    </SiteShell>
  )
}
