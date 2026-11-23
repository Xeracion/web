import { SiteShell } from '@/components/SiteShell'

// Cursos para profesorado en alemán, neerlandés, francés e italiano: landing pages para
// buscadores, sin entrada en el menú. Cabecera y pie en inglés; el contenido
// lleva su propio lang (ver HubView y CourseView).
export default function TeacherTrainingTranslationsLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>
}
