import type { Metadata } from 'next'

import { LegalPageView } from '@/components/LegalPageView'
import { cookies } from '@/content/legal'
import { buildPageMetadata } from '@/lib/metadata'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: cookies.title, description: cookies.intro, path: '/cookies/' })
}

export default function CookiesPage() {
  return <LegalPageView page={cookies} />
}
