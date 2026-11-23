import { SiteShell } from '@/components/SiteShell'

export default function AlmaSpainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="en" activeRoute="internships">
      {children}
    </SiteShell>
  )
}
