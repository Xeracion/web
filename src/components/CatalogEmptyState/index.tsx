import { ButtonLink } from '@/components/ButtonLink'
import { ButtonPrimary } from '@/components/ButtonPrimary'
import { catalogEmptyEs } from '@/content/home'
import { siteSettings } from '@/content/siteSettings'

import styles from './CatalogEmptyState.module.css'

// Lo que se ve en lugar del catálogo cuando no hay ninguna experiencia
// publicada en Sanity (o Sanity no responde): la home y /experiencias/ no
// pueden quedarse nunca con un hueco en blanco.
export function CatalogEmptyState() {
  const whatsappHref = siteSettings.whatsapp
    ? `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent(catalogEmptyEs.whatsappMessage)}`
    : undefined

  return (
    <div className={styles.box}>
      <p className={styles.title}>{catalogEmptyEs.title}</p>
      <p className={styles.text}>{catalogEmptyEs.text}</p>
      <div className={styles.actions}>
        {whatsappHref && (
          <ButtonPrimary href={whatsappHref} target="_blank" rel="noopener noreferrer">
            {catalogEmptyEs.whatsappLabel}
          </ButtonPrimary>
        )}
        <ButtonLink href="/agenda/">{catalogEmptyEs.agendaLabel}</ButtonLink>
      </div>
    </div>
  )
}
