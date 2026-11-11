import { SiteShell } from '@/components/SiteShell'

export default function AxendaLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="gl" activeRoute="ferrol" routeClass="route-ferrol">
      {children}
    </SiteShell>
  )
}
