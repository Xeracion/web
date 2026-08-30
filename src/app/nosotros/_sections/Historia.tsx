import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { RichText } from '@/components/RichText'
import type { PageNosotrosData } from '@/sanity/lib/queries'

import styles from './Historia.module.css'

export function Historia({ data }: { data: PageNosotrosData }) {
  const paragraphs = data.historiaParagraphs ?? []
  const timeline = data.timeline ?? []

  if (paragraphs.length === 0 && timeline.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.historiaIntro?.eyebrow && <Eyebrow accent>{data.historiaIntro.eyebrow}</Eyebrow>}
      {data.historiaIntro?.heading && <h2>{data.historiaIntro.heading}</h2>}
      <div className={styles.grid}>
        <div className={styles.text}>
          <RichText value={data.historiaParagraphs} paragraphSpacing={false} />
        </div>
        {timeline.length > 0 && (
          <ol className={styles.timeline}>
            {timeline.map((milestone, i) => (
              <li key={i} className={styles.milestone}>
                <span className={styles.year}>{milestone.year}</span>
                <h4 className={styles.milestoneTitle}>{milestone.title}</h4>
                {milestone.description && (
                  <p className={styles.milestoneText}>{milestone.description}</p>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </Container>
  )
}
