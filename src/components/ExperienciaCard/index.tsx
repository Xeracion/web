import { BandCard } from '@/components/BandCard'
import type { ExperienciaData } from '@/content/experiencias'
import { CATEGORIA_LABELS } from '@/lib/experienciaCategorias'

export function ExperienciaCard({ item }: { item: ExperienciaData }) {
  const external = Boolean(item.enlaceExterno)
  const href = item.enlaceExterno ?? item.enlaceInterno ?? `/experiencias/${item.slug}/`
  const bandLabel = CATEGORIA_LABELS[item.categoria] ?? item.categoria
  const ediciones = item.ediciones ?? []
  const desde = ediciones.length > 0 ? Math.min(...ediciones.map((edicion) => edicion.anio)) : undefined
  const reinforcement =
    ediciones.some((edicion) => edicion.destacada) && desde
      ? `${ediciones.length} edicion${ediciones.length === 1 ? '' : 'es'} desde ${desde}`
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
      ctaLabel="Quiero saber más"
    />
  )
}
