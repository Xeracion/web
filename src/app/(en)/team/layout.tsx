import { SiteShell } from '@/components/SiteShell'

export default function TeamEnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="en" activeRoute="about">
      {children}
    </SiteShell>
  )
}
