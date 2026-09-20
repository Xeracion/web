'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { ExperienciaCard } from '@/components/ExperienciaCard'
import type { SectionIntro } from '@/content/types'
import { cn } from '@/lib/cn'
import type { ExperienciaData } from '@/sanity/lib/queries'

import styles from './ExperienciasCatalog.module.css'

type ChipKey = 'todas' | 'galicia' | 'europa' | 'finde' | 'semana' | 'meses' | 'gratis'

const CHIPS: { key: ChipKey; label: string }[] = [
  { key: 'todas', label: 'Todas' },
  { key: 'galicia', label: 'En Galicia' },
  { key: 'europa', label: 'Por Europa' },
  { key: 'finde', label: 'Un finde' },
  { key: 'semana', label: 'Una semana' },
  { key: 'meses', label: 'Meses' },
  { key: 'gratis', label: 'Sin coste' },
]

function matchesChip(item: ExperienciaData, chip: ChipKey) {
  switch (chip) {
    case 'todas':
      return true
    case 'galicia':
    case 'europa':
      return item.ambito === chip
    case 'finde':
    case 'semana':
    case 'meses':
      return item.duracion === chip
    case 'gratis':
      return item.costeTipo === 'gratis'
    default:
      return true
  }
}

interface ExperienciasCatalogProps {
  items: ExperienciaData[]
  intro?: SectionIntro
  id?: string
  persistInUrl?: boolean
  showSearch?: boolean
  emptyMessage?: string
}

export function ExperienciasCatalog({
  items,
  intro,
  id,
  persistInUrl = false,
  showSearch = false,
  emptyMessage = 'No hay experiencias con este filtro todavía.',
}: ExperienciasCatalogProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const urlChip = searchParams.get('filtro')
  const urlQuery = searchParams.get('q')

  const [chip, setChip] = useState<ChipKey>(() => {
    if (!persistInUrl) return 'todas'
    return CHIPS.some((c) => c.key === urlChip) ? (urlChip as ChipKey) : 'todas'
  })
  const [query, setQuery] = useState(() => (persistInUrl ? (urlQuery ?? '') : ''))

  useEffect(() => {
    if (!persistInUrl) return
    const params = new URLSearchParams()
    if (chip !== 'todas') params.set('filtro', chip)
    if (query.trim()) params.set('q', query.trim())
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chip, query, persistInUrl])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      if (!matchesChip(item, chip)) return false
      if (!q) return true
      return (item.titulo ?? '').toLowerCase().includes(q) || (item.resumen ?? '').toLowerCase().includes(q)
    })
  }, [items, chip, query])

  if (items.length === 0) return null

  return (
    <Container as="section" id={id} className={styles.section}>
      {(intro?.eyebrow || intro?.heading) && (
        <div className={styles.intro}>
          {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
          {intro?.heading && <h2>{intro.heading}</h2>}
        </div>
      )}

      {showSearch && (
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busca por nombre..."
          className={styles.search}
          aria-label="Buscar experiencias"
        />
      )}

      <div className={styles.chips} role="group" aria-label="Filtrar experiencias">
        {CHIPS.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setChip(c.key)}
            className={cn(styles.chip, chip === c.key && styles.chipActive)}
            aria-pressed={chip === c.key}
          >
            {c.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>{emptyMessage}</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((item) => (
            <ExperienciaCard key={item.slug ?? item.titulo} item={item} />
          ))}
        </div>
      )}
    </Container>
  )
}
