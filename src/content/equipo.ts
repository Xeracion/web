import { pageNosotrosEs } from './nosotros'
import type { TeamMember } from './types'

// /nosotros/equipo/ — estructura calcada de anthropic.com/company/leadership:
// cabecera a dos columnas y grupos de personas. Las personas se leen de
// pageNosotrosEs (una sola fuente): para añadir una bio, rellena `bio` (y
// opcionalmente `bioLong`) en teamMembers de nosotros.ts. No inventar bios.
export const pageEquipoEs = {
  heading: 'Las personas detrás de Xeración.',
  intro:
    'Somos un grupo pequeño: una persona coordina el día a día y gente de toda Europa pasa unos meses con nosotros en Ferrol, montando actividades en la Casa da Xuventude. Desde 2013, más de 120 personas de más de 15 países han pasado por este equipo.',
  primaryLabel: 'Quiero saber más de Xeración',
  primaryHref: '/nosotros/',
  secondaryLabel: 'Quiero sumarme al equipo',
  secondaryHref: '/mentores/',
}

export interface EquipoGroup {
  /** Sin título, el grupo sigue al anterior como continuación. */
  heading?: string
  /**
   * 'row': tarjetas horizontales a dos columnas (foto grande + texto).
   * 'cards': igual pero con la foto pequeña, para quien tiene presentación.
   * 'grid': rejilla compacta.
   */
  layout: 'row' | 'cards' | 'grid'
  members: TeamMember[]
}

const [coordinacion, ...equipoActual] = pageNosotrosEs.teamMembers as TeamMember[]
const pasados = pageNosotrosEs.pastVolunteers as TeamMember[]

// El equipo actual va en tarjetas con su cargo y su presentación; quienes ya
// han pasado por aquí, en la rejilla compacta, solo con foto, nombre y bandera
// (pastVolunteers ya está ordenado de más reciente a más antiguo).
export const equipoGroupsEs: EquipoGroup[] = [
  { heading: 'Coordinación', layout: 'row', members: [coordinacion] },
  { heading: 'El equipo ahora mismo', layout: 'row', members: equipoActual },
  {
    heading: 'Han estado con nosotros',
    layout: 'grid',
    members: pasados.map(({ name, country, image }) => ({ name, country, image })),
  },
]
