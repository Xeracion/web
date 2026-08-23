import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { PageFerrolData, SiteSettings } from '@/sanity/lib/queries'

import styles from './HowToArrive.module.css'

interface HowToArriveProps {
  data: PageFerrolData
  siteSettings: SiteSettings | null
}

export function HowToArrive({ data, siteSettings }: HowToArriveProps) {
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const emailHref = siteSettings?.email ? `mailto:${siteSettings.email}` : undefined

  return (
    <Container as="section" id="visitanos" className={styles.section}>
      {data.arrivalMapEmbedUrl ? (
        <div className={styles.map}>
          <iframe
            src={data.arrivalMapEmbedUrl}
            title={`Mapa · ${data.arrivalHeading ?? 'Ferrol'}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        <PhotoPlaceholder
          variant="ferrol"
          label={`mapa · ${data.arrivalHeading ?? 'Ferrol'}`}
          aspectRatio="4 / 3"
        />
      )}
      <div>
        <h3>{data.arrivalHeading}</h3>
        {data.arrivalAddressText && <p className={styles.text}>{data.arrivalAddressText}</p>}
        {data.arrivalTransportText && (
          <>
            <p className={styles.label}>Cómo venir</p>
            <p className={styles.text}>{data.arrivalTransportText}</p>
          </>
        )}
        {(whatsappHref || emailHref) && (
          <>
            <p className={styles.label}>Contacto</p>
            <div className={styles.contact}>
              {whatsappHref && (
                <ButtonLink accent href={whatsappHref}>
                  WhatsApp
                </ButtonLink>
              )}
              {emailHref && (
                <ButtonLink accent href={emailHref}>
                  {siteSettings?.email}
                </ButtonLink>
              )}
            </div>
          </>
        )}
      </div>
    </Container>
  )
}
