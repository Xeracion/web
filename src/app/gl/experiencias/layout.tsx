import { SiteShell } from '@/components/SiteShell'

export default function ExperienciasGlLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="gl" activeRoute="experiencias" routeClass="route-irse">
      {children}
    </SiteShell>
  )
}
