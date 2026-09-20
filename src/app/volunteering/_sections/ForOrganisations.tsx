import { BandCard } from '@/components/BandCard'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { OrgCard, SectionIntro } from '@/content/types'

import styles from './ForOrganisations.module.css'

function Card({ id, bandLabel, card }: { id: string; bandLabel: string; card?: OrgCard }) {
  if (!card?.title) return null

  return (
    <BandCard
      href={card.ctaHref || `#${id}`}
      bandColor="var(--color-accent-grad-1)"
      bandLabel={bandLabel}
      title={card.title}
      text={card.text}
      ctaLabel={card.ctaLabel || 'Get in touch'}
    />
  )
}

interface ForOrganisationsData {
  forOrgsIntro?: SectionIntro
  orgCardVolunteers?: OrgCard
  orgCardVetInterns?: OrgCard
  orgCardHostOurs?: OrgCard
  orgCardPartnerships?: OrgCard
  orgStatsYears?: string
  orgStatsProjects?: string
  orgStatsCountries?: string
  orgStatsOid?: string
  orgStatsPic?: string
  orgProfilePdfUrl?: string
}

export function ForOrganisations({ data }: { data: ForOrganisationsData }) {
  const stats = [
    data.orgStatsYears && { label: 'Years running youth mobility', value: data.orgStatsYears },
    data.orgStatsProjects && { label: 'Projects delivered', value: data.orgStatsProjects },
    data.orgStatsCountries && { label: 'Partner countries', value: data.orgStatsCountries },
    data.orgStatsOid && { label: 'OID', value: data.orgStatsOid },
    data.orgStatsPic && { label: 'PIC', value: data.orgStatsPic },
  ].filter(Boolean) as { label: string; value: string }[]

  const hasCards =
    data.orgCardVolunteers?.title ||
    data.orgCardVetInterns?.title ||
    data.orgCardHostOurs?.title ||
    data.orgCardPartnerships?.title

  if (!hasCards) return null

  return (
    <Container as="section" id="organisations" className={styles.section}>
      {data.forOrgsIntro?.eyebrow && <Eyebrow accent>{data.forOrgsIntro.eyebrow}</Eyebrow>}
      {data.forOrgsIntro?.heading && <h2>{data.forOrgsIntro.heading}</h2>}
      <div className={styles.grid}>
        <Card id="volunteers" bandLabel="ESC volunteers" card={data.orgCardVolunteers} />
        <Card id="vet-interns" bandLabel="VET interns" card={data.orgCardVetInterns} />
        <Card id="host-ours" bandLabel="Host exchange" card={data.orgCardHostOurs} />
        <Card id="partnerships" bandLabel="Partnerships" card={data.orgCardPartnerships} />
      </div>

      {(stats.length > 0 || data.orgProfilePdfUrl) && (
        <div className={styles.statsStrip}>
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
          {data.orgProfilePdfUrl && (
            <a href={data.orgProfilePdfUrl} className={styles.pdfLink} target="_blank" rel="noopener noreferrer">
              Download organisation profile (PDF)
            </a>
          )}
        </div>
      )}
    </Container>
  )
}
