import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { PageHeader } from '@/components/PageHeader'
import { Prose } from '@/components/Prose'
import { empresasFaqsEs, pageEmpresasEs } from '@/content/empresas'
import { siteSettings } from '@/content/siteSettings'
import { JsonLd } from '@/components/JsonLd'
import { buildPageMetadata } from '@/lib/metadata'
import { faqNode, pageGraph, serviceNode } from '@/lib/schema'

import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: 'Empresas de acogida para prácticas internacionales en Ferrol',
    description: pageEmpresasEs.intro,
    path: '/empresas/',
  })
}

export default function EmpresasPage() {
  const page = pageEmpresasEs

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: '/empresas/',
          name: 'Empresas de acogida para prácticas internacionales en Ferrol',
          description: page.intro,
          breadcrumbs: [['Empresas', '/empresas/']],
          extra: [
            serviceNode({
              path: '/empresas/',
              name: 'Prácticas internacionales en empresas de Ferrol',
              serviceType: 'Entidad de acogida de prácticas Erasmus+ en España',
              description: page.whyText,
              audience: 'Empresas de Ferrol y comarca',
            }),
            faqNode('/empresas/', empresasFaqsEs),
          ],
        })}
      />
      <PageHeader heading={page.heading} text={page.intro} />

      <Container as="section" className={styles.why}>
        <h2>{page.whyIntro.heading}</h2>
        <Prose value={page.whyText} className={styles.whyText} />
      </Container>

      <Container as="section" className={styles.split}>
        <div className={styles.column}>
          <h3>{page.weHandleHeading}</h3>
          <ul className={styles.list}>
            {page.weHandle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>{page.youHandleHeading}</h3>
          <ul className={styles.list}>
            {page.youHandle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>

      <FaqAccordionSection intro={page.faqIntro} items={empresasFaqsEs} />

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href={page.closingCtaHref}>{page.closingCtaLabel}</ButtonPrimary>
        <ButtonSecondary href={`mailto:${siteSettings.email}`}>{page.closingEmailLabel}</ButtonSecondary>
      </ClosingCtaSection>
    </>
  )
}
