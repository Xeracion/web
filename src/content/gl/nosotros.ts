import { pageNosotrosEs } from '../nosotros'
import type { Initiative, Partner, SectionIntro, StatItem, TeamMember, TimelineMilestone, ValueItem } from '../types'

// Nós en galego (/gl/nos/). As persoas, fotos e datos legais son os mesmos
// que en castelán; só se traducen os textos, os cargos e os países.

const PAISES_GL: Record<string, string> = {
  Alemania: 'Alemaña',
  'Países Bajos': 'Países Baixos',
  Rumanía: 'Romanía',
}

function roleGl(role?: string) {
  if (!role) return role
  return role
    .split(' · ')
    .map((part) => PAISES_GL[part] ?? part)
    .join(' · ')
}

function membersGl(members: TeamMember[]): TeamMember[] {
  return members.map((member) => ({ ...member, role: roleGl(member.role) }))
}

export const pageNosotrosGl = {
  ...pageNosotrosEs,
  heroHeading: 'Non somos unha ONG máis. Somos a túa rede en Europa.',
  heroHeadingAccent: 'a túa rede en Europa',
  heroText:
    'Somos xente nova que axuda a outra xente nova a vivir a súa aventura europea. Sen protocolo nin papelame interminable, e coa experiencia de máis dunha década facendo isto.',
  heroStats: [
    { value: '13', label: 'anos en activo' },
    { value: '75', label: 'voluntarios europeos acollidos' },
    { value: '15', label: 'países de orixe' },
  ] satisfies StatItem[],
  historiaIntro: { heading: 'Soñamos proxectos, despois creámolos.' } satisfies SectionIntro,
  historiaParagraphs: [
    'Somos unha rede de entidades que dende 2013 traballa en Galicia e Valencia. Montamos iniciativas culturais, ambientais e de voluntariado, case sempre coa Casa da Xuventude de Ferrol como campamento base.',
    'Formamos a xente nova con obradoiros e cursos de educación non formal **accesibles e gratuítos**: oratoria, idiomas, vídeo, teatro.',
    'E organizamos proxectos internacionais dunha semana a un ano para saír, coñecer xente de todo o continente e volver con outra mirada sobre os retos sociais e ecolóxicos do noso tempo.',
  ],
  timeline: [
    { year: '2013', title: 'Fundación', description: 'Un grupo de mozos e mozas de Ferrol pon en marcha Xeración.' },
    { year: '2017', title: 'Speak Factor', description: 'Arrinca o curso gratuíto de oratoria en inglés na Casa da Xuventude.' },
    { year: '2018', title: 'Primeiro curso internacional', description: 'Speak Factor convértese nun curso con participantes de toda Europa en Ferrol.' },
    { year: '2020', title: 'Paisanos', description: 'Retratos e podcast coas historias de veciños e veciñas de Ferrol.' },
    { year: '2022', title: 'Eurolibrary', description: '24 creativos de 4 países percorren o Camiño Inglés en autocaravana montando bibliotecas humanas.' },
    { year: '2023', title: 'Get The Net', description: 'Pechamos un ano de traballo con 11 entidades europeas sobre participación xuvenil.' },
  ] satisfies TimelineMilestone[],
  valoresIntro: { heading: 'Seis ideas que non negociamos.' } satisfies SectionIntro,
  values: [
    { icon: '✈️', title: 'Mobilidade', description: 'Moverse por Europa debería estar ao alcance de calquera mozo ou moza, sobre todo de quen ten menos oportunidades.' },
    { icon: '🤝', title: 'Cooperación', description: 'Movemos proxectos de cooperación social e voluntariado, aquí en Ferrol e no resto de Europa.' },
    { icon: '🗳️', title: 'Democracia', description: 'Fomentamos o pensamento crítico e que a xente nova teña voz nas decisións que lle afectan.' },
    { icon: '🌍', title: 'Tolerancia', description: 'Respecto, interculturalidade e solidariedade. Cada intercambio é unha escusa para desmontar prexuízos, comezando polos nosos.' },
    { icon: '💚', title: 'Saúde', description: 'Defendemos unha vida san: deporte, aire libre e plans de lecer alternativo.' },
    { icon: '🌿', title: 'Ecoloxía', description: 'Coidamos o contorno con accións de restauración da natureza e moita sensibilización ambiental.' },
  ] satisfies ValueItem[],
  equipoIntro: { heading: 'O equipo agora mesmo.' } satisfies SectionIntro,
  teamMembers: membersGl(pageNosotrosEs.teamMembers),
  volunteersSubtitle: 'voluntarios europeos de 15 países pasaron por Xeración dende 2013.',
  volunteersCtaLabel: 'Quero ser o seguinte →',
  volunteersCtaUrl: '/gl/experiencias/',
  pastVolunteersIntro: {
    heading: 'Xente de toda Europa que xa pasou por aquí.',
  } as SectionIntro | undefined,
  pastVolunteers: membersGl(pageNosotrosEs.pastVolunteers),
  iniciativasIntro: { heading: 'Catro proxectos propios.' } satisfies SectionIntro,
  iniciativas: [
    { icon: '🏡', name: 'Das Nest', description: 'O noso espazo de aloxamento para o voluntariado en Ferrol, pensado e xestionado por quen xa pasou por aquí.', colorScheme: 'blue' },
    { icon: '🌿', name: 'Building Nature', description: 'Voluntariado ambiental na comarca de Ferrol: limpezas, restauración da natureza e sensibilización.', colorScheme: 'green' },
    { icon: '🎤', name: 'Speak Factor', description: 'Curso gratuíto de oratoria en inglés dende 2017. Martes alternos ás 19:00 na Casa da Xuventude.', url: '/speakfactor/', colorScheme: 'orange' },
    { icon: '🎙️', name: 'Paisanos', description: 'Historias de veciños e veciñas de Ferrol, en retratos e en podcast. Xente do común con soños e loitas que seguro che soan.', url: '/paisanos/', colorScheme: 'blue' },
  ] satisfies Initiative[],
  partnersIntro: { heading: 'Co apoio de' } satisfies SectionIntro,
  partnersGroups: [
    { heading: 'Respaldo institucional', items: pageNosotrosEs.partnersGroups[0].items },
    { heading: 'Ferramentas doadas', items: pageNosotrosEs.partnersGroups[1].items },
  ],
  accreditations: [
    { name: 'Acreditación Erasmus+ (envío, acollida e coordinación)' },
    { name: 'Acreditación Corpo Europeo de Solidariedade' },
  ] satisfies Partner[],
  closingHeading: 'Tes ganas de vivir a túa aventura europea?',
  closingText:
    'A maioría das nosas experiencias están financiadas, e as que non, contámolas claras dende o principio. O único requisito é querer.',
}
