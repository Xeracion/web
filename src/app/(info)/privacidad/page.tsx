import type { Metadata } from 'next'

import { LegalPageView } from '@/components/LegalPageView'
import { privacidad } from '@/content/legal'
import { buildPageMetadata } from '@/lib/metadata'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: privacidad.title, description: privacidad.intro, path: '/privacidad/' })
}

export default function PrivacidadPage() {
  return <LegalPageView page={privacidad} />
}
