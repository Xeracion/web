import type { Metadata } from 'next'

import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { MobilityProgramCards } from '@/components/MobilityProgramCards'
import { siteSettings } from '@/content/siteSettings'
import { faqsEn, mobilityProgramsEn, pageEnContent, testimonialsEn } from '@/content/volunteering'
import { buildPageMetadata } from '@/lib/metadata'

import { ClosingCta } from './_sections/ClosingCta'
import { ForOrganisations } from './_sections/ForOrganisations'
import { Hero } from './_sections/Hero'
import { HowToApply } from './_sections/HowToApply'
import { LifeInFerrol } from './_sections/LifeInFerrol'
import { PracticalInfo } from './_sections/PracticalInfo'
import { Voices } from './_sections/Voices'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ title: 'Volunteering', description: pageEnContent.heroText, locale: 'en_US' })
}

export default function VolunteeringPage() {
  const page = pageEnContent

  return (
    <>
      <Hero data={page} />
      <ForOrganisations data={page} />
      <MobilityProgramCards
        id="stays"
        intro={page.whatYouCanDoIntro}
        items={mobilityProgramsEn}
        locale="en"
      />
      <LifeInFerrol intro={page.lifeInFerrolIntro} photos={page.lifeInFerrolPhotos} />
      <PracticalInfo
        columns={[page.practicalInfoGettingHere, page.practicalInfoHousing, page.practicalInfoLanguage]}
      />
      <Voices intro={page.voicesIntro} items={testimonialsEn} />
      <HowToApply id="apply" intro={page.howToApplyIntro} steps={page.howToApplySteps} />
      <FaqAccordionSection intro={page.faqIntro} items={faqsEn} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
