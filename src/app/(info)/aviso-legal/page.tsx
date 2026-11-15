import type { Metadata } from 'next'

import { LegalPageView } from '@/components/LegalPageView'
import { avisoLegal } from '@/content/legal'
import { buildPageMetadata } from '@/lib/metadata'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: avisoLegal.title, description: avisoLegal.intro, path: '/aviso-legal/' })
}

export default function AvisoLegalPage() {
  return <LegalPageView page={avisoLegal} />
}
