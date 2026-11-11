import { pageNosotrosEs } from './nosotros'
import type { TeamMember } from './types'

// /nosotros/equipo/ — estructura calcada de anthropic.com/company/leadership:
// cabecera a dos columnas y grupos de personas. Las personas se leen de
// pageNosotrosEs (una sola fuente): para añadir una bio, rellena `bio` (y
// opcionalmente `bioLong`) en teamMembers de nosotros.ts. No inventar bios.
export const pageEquipoEs = {
  heading: 'Las personas detrás de Xeración.',
  intro:
    'Somos una asociación pequeña: una persona coordina el día a día y un grupo de voluntarios europeos pasa unos meses con nosotros en Ferrol, montando actividades en la Casa da Xuventude. Desde 2013, 75 voluntarios de 15 países han pasado por este equipo.',
  primaryLabel: 'Quiero saber más de Xeración',
  primaryHref: '/nosotros/',
  secondaryLabel: 'Quiero sumarme al equipo',
  secondaryHref: '/mentores/',
}

export interface EquipoGroup {
  heading: string
  /** 'row': tarjetas horizontales a dos columnas (foto + texto). 'grid': rejilla compacta. */
  layout: 'row' | 'grid'
  members: TeamMember[]
}

const [coordinacion, ...voluntariado] = pageNosotrosEs.teamMembers as TeamMember[]

export const equipoGroupsEs: EquipoGroup[] = [
  { heading: 'Coordinación', layout: 'row', members: [coordinacion] },
  { heading: 'Voluntariado europeo, ahora mismo', layout: 'row', members: voluntariado },
  { heading: 'Han estado con nosotros', layout: 'grid', members: pageNosotrosEs.pastVolunteers as TeamMember[] },
]
