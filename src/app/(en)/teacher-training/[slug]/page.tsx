import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { HeroSplit } from '@/components/HeroSplit'
import { JsonLd } from '@/components/JsonLd'
import { getTeacherCourse, pageTeacherTrainingEn, preRegisterHref, teacherCourses } from '@/content/en/teacherTraining'
import { buildPageMetadata } from '@/lib/metadata'
import { courseNode, faqNode, pageGraph } from '@/lib/schema'

import styles from '../../en.module.css'
import local from '../teacher.module.css'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return teacherCourses.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const course = getTeacherCourse((await params).slug)
  if (!course) return {}
  return buildPageMetadata({
    title: course.metaTitle,
    description: course.metaDescription,
    locale: 'en_GB',
    path: `/teacher-training/${course.slug}/`,
  })
}

export default async function TeacherCoursePage({ params }: PageProps) {
  const course = getTeacherCourse((await params).slug)
  if (!course) notFound()

  const path = `/teacher-training/${course.slug}/`
  const common = pageTeacherTrainingEn
  const others = teacherCourses.filter((other) => other.slug !== course.slug)
  // Las preguntas del curso y, detrás, las generales de financiación y certificado.
  const faqs = [...course.faqs, ...common.faqs.slice(0, 1), ...common.faqs.slice(3, 4), ...common.faqs.slice(5, 6)]

  const facts = [
    { label: 'Dates', value: course.datesLabel },
    { label: 'Duration', value: `${course.days} days` },
    { label: 'Course fee', value: `${course.fee} €` },
    { label: 'Group', value: `${course.groupMin} to ${course.groupMax} people` },
    { label: 'Place', value: course.place },
  ]

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          name: course.metaTitle,
          description: course.metaDescription,
          locale: 'en',
          breadcrumbs: [
            ['Teacher training', '/teacher-training/'],
            [course.name, path],
          ],
          extra: [
            courseNode({
              path,
              name: course.name,
              description: course.heroText,
              audience: course.audience,
              outcomes: course.outcomes,
              fee: course.fee,
              days: course.days,
              startDate: course.startDate,
              endDate: course.endDate,
              place: course.place,
              instructor: 'Fran Sequeiro',
            }),
            faqNode(path, faqs),
          ],
        })}
      />
      <HeroSplit
        heading={course.heroHeading}
        text={course.heroText}
        image={course.heroImage}
        imageAlt={course.heroImageAlt}
        imageLabel={`photo · ${course.place}`}
        imageVariant="hero"
        below={
          <div className={styles.heroActions}>
            <ButtonPrimary href={preRegisterHref(course)}>{common.ctaLabel}</ButtonPrimary>
            <ButtonSecondary href="#programme">See the programme</ButtonSecondary>
          </div>
        }
      />

      <Container as="section" className={styles.section} aria-labelledby="facts">
        <div className={styles.sectionHead}>
          <h2 id="facts">The essentials.</h2>
          <div>
            <p className={local.courseName}>{course.name}</p>
            <p className={styles.sectionText}>
              <span className={local.costTag}>Fully fundable with Erasmus+ KA1</span> {course.fee} € course fee for{' '}
              {course.days} days, the exact amount the grant pays.
            </p>
          </div>
        </div>
        <dl className={styles.details}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.detail}>
              <dt className={styles.detailLabel}>{fact.label}</dt>
              <dd className={local.detailValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container as="section" className={styles.section} aria-labelledby="who">
        <div className={styles.twoCols}>
          <div>
            <h2 id="who">Who it is for.</h2>
            <ul className={styles.list}>
              {course.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.prose}>{course.requirements}</p>
          </div>
          <div>
            <h2 id="outcomes">What you take home.</h2>
            <ul className={styles.list}>
              {course.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <section className={styles.band} aria-labelledby="programme-heading" id="programme">
        <Container>
          <div className={styles.sectionHead}>
            <h2 id="programme-heading">Day by day.</h2>
            <p className={styles.sectionText}>{course.method}</p>
          </div>
          <ol className={local.programme}>
            {course.programme.map((day) => (
              <li key={day.day} className={local.day}>
                <span className={local.dayNumber}>Day {day.day}</span>
                <div className={local.dayBody}>
                  <p className={local.dayPlace}>
                    <span className={local.dayLabel}>{course.programmeColumns[0]}</span> {day.place}
                  </p>
                  <p>
                    <span className={local.dayLabel}>{course.programmeColumns[1]}</span> {day.focus}
                  </p>
                  <p>
                    <span className={local.dayLabel}>{course.programmeColumns[2]}</span> {day.then}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          {course.programmeNote && <p className={local.note}>{course.programmeNote}</p>}
        </Container>
      </section>

      <Container as="section" className={styles.section} aria-labelledby="included">
        <h2 id="included">What the fee covers.</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Included</h3>
            <p className={styles.cardText}>{course.includes}</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Who teaches</h3>
            <p className={styles.cardText}>{course.trainers}</p>
            <Link href="/team/" className={styles.cardLink}>
              {common.trainersLinkLabel} →
            </Link>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Add job shadowing</h3>
            <p className={styles.cardText}>{common.shadowingText}</p>
          </div>
        </div>
      </Container>

      <FaqAccordionSection intro={{ heading: 'Before you book.' }} items={faqs} />

      <Container as="section" className={styles.section} aria-labelledby="more">
        <h2 id="more">Other courses.</h2>
        <ul className={styles.cards}>
          {others.map((other) => (
            <li key={other.slug}>
              <Link href={`/teacher-training/${other.slug}/`} className={`${styles.card} ${local.courseCard}`}>
                <span className={local.courseMeta}>
                  {other.days} days · {other.fee} € · {other.shortDates}
                </span>
                <h3 className={styles.cardTitle}>{other.name}</h3>
                <p className={styles.cardText}>{other.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/teacher-training/" className={styles.textLink}>
          How funding and booking work →
        </Link>
      </Container>

      <ClosingCtaSection heading={common.closingHeading} text={common.closingText}>
        <ButtonPrimary href={preRegisterHref(course)}>{common.ctaLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </>
  )
}
