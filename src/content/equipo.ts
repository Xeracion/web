import { pageNosotrosEs } from './nosotros'
import type { TeamMember } from './types'

// /nosotros/equipo/ — estructura calcada de anthropic.com/company/leadership:
// cabecera a dos columnas y grupos de personas. Las personas se leen de
// pageNosotrosEs (una sola fuente): para añadir una bio, rellena `bio` (y
// opcionalmente `bioLong`) en teamMembers de nosotros.ts. No inventar bios.
export const pageEquipoEs = {
  heading: 'Las personas detrás de Xeración.',
  intro:
    'Desde 2013, más de 120 personas de más de 15 países han hecho Xeración. Cada año llega gente nueva de toda Europa que se instala en Ferrol, llena de ideas la Casa da Xuventude y las convierte en planes para la gente joven de aquí.',
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

export interface Presentacion {
  bio: string
  bioLong?: string
}

// Las presentaciones originales (en inglés, tal como las escribió cada
// persona) están en nosotros.ts y son las de /en/. Aquí, su traducción.
export const PRESENTACIONES_ES: Record<string, Presentacion> = {
  'Suzan Barendregt': {
    bio: 'Hola, me llamo Suzan. Tengo 22 años y soy de los Países Bajos. […]',
    bioLong: 'Hola, me llamo Suzan. Tengo 22 años y soy de los Países Bajos. Me encanta probar comidas nuevas y explorar la naturaleza, así que estoy muy ilusionada de estar aquí en Ferrol y con muchas ganas de descubrir toda la belleza que ofrece España.',
  },
  'Laetitia Wangler': {
    bio: 'Hola, me llamo Laetitia y soy tu nueva francesa favorita del equipo 😝 […]',
    bioLong: 'Hola, me llamo Laetitia y soy tu nueva francesa favorita del equipo 😝 Hablar, compartir, comer: me encanta descubrir y conectar con la gente. Prepárate para divertirte, ser creativo y reírte mucho, ¿no es para eso para lo que se creó Xeración? ¡Tengo muchas ganas de verte pronto! 🫶🏻',
  },
  'Isi Ritter': {
    bio: '¡Hola, soy Isi! :) Tengo 21 años y soy de Leipzig, Alemania. Me encantan la jardinería, los animales y ser creativa. […]',
    bioLong: '¡Hola, soy Isi! :) Tengo 21 años y soy de Leipzig, Alemania. Me encantan la jardinería, los animales y ser creativa. Además, siempre estoy abierta a una buena conversación, así que si necesitas hablar con alguien, ¡escríbeme! :))',
  },
  'Örjan Petersson': {
    bio: 'Hola, me llamo Örjan y soy el nuevo sueco guapo del equipo. Tengo 22 años y soy de Kalmar. […]',
    bioLong: 'Hola, me llamo Örjan y soy el nuevo sueco guapo del equipo. Tengo 22 años y soy de Kalmar. Soy muy todoterreno, así que tengo muchos intereses, pero algunos son las artes marciales, la psicología y grabar y editar vídeos para mi TikTok.',
  },
  'Febe Prins': {
    bio: 'Me llamo Febe, tengo 19 años y me interesa todo lo creativo: el cine, la pintura, las manualidades y la interpretación. Estoy aquí para aprender, con curiosidad por todo y por las historias de la gente.',
  },
}

/** Cambia la presentación de cada persona por su traducción (si la hay). */
export function conPresentaciones(members: TeamMember[], presentaciones: Record<string, Presentacion>): TeamMember[] {
  return members.map((member) => {
    const traduccion = presentaciones[member.name]
    return traduccion ? { ...member, bio: traduccion.bio, bioLong: traduccion.bioLong } : member
  })
}

// El equipo actual va en tarjetas con su cargo y su presentación; quienes ya
// han pasado por aquí, en la rejilla compacta, solo con foto, nombre y bandera
// (pastVolunteers ya está ordenado de más reciente a más antiguo).
const pasadosSinTexto = pasados.map(({ name, country, image }) => ({ name, country, image }))

/** Grupos con las presentaciones originales (en inglés), para /en/. */
export const equipoGroupsOriginal: EquipoGroup[] = [
  { heading: 'Coordinación', layout: 'row', members: [coordinacion] },
  { heading: 'El equipo ahora mismo', layout: 'row', members: equipoActual },
  { heading: 'Han estado con nosotros', layout: 'grid', members: pasadosSinTexto },
]

export const equipoGroupsEs: EquipoGroup[] = equipoGroupsOriginal.map((group) => ({
  ...group,
  members: conPresentaciones(group.members, PRESENTACIONES_ES),
}))
