import { SiteShell } from '@/components/SiteShell'

export default function AboutEnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="en" activeRoute="about">
      {children}
    </SiteShell>
  )
}
