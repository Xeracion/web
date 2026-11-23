// Vistas compartidas de los cursos para profesorado: el índice y la ficha de
// cada curso, en cualquiera de sus idiomas (en, de, nl, fr, it). Las rutas solo
// eligen el contenido; aquí está la maqueta, los metadatos y el schema.
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
import {
  coursePath,
  getCourse,
  teacherTrainingAlternates,
  type TeacherCourse,
  type TeacherTrainingContent,
} from '@/content/teacherTraining'
import { buildPageMetadata } from '@/lib/metadata'
import { absoluteUrl, courseNode, faqNode, pageGraph } from '@/lib/schema'

import styles from '../../en.module.css'
import local from './teacher.module.css'

const EMAIL = 'info@xeracion.org'
const INSTRUCTOR = 'Fran Sequeiro'

function mailto(subject: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
}

function courseMeta(content: TeacherTrainingContent, course: TeacherCourse) {
  return `${content.ui.days(course.days)} · ${course.fee} € · ${course.shortDates}`
}

export function hubMetadata(content: TeacherTrainingContent): Metadata {
  return buildPageMetadata({
    title: content.hub.metaTitle,
    description: content.hub.metaDescription,
    locale: content.ogLocale,
    path: content.basePath,
    languages: teacherTrainingAlternates(),
  })
}

export function courseParams(content: TeacherTrainingContent) {
  return content.courses.map((course) => ({ slug: course.slug }))
}

export function courseMetadata(content: TeacherTrainingContent, slug: string): Metadata {
  const course = getCourse(content, slug)
  if (!course) return {}
  return buildPageMetadata({
    title: course.metaTitle,
    description: course.metaDescription,
    locale: content.ogLocale,
    path: coursePath(content, course),
    languages: teacherTrainingAlternates(course.id),
  })
}

