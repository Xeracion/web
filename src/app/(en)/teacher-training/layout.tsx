import { SiteShell } from '@/components/SiteShell'

export default function TeacherTrainingLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteShell locale="en" activeRoute="teacherTraining">
      {children}
    </SiteShell>
  )
}
