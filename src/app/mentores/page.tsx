import type { Metadata } from 'next'

import { siteSettings } from '@/content/siteSettings'
import { mentoresTestimonials, pageMentoresContent } from '@/content/mentores'
import { buildPageMetadata } from '@/lib/metadata'

import { ClosingCta } from '../agenda/_sections/ClosingCta'
import { Beneficios } from './_sections/Beneficios'
import { Hero } from './_sections/Hero'
import { Stats } from './_sections/Stats'
import { Testimonios } from './_sections/Testimonios'
import { Why } from './_sections/Why'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ title: 'Mentores', description: pageMentoresContent.heroText })
}

export default function MentoresPage() {
  const page = pageMentoresContent

  return (
    <>
      <Hero data={page} />
      <Why data={page} />
      <Beneficios data={page} />
      <Stats data={page} />
      <Testimonios intro={page.testimoniosIntro} items={mentoresTestimonials} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
