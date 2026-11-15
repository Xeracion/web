import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { PageHeader } from '@/components/PageHeader'
import { pagePreguntasEs, preguntasGroupsEs } from '@/content/preguntas'
import { siteSettings } from '@/content/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Preguntas frecuentes', description: pagePreguntasEs.intro })
}

export default function PreguntasPage() {
  const page = pagePreguntasEs

  return (
    <>
      <PageHeader heading={page.heading} text={page.intro} />
      {preguntasGroupsEs.map((group) => (
        <div key={group.intro.heading}>
          <FaqAccordionSection intro={group.intro} items={group.items} />
          {group.testimonial ? (
            <Container>
              <figure className={styles.quote}>
                <blockquote className={styles.quoteText}>{group.testimonial.quote}</blockquote>
                <figcaption className={styles.quoteName}>
                  {group.testimonial.name}
                  {group.testimonial.originCity ? ` · ${group.testimonial.originCity}` : ''}
                </figcaption>
              </figure>
            </Container>
          ) : null}
        </div>
      ))}
      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href="/experiencias/">{page.closingCtaLabel}</ButtonPrimary>
        <ButtonSecondary href={`https://wa.me/${siteSettings.whatsapp}`}>{page.closingWhatsappLabel}</ButtonSecondary>
      </ClosingCtaSection>
    </>
  )
}
