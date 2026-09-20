import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { Prose } from '@/components/Prose'
import type { SiteSettings } from '@/content/siteSettings'

import styles from './HowToArrive.module.css'

interface HowToArriveData {
  arrivalMapEmbedUrl?: string
  arrivalHeading?: string
  arrivalAddressText?: string | string[]
  arrivalTransportText?: string | string[]
}

interface HowToArriveProps {
  data: HowToArriveData
  siteSettings: SiteSettings
  locale?: 'es' | 'en'
}

const COPY = {
  es: { map: 'Mapa', placeholder: 'mapa', gettingHere: 'Cómo venir', contact: 'Contacto' },
  en: { map: 'Map', placeholder: 'map', gettingHere: 'Getting here', contact: 'Contact' },
}

export function HowToArrive({ data, siteSettings, locale = 'es' }: HowToArriveProps) {
  const whatsappHref = siteSettings.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const emailHref = siteSettings.email ? `mailto:${siteSettings.email}` : undefined
  const copy = COPY[locale]

  return (
    <Container as="section" id="visitanos" className={styles.section}>
      {data.arrivalMapEmbedUrl ? (
        <div className={styles.map}>
          <iframe
            src={data.arrivalMapEmbedUrl}
            title={`${copy.map} · ${data.arrivalHeading ?? 'Ferrol'}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        <PhotoPlaceholder
          variant="ferrol"
          label={`${copy.placeholder} · ${data.arrivalHeading ?? 'Ferrol'}`}
          aspectRatio="4 / 3"
        />
      )}
      <div>
        <h3>{data.arrivalHeading}</h3>
        <Prose value={data.arrivalAddressText} className={styles.text} />
        {data.arrivalTransportText && (
          <>
            <p className={styles.label}>{copy.gettingHere}</p>
            <Prose value={data.arrivalTransportText} className={styles.text} />
          </>
        )}
        {(whatsappHref || emailHref) && (
          <>
            <p className={styles.label}>{copy.contact}</p>
            <div className={styles.contact}>
              {whatsappHref && (
                <ButtonLink accent href={whatsappHref}>
                  WhatsApp
                </ButtonLink>
              )}
              {emailHref && (
                <ButtonLink accent href={emailHref}>
                  {siteSettings.email}
                </ButtonLink>
              )}
            </div>
          </>
        )}
      </div>
    </Container>
  )
}
