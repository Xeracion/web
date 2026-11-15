import { SiteShell } from '@/components/SiteShell'

export default function VolunteeringEnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="en" activeRoute="volunteering">
      {children}
    </SiteShell>
  )
}
