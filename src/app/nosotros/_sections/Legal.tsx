import Image from 'next/image'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { urlFor } from '@/sanity/lib/image'
import type { PageNosotrosData } from '@/sanity/lib/queries'

import styles from './Legal.module.css'

const LABELS = {
  es: { eyebrow: 'Datos legales', oid: 'OID', pic: 'PIC', memoria: 'Memoria anual →' },
  en: { eyebrow: 'Legal information', oid: 'OID', pic: 'PIC', memoria: 'Annual report →' },
}

export function Legal({ data, locale = 'es' }: { data: PageNosotrosData; locale?: 'es' | 'en' }) {
  const hasLegalData =
    data.legalName || data.legalCif || data.legalAddress || data.legalOid || data.legalPic
  const accreditations = data.accreditations ?? []
  if (!hasLegalData && accreditations.length === 0 && !data.memoriaAnualUrl) return null

  const labels = LABELS[locale]

  return (
    <Container as="section" className={styles.section}>
      <Eyebrow accent>{labels.eyebrow}</Eyebrow>
      <div className={styles.grid}>
        <dl className={styles.facts}>
          {data.legalName && (
            <div>
              <dt>{locale === 'en' ? 'Legal name' : 'Nombre legal'}</dt>
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
              <dt>{locale === 'en' ? 'Registered address' : 'Domicilio social'}</dt>
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
                {item.logo ? (
                  <Image
                    src={urlFor(item.logo).url()}
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