function CourseCards({ content, courses, withLink }: { content: TeacherTrainingContent; courses: TeacherCourse[]; withLink?: boolean }) {
  return (
    <ul className={styles.cards}>
      {courses.map((course) => (
        <li key={course.slug}>
          <Link href={coursePath(content, course)} className={`${styles.card} ${local.courseCard}`}>
            <span className={local.courseMeta}>{courseMeta(content, course)}</span>
            <h3 className={styles.cardTitle}>{course.name}</h3>
            <p className={styles.cardText}>{course.summary}</p>
            {withLink && <span className={styles.cardLink}>{content.ui.seeProgrammeArrow}</span>}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function HubView({ content }: { content: TeacherTrainingContent }) {
  const page = content.hub
  const path = content.basePath
  const cta = mailto(content.ui.emailSubjectHub)

  return (
    <div lang={content.lang} className={local.root}>
      <JsonLd
        data={pageGraph({
          path,
          name: page.metaTitle,
          description: page.metaDescription,
          locale: content.lang,
          breadcrumbs: [[content.ui.breadcrumb, path]],
          extra: [
            {
              '@type': 'ItemList',
              '@id': `${absoluteUrl(path)}#courses`,
              itemListElement: content.courses.map((course, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: absoluteUrl(coursePath(content, course)),
                name: course.name,
              })),
            },
            faqNode(path, page.faqs),
          ],
        })}
      />
      <HeroSplit
        heading={page.heroHeading}
        text={page.heroText}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageLabel={`${content.ui.photo} · Ferrol`}
        imageVariant="hero"
        below={
          <div className={styles.heroActions}>
            <ButtonPrimary href={cta}>{page.ctaLabel}</ButtonPrimary>
            <ButtonSecondary href="#courses">{page.ctaDetailsLabel}</ButtonSecondary>
          </div>
        }
      />

      <Container as="section" className={styles.section} aria-labelledby="courses-heading" id="courses">
        <div className={styles.sectionHead}>
          <h2 id="courses-heading">{page.coursesHeading}</h2>
          <p className={styles.sectionText}>{page.coursesText}</p>
        </div>
        <CourseCards content={content} courses={content.courses} withLink />
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
        <ButtonPrimary href={cta}>{page.ctaLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </div>
  )
}

export function CourseView({ content, slug }: { content: TeacherTrainingContent; slug: string }) {
  const course = getCourse(content, slug)
  if (!course) notFound()

  const { hub, ui } = content
  const path = coursePath(content, course)
  const cta = mailto(`${ui.emailSubjectCourse}: ${course.name}`)
  const others = content.courses.filter((other) => other.slug !== course.slug)
  // Las preguntas del curso y, detrás, las generales: financiación, factura,
  // certificado y, si la hay, la del idioma de la formación.
  const faqs = [...course.faqs, ...[0, 3, 5, 7].flatMap((i) => (hub.faqs[i] ? [hub.faqs[i]] : []))]

  const facts = [
    { label: ui.factDates, value: course.datesLabel },
    { label: ui.factDuration, value: ui.days(course.days) },
    { label: ui.factFee, value: `${course.fee} €` },
    { label: ui.factGroup, value: ui.group(course.groupMin, course.groupMax) },
    { label: ui.factPlace, value: course.place },
  ]

  return (
    <div lang={content.lang} className={local.root}>
      <JsonLd
        data={pageGraph({
          path,
          name: course.metaTitle,
          description: course.metaDescription,
          locale: content.lang,
          breadcrumbs: [
            [ui.breadcrumb, content.basePath],
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
              instructor: INSTRUCTOR,
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
        imageLabel={`${ui.photo} · ${course.place}`}
        imageVariant="hero"
        below={
          <div className={styles.heroActions}>
            <ButtonPrimary href={cta}>{hub.ctaLabel}</ButtonPrimary>
            <ButtonSecondary href="#programme">{ui.seeProgramme}</ButtonSecondary>
          </div>
        }
      />

      <Container as="section" className={styles.section} aria-labelledby="facts">
        <div className={styles.sectionHead}>
          <h2 id="facts">{ui.essentials}</h2>
          <div>
            <p className={local.courseName}>{course.name}</p>
            <p className={styles.sectionText}>
              <span className={local.costTag}>{ui.costTag}</span> {ui.feeSentence(course.fee, course.days)}
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
            <h2 id="who">{ui.whoFor}</h2>
            <ul className={styles.list}>
              {course.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.prose}>{course.requirements}</p>
          </div>
          <div>
            <h2 id="outcomes">{ui.takeHome}</h2>
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
            <h2 id="programme-heading">{ui.dayByDay}</h2>
            <p className={styles.sectionText}>{course.method}</p>
          </div>
          <ol className={local.programme}>
            {course.programme.map((day) => (
              <li key={day.day} className={local.day}>
                <span className={local.dayNumber}>
                  {ui.day} {day.day}
                </span>
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
        <h2 id="included">{ui.feeCovers}</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{ui.included}</h3>
            <p className={styles.cardText}>{course.includes}</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{ui.whoTeaches}</h3>
            <p className={styles.cardText}>{course.trainers}</p>
            <Link href="/team/" className={styles.cardLink}>
              {hub.trainersLinkLabel} →
            </Link>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{ui.addShadowing}</h3>
            <p className={styles.cardText}>{hub.shadowingText}</p>
          </div>
        </div>
      </Container>

      <FaqAccordionSection intro={{ heading: ui.beforeBook }} items={faqs} />

      <Container as="section" className={styles.section} aria-labelledby="more">
        <h2 id="more">{ui.otherCourses}</h2>
        <CourseCards content={content} courses={others} />
        <Link href={content.basePath} className={styles.textLink}>
          {ui.howItWorks}
        </Link>
      </Container>

      <ClosingCtaSection heading={hub.closingHeading} text={hub.closingText}>
        <ButtonPrimary href={cta}>{hub.ctaLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </div>
  )
}
