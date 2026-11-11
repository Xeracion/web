import { ButtonLink } from '@/components/ButtonLink'
import { ButtonPrimary } from '@/components/ButtonPrimary'
import { catalogEmptyGl } from '@/content/gl/home'
import { catalogEmptyEs } from '@/content/home'
import { siteSettings } from '@/content/siteSettings'
import type { Locale } from '@/lib/i18n'
import { localizeHref } from '@/lib/i18n'

import styles from './CatalogEmptyState.module.css'

// Lo que se ve en lugar del catálogo cuando no hay ninguna experiencia
// activa en src/content/experiencias.ts: la home y /experiencias/ no
// pueden quedarse nunca con un hueco en blanco.
export function CatalogEmptyState({ locale = 'es' }: { locale?: Locale }) {
  const copy = locale === 'gl' ? catalogEmptyGl : catalogEmptyEs
  const whatsappHref = siteSettings.whatsapp
    ? `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent(copy.whatsappMessage)}`
    : undefined

  return (
    <div className={styles.box}>
      <p className={styles.title}>{copy.title}</p>
      <p className={styles.text}>{copy.text}</p>
      <div className={styles.actions}>
        {whatsappHref && (
          <ButtonPrimary href={whatsappHref} target="_blank" rel="noopener noreferrer">
            {copy.whatsappLabel}
          </ButtonPrimary>
        )}
        <ButtonLink href={localizeHref('/agenda/', locale)}>{copy.agendaLabel}</ButtonLink>
      </div>
    </div>
  )
}
