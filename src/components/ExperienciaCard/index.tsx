import { BandCard } from '@/components/BandCard'
import { ExperienciaArt } from '@/components/ExperienciaArt'
import type { ExperienciaData } from '@/content/experiencias'
import type { Locale } from '@/lib/i18n'
import { localizeHref } from '@/lib/i18n'

const COPY = {
  es: { cta: 'Quiero saber más', edition: 'edición', editions: 'ediciones', since: 'desde' },
  gl: { cta: 'Quero saber máis', edition: 'edición', editions: 'edicións', since: 'dende' },
}

export function ExperienciaCard({ item, locale = 'es' }: { item: ExperienciaData; locale?: Locale }) {
  const copy = COPY[locale]
  const external = Boolean(item.enlaceExterno)
  const href = item.enlaceExterno ?? localizeHref(item.enlaceInterno ?? `/experiencias/${item.slug}/`, locale)
  const ediciones = item.ediciones ?? []
  const desde = ediciones.length > 0 ? Math.min(...ediciones.map((edicion) => edicion.anio)) : undefined
  const reinforcement =
    ediciones.some((edicion) => edicion.destacada) && desde
      ? `${ediciones.length} ${ediciones.length === 1 ? copy.edition : copy.editions} ${copy.since} ${desde}`
      : undefined

  return (
    <BandCard
      href={href}
      external={external}
      bandColor={item.colorBanda || 'var(--color-accent-grad-1)'}
      art={<ExperienciaArt categoria={item.categoria} />}
      title={item.titulo}
      text={item.resumen}
      reinforcement={reinforcement}
      priceLabel={item.costeEtiqueta}
      priceTone={item.costeTipo === 'pago' ? 'neutral' : 'positive'}
      ctaLabel={copy.cta}
    />
  )
}
