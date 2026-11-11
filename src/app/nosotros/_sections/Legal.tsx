import Image from 'next/image'

import { Container } from '@/components/Container'
import type { Partner } from '@/content/types'

import styles from './Legal.module.css'

const LABELS = {
  es: { heading: 'Datos legales', name: 'Nombre legal', address: 'Domicilio social', oid: 'OID', pic: 'PIC', memoria: 'Memoria anual →' },
  gl: { heading: 'Datos legais', name: 'Nome legal', address: 'Domicilio social', oid: 'OID', pic: 'PIC', memoria: 'Memoria anual →' },
}

interface LegalData {
  legalName?: string
  legalCif?: string
  legalAddress?: string
  legalOid?: string
  legalPic?: string
  accreditations?: Partner[]
  memoriaAnualUrl?: string
}

export function Legal({ data, locale = 'es' }: { data: LegalData; locale?: 'es' | 'gl' }) {
  const hasLegalData =
    data.legalName || data.legalCif || data.legalAddress || data.legalOid || data.legalPic
  const accreditations = data.accreditations ?? []
  if (!hasLegalData && accreditations.length === 0 && !data.memoriaAnualUrl) return null

  const labels = LABELS[locale]

  return (
    <Container as="section" className={styles.section}>
      <h2 className={styles.heading}>{labels.heading}</h2>
      <div className={styles.grid}>
        <dl className={styles.facts}>
          {data.legalName && (
            <div>
              <dt>{labels.name}</dt>
              <dd>{data.legalName}</dd>
            </div>
          )}
          {data.legalCif && (
            <div>
              <dt>CIF</dt>
              <dd>{data.legalCif}</dd>
            </div>
          )}
          {data.legalAddress && (
            <div>
              <dt>{labels.address}</dt>
              <dd>{data.legalAddress}</dd>
            </div>
          )}
          {data.legalOid && (
            <div>
              <dt>{labels.oid}</dt>
              <dd>{data.legalOid}</dd>
            </div>
          )}
          {data.legalPic && (
            <div>
              <dt>{labels.pic}</dt>
              <dd>{data.legalPic}</dd>
            </div>
          )}
        </dl>

        {accreditations.length > 0 && (
          <ul className={styles.accreditations}>
            {accreditations.map((item, i) => (
              <li key={i} className={styles.accreditation}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name ?? ''}
                    width={140}
                    height={56}
                    className={styles.accreditationLogo}
                  />
                ) : (
                  item.name
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {data.memoriaAnualUrl && (
        <a href={data.memoriaAnualUrl} target="_blank" rel="noopener noreferrer" className={styles.memoriaLink}>
          {labels.memoria}
        </a>
      )}
    </Container>
  )
}
