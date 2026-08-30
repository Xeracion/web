import type { Metadata } from 'next'

import { buildPageMetadata } from '@/lib/metadata'
import { getMentoresPageData, getSiteSettings } from '@/sanity/lib/queries'

import { ClosingCta } from '../ferrol/_sections/ClosingCta'
import { Beneficios } from './_sections/Beneficios'
import { Hero } from './_sections/Hero'
import { Stats } from './_sections/Stats'
import { Testimonios } from './_sections/Testimonios'
import { Why } from './_sections/Why'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getMentoresPageData()
  return buildPageMetadata({ title: 'Mentores', description: page?.heroText })
}

export default async function MentoresPage() {
  const [{ page, testimonials }, siteSettings] = await Promise.all([
    getMentoresPageData(),
    getSiteSettings(),
  ])

  if (!page) return null

  return (
    <>
      <Hero data={page} />
      <Why data={page} />
      <Beneficios data={page} />
      <Stats data={page} />
      <Testimonios intro={page.testimoniosIntro} items={testimonials} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
