import { SiteShell } from '@/components/SiteShell'

export default function HomeEnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="en" activeRoute="home">
      {children}
    </SiteShell>
  )
}
