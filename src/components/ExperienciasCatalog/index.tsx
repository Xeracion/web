'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { ExperienciaCard } from '@/components/ExperienciaCard'
import type { SectionIntro } from '@/content/types'
import { CATALOG_GROUPS, groupForExperiencia } from '@/lib/experienciaCategorias'
import { cn } from '@/lib/cn'
import type { ExperienciaData } from '@/sanity/lib/queries'

import styles from './ExperienciasCatalog.module.css'

// Por debajo de este número de experiencias activas, los chips de filtro se
// sustituyen por las secciones agrupadas fijas (ver CATALOG_GROUPS) — con
// pocas tarjetas, un chip que devuelve una sola tarjeta (o ninguna) se lee
// peor que no filtrar. El día que el catálogo crezca por encima del umbral,
// vuelven los chips solos, sin tocar este componente.
const GROUPED_THRESHOLD = 12

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

function matchesQuery(item: ExperienciaData, q: string) {
  if (!q) return true
  return (item.titulo ?? '').toLowerCase().includes(q) || (item.resumen ?? '').toLowerCase().includes(q)
}

interface ExperienciasCatalogProps {
  items: ExperienciaData[]
  intro?: SectionIntro
  id?: string
  persistInUrl?: boolean
  showSearch?: boolean
  emptyMessage?: string
  /** Fuerza la vista agrupada aunque haya más experiencias que GROUPED_THRESHOLD (la home siempre va agrupada, nunca con chips). */
  forceGrouped?: boolean
}

export function ExperienciasCatalog({
  items,
  intro,
  id,
  persistInUrl = false,
  showSearch = false,
  emptyMessage = 'No hay experiencias con este filtro todavía.',
  forceGrouped = false,
}: ExperienciasCatalogProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const grouped = forceGrouped || items.length <= GROUPED_THRESHOLD

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
    if (!grouped && chip !== 'todas') params.set('filtro', chip)
    if (query.trim()) params.set('q', query.trim())
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chip, query, persistInUrl, grouped])

  const searched = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => matchesQuery(item, q))
  }, [items, query])

  const filtered = useMemo(
    () => (grouped ? searched : searched.filter((item) => matchesChip(item, chip))),
    [searched, grouped, chip],
  )

  const groups = useMemo(() => {
    if (!grouped) return []
    return CATALOG_GROUPS.map((g) => ({
      ...g,
      items: searched.filter((item) => groupForExperiencia(item) === g.key),
    })).filter((g) => g.items.length > 0)
  }, [searched, grouped])

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

      {!grouped && (
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
      )}

      {grouped ? (
        groups.length === 0 ? (
          <p className={styles.empty}>{emptyMessage}</p>
        ) : (
          <div className={styles.groups}>
            {groups.map((g) => (
              <div key={g.key} className={styles.group}>
                <h3 className={styles.groupHeading}>{g.label}</h3>
                <div className={styles.grid}>
                  {g.items.map((item) => (
                    <ExperienciaCard key={item.slug ?? item.titulo} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      ) : filtered.length === 0 ? (
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
