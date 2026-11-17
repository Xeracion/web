import { conPresentaciones, equipoGroupsOriginal, type EquipoGroup, type Presentacion } from '../equipo'
import { roleGl } from './nosotros'

// /gl/nos/equipo/ — as mesmas persoas que /nosotros/equipo/, coas
// presentacións traducidas ao galego (os orixinais, en inglés, están en
// nosotros.ts).
export const pageEquipoGl = {
  heading: 'As persoas detrás de Xeración.',
  intro:
    'Dende 2013, máis de 120 persoas de máis de 15 países fixeron Xeración. Cada ano chega xente nova de toda Europa que se instala en Ferrol, enche de ideas a Casa da Xuventude e convérteas en plans para a mocidade de aquí. Un equipo que cambia e unha maneira de facer as cousas que fica.',
  primaryLabel: 'Quero saber máis de Xeración',
  primaryHref: '/gl/nos/',
  secondaryLabel: 'Quero sumarme ao equipo',
  secondaryHref: '/mentores/',
}

const PRESENTACIONS_GL: Record<string, Presentacion> = {
  'Suzan Barendregt': {
    bio: 'Ola, chámome Suzan. Teño 22 anos e son dos Países Baixos. […]',
    bioLong: 'Ola, chámome Suzan. Teño 22 anos e son dos Países Baixos. Encántame probar comidas novas e explorar a natureza, así que estou moi ilusionada de estar aquí en Ferrol e con moitas ganas de descubrir toda a beleza que ofrece España.',
  },
  'Laetitia Wangler': {
    bio: 'Ola, chámome Laetitia e son a túa nova francesa favorita do equipo 😝 […]',
    bioLong: 'Ola, chámome Laetitia e son a túa nova francesa favorita do equipo 😝 Falar, compartir, comer: encántame descubrir e conectar coa xente. Prepárate para divertirte, ser creativo e rir moito, non é para iso para o que se creou Xeración? Teño moitas ganas de verte pronto! 🫶🏻',
  },
  'Isi Ritter': {
    bio: 'Ola, son Isi! :) Teño 21 anos e son de Leipzig, Alemaña. Encántanme a xardinaría, os animais e ser creativa. […]',
    bioLong: 'Ola, son Isi! :) Teño 21 anos e son de Leipzig, Alemaña. Encántanme a xardinaría, os animais e ser creativa. Ademais, sempre estou aberta a unha boa conversa, así que se precisas falar con alguén, escríbeme! :))',
  },
  'Örjan Petersson': {
    bio: 'Ola, chámome Örjan e son o novo sueco guapo do equipo. Teño 22 anos e son de Kalmar. […]',
    bioLong: 'Ola, chámome Örjan e son o novo sueco guapo do equipo. Teño 22 anos e son de Kalmar. Son moi todoterreo, así que teño moitos intereses, pero algúns son as artes marciais, a psicoloxía e gravar e editar vídeos para o meu TikTok.',
  },
  'Febe Prins': {
    bio: 'Chámome Febe, teño 19 anos e interésame todo o creativo: o cine, a pintura, as manualidades e a interpretación. Estou aquí para aprender, con curiosidade por todo e polas historias da xente.',
  },
}

const GRUPOS_GL: Record<string, string> = {
  Coordinación: 'Coordinación',
  'El equipo ahora mismo': 'O equipo agora mesmo',
  'Han estado con nosotros': 'Estiveron connosco',
}

export const equipoGroupsGl: EquipoGroup[] = equipoGroupsOriginal.map((group) => ({
  ...group,
  heading: group.heading && (GRUPOS_GL[group.heading] ?? group.heading),
  members: conPresentaciones(group.members, PRESENTACIONS_GL).map((member) => ({ ...member, role: roleGl(member.role) })),
}))
