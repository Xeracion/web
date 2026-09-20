import { BandCard } from '@/components/BandCard'
import { CATEGORIA_LABELS } from '@/lib/experienciaCategorias'
import type { ExperienciaData } from '@/sanity/lib/queries'

export function ExperienciaCard({ item }: { item: ExperienciaData }) {
  const external = Boolean(item.enlaceExterno)
  const href = external ? (item.enlaceExterno as string) : `/experiencias/${item.slug ?? ''}/`
  const bandLabel = item.categoria ? CATEGORIA_LABELS[item.categoria] ?? item.categoria : ''
  const reinforcement =
    item.tieneEdicionesDestacadas && item.edicionesCount
      ? `${item.edicionesCount} edicion${item.edicionesCount === 1 ? '' : 'es'}${item.edicionesDesde ? ` desde ${item.edicionesDesde}` : ''}`
      : undefined

  return (
    <BandCard
      href={href}
      external={external}
      bandColor={item.colorBanda || 'var(--color-accent-grad-1)'}
      bandLabel={bandLabel}
      meta={item.lugar}
      title={item.titulo}
      text={item.resumen}
      reinforcement={reinforcement}
      priceLabel={item.costeEtiqueta}
      priceTone={item.costeTipo === 'pago' ? 'neutral' : 'positive'}
      ctaLabel="Ver plazas"
    />
  )
}
