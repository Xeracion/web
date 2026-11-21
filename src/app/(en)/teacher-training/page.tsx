import type { Metadata } from 'next'
import Link from 'next/link'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { HeroSplit } from '@/components/HeroSplit'
import { JsonLd } from '@/components/JsonLd'
import { pageTeacherTrainingEn, preRegisterHref, teacherCourses } from '@/content/en/teacherTraining'
import { buildPageMetadata } from '@/lib/metadata'
import { absoluteUrl, faqNode, pageGraph } from '@/lib/schema'

import styles from '../en.module.css'
import local from './teacher.module.css'

const PATH = '/teacher-training/'

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: pageTeacherTrainingEn.metaTitle,
    description: pageTeacherTrainingEn.metaDescription,
    locale: 'en_GB',
    path: PATH,
  })
}

export default function TeacherTrainingPage() {
  const page = pageTeacherTrainingEn

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: PATH,
          name: page.metaTitle,
          description: page.metaDescription,
          locale: 'en',
          breadcrumbs: [['Teacher training', PATH]],
          extra: [
            {
              '@type': 'ItemList',
              '@id': `${absoluteUrl(PATH)}#courses`,
              itemListElement: teacherCourses.map((course, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: absoluteUrl(`${PATH}${course.slug}/`),
                name: course.name,
              })),
            },
            faqNode(PATH, page.faqs),
          ],
        })}
      />
      <HeroSplit
        heading={page.heroHeading}
        text={page.heroText}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageLabel="photo · training session"
        imageVariant="hero"
        below={
          <div className={styles.heroActions}>
            <ButtonPrimary href={preRegisterHref()}>{page.ctaLabel}</ButtonPrimary>
            <ButtonSecondary href="#courses">{page.ctaDetailsLabel}</ButtonSecondary>
          </div>
        }
      />

      <Container as="section" className={styles.section} aria-labelledby="courses-heading" id="courses">
        <div className={styles.sectionHead}>
          <h2 id="courses-heading">{page.coursesHeading}</h2>
          <p className={styles.sectionText}>{page.coursesText}</p>
        </div>
        <ul className={styles.cards}>
          {teacherCourses.map((course) => (
            <li key={course.slug}>
              <Link href={`${PATH}${course.slug}/`} className={`${styles.card} ${local.courseCard}`}>
                <span className={local.courseMeta}>
                  {course.days} days · {course.fee} € · {course.shortDates}
                </span>
                <h3 className={styles.cardTitle}>{course.name}</h3>
                <p className={styles.cardText}>{course.summary}</p>
                <span className={styles.cardLink}>See the programme →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      <section className={styles.band} aria-labelledby="funding">
        <Container>
          <div className={styles.twoCols}>
            <div>
              <h2 id="funding">{page.fundingHeading}</h2>
              {page.fundingText.map((text) => (
                <p key={text} className={styles.prose}>
                  {text}
                </p>
              ))}
            </div>
            <dl className={styles.facts}>
              {page.fundingFacts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt className={styles.factLabel}>{fact.label}</dt>
                  <dd className={styles.factValue}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <Container as="section" className={styles.section} aria-labelledby="steps">
        <h2 id="steps">{page.stepsHeading}</h2>
        <ol className={local.steps}>
          {page.steps.map((step, i) => (
            <li key={step.title} className={local.step}>
              <span className={local.stepNumber} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>

      <Container as="section" className={styles.section} aria-labelledby="extras">
        <h2 id="extras">{page.extrasHeading}</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{page.shadowingHeading}</h3>
            <p className={styles.cardText}>{page.shadowingText}</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{page.stayHeading}</h3>
            <p className={styles.cardText}>{page.stayText}</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{page.trainersHeading}</h3>
            <p className={styles.cardText}>{page.trainersText}</p>
            <Link href="/team/" className={styles.cardLink}>
              {page.trainersLinkLabel} →
            </Link>
          </div>
        </div>
      </Container>

      <FaqAccordionSection intro={{ heading: page.faqHeading }} items={page.faqs} />

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href={preRegisterHref()}>{page.ctaLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </>
  )
}
