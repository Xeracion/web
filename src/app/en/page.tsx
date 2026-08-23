import type { Metadata } from 'next'

import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { MobilityProgramCards } from '@/components/MobilityProgramCards'
import { buildPageMetadata } from '@/lib/metadata'
import { getEnPageData, getSiteSettings } from '@/sanity/lib/queries'

import { ClosingCta } from './_sections/ClosingCta'
import { Hero } from './_sections/Hero'
import { HowToApply } from './_sections/HowToApply'
import { LifeInFerrol } from './_sections/LifeInFerrol'
import { PracticalInfo } from './_sections/PracticalInfo'
import { Voices } from './_sections/Voices'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getEnPageData()
  return buildPageMetadata({ title: 'English', description: page?.heroText, locale: 'en_US' })
}

export default async function EnPage() {
  const [{ page, mobilityPrograms, testimonials, faqs }, siteSettings] = await Promise.all([
    getEnPageData(),
    getSiteSettings(),
  ])

  if (!page) return null

  return (
    <>
      <Hero data={page} />
      <MobilityProgramCards
        id="stays"
        intro={page.whatYouCanDoIntro}
        items={mobilityPrograms}
        locale="en"
      />
      <LifeInFerrol intro={page.lifeInFerrolIntro} photos={page.lifeInFerrolPhotos ?? []} />
      <PracticalInfo
        columns={[page.practicalInfoGettingHere, page.practicalInfoHousing, page.practicalInfoLanguage]}
      />
      <Voices intro={page.voicesIntro} items={testimonials} />
      <HowToApply id="apply" intro={page.howToApplyIntro} steps={page.howToApplySteps ?? []} />
      <FaqAccordionSection intro={page.faqIntro} items={faqs} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
