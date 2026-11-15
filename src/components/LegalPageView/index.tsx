import Link from 'next/link'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Prose } from '@/components/Prose'
import { LEGAL_PAGES, LEGAL_UPDATED, type LegalPage } from '@/content/legal'

import styles from './LegalPageView.module.css'

/** Aviso legal, privacidad y cookies: cabecera, apartados y enlaces entre ellas. */
export function LegalPageView({ page }: { page: LegalPage }) {
  return (
    <>
      <PageHeader heading={page.heading} text={page.intro} />
      <Container as="article">
        <div className={styles.body}>
        {page.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            <Prose value={section.paragraphs} className={styles.paragraph} />
          </section>
        ))}
        <p className={styles.updated}>{LEGAL_UPDATED}</p>
        <nav aria-label="Textos legales" className={styles.nav}>
          {LEGAL_PAGES.filter((other) => other.slug !== page.slug).map((other) => (
            <Link key={other.slug} href={`/${other.slug}/`}>
              {other.title} <span className="xr-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
        </div>
      </Container>
    </>
  )
}
