import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Prose } from '@/components/Prose'
import type { SectionIntro, TimelineMilestone } from '@/content/types'

import styles from './Historia.module.css'

interface HistoriaData {
  historiaIntro?: SectionIntro
  historiaParagraphs?: string | string[]
  timeline?: TimelineMilestone[]
}

export function Historia({ data }: { data: HistoriaData }) {
  const paragraphs = data.historiaParagraphs ?? []
  const timeline = data.timeline ?? []

  if ((Array.isArray(paragraphs) ? paragraphs.length === 0 : !paragraphs) && timeline.length === 0)
    return null

  return (
    <Container as="section" className={styles.section}>
      {data.historiaIntro?.eyebrow && <Eyebrow accent>{data.historiaIntro.eyebrow}</Eyebrow>}
      {data.historiaIntro?.heading && <h2>{data.historiaIntro.heading}</h2>}
      <div className={styles.grid}>
        <div className={styles.text}>
          <Prose value={data.historiaParagraphs} paragraphSpacing={false} />
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
