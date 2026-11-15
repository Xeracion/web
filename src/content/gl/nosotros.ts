import { archivo, pageNosotrosEs } from '../nosotros'
import type { HomeDoor, Initiative, Partner, ResumenItem, SectionIntro, StatItem, TeamMember, TimelineMilestone, ValueItem } from '../types'

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

// Mesmas cifras ca en castelán (as do arquivo de proxectos calcúlanse das súas fichas).
const CIFRAS_GL = [
  'anos montando plans en Ferrol',
  'voluntarios doutros países acollidos',
  'mozos e mozas de aquí enviados a proxectos fóra',
  'persoas socias',
  `proxectos no noso arquivo dende ${archivo.desde}`,
  `participantes de ${archivo.paises} países neses proxectos`,
]

export const pageNosotrosGl = {
  ...pageNosotrosEs,
  heroHeading: 'Somos Xeración, un colectivo novo de Ferrol que monta outros plans.',
  heroText:
    'Dende 2013 preparamos experiencias para que a xente nova saia, aprenda e coñeza outra xente, e poñemos en marcha proxectos que lle fan falta á comunidade. Sen ánimo de lucro, dende a Casa da Xuventude e con xente de aquí e de media Europa.',
  cifrasIntro: { heading: 'Xeración en cifras.' } satisfies SectionIntro,
  cifras: pageNosotrosEs.cifras.map((cifra, i) => ({ ...cifra, label: CIFRAS_GL[i] })) satisfies StatItem[],
  resumenIntro: { heading: 'Xeración, en poucas palabras.' } satisfies SectionIntro,
  resumen: [
    { label: 'Que somos', text: 'Un colectivo xuvenil sen ánimo de lucro, nado en Ferrol en 2013.' },
    { label: 'Onde estamos', text: 'Na Casa da Xuventude, Rúa Almendra 9. Oficina de luns a venres, das 10:00 ás 14:00.' },
    { label: 'Para quen', text: 'Sobre todo xente nova. Tamén centros educativos, institucións, empresas e colectivos.' },
    { label: 'Como se financia', text: 'Unhas experiencias págaas quen participa e outras finánciannas programas europeos.' },
  ] satisfies ResumenItem[],
  queHacemosIntro: { heading: 'O que facemos.' } satisfies SectionIntro,
  queHacemos: [
    { title: 'Experiencias para medrar', text: 'Camiños, intercambios, cursos e voluntariados, dunha semana a un ano.', ctaLabel: 'Quero ver experiencias', href: '/gl/experiencias/' },
    { title: 'Proxectos para a comunidade', text: 'Liña, Cousateca, Stop Eucalipto e Retake: cousas que facían falta e non existían.', ctaLabel: 'Quero ver os proxectos', href: '/gl/#proxectos' },
    { title: 'Un punto de encontro en Ferrol', text: 'Cursos gratuítos, obradoiros e plans cada semana na Casa da Xuventude.', ctaLabel: 'Quero ver a axenda', href: '/gl/axenda/' },
  ] satisfies HomeDoor[],
  historiaIntro: { heading: 'De onde vimos.' } satisfies SectionIntro,
  historiaParagraphs: [
    'Xeración nace en 2013 da man dun grupo de mozos e mozas de Ferrol. Antes estabamos en Narón; dende 2017, a Casa da Xuventude é o noso campamento base.',
    'Montamos iniciativas culturais, ambientais e de voluntariado, e formamos a xente nova con obradoiros e cursos **accesibles e gratuítos**: oratoria, idiomas, vídeo, teatro.',
    'Organizamos proxectos internacionais, dunha semana a un ano, para saír, coñecer xente de todo o continente e volver con outra mirada sobre os retos sociais e ecolóxicos do noso tempo.',
    'E cando vemos que á comunidade lle falta algo, tentamos construílo: así naceron unha app de buses, unha biblioteca de obxectos e varios proxectos para coidar o monte e a costa.',
  ],
  timeline: [
    { year: '2013', title: 'Fundación', description: 'Un grupo de mozos e mozas de Ferrol pon en marcha Xeración.' },
    { year: '2014', title: 'Primeiro proxecto internacional' },
    { year: '2015', title: 'Chega o noso primeiro voluntario' },
    { year: '2017', title: 'A Casa da Xuventude', description: 'Instalámonos na Casa da Xuventude de Ferrol. Antes estabamos en Narón.' },
    { year: '2017', title: 'Speak Factor', description: 'Arrinca o curso gratuíto de oratoria en inglés na Casa da Xuventude.', href: '/speakfactor/' },
    { year: '2018', title: 'Primeiro curso internacional', description: 'Speak Factor convértese nun curso con participantes de toda Europa en Ferrol.' },
    { year: '2020', title: 'Paisanos', description: 'Retratos e podcast coas historias de veciños e veciñas de Ferrol.', href: '/paisanos/' },
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
  pastVolunteersIntro: {
    heading: 'Xente de toda Europa que xa pasou por aquí.',
  } as SectionIntro | undefined,
  pastVolunteers: membersGl(pageNosotrosEs.pastVolunteers),
  iniciativasIntro: { heading: 'Outros proxectos nosos.' } satisfies SectionIntro,
  iniciativas: [
    { icon: '🏡', name: 'Das Nest', description: 'O noso espazo de aloxamento para o voluntariado en Ferrol, pensado e xestionado por quen xa pasou por aquí.', url: 'https://dasnest.es', colorScheme: 'blue' },
    { icon: '🌿', name: 'Building Nature', description: 'Voluntariado ambiental na comarca de Ferrol: limpezas, restauración da natureza e sensibilización.', colorScheme: 'green' },
    { icon: '🎤', name: 'Speak Factor', description: 'Curso gratuíto de oratoria en inglés dende 2017. Martes alternos ás 19:00 na Casa da Xuventude.', url: '/speakfactor/', colorScheme: 'orange' },
    { icon: '🎙️', name: 'Paisanos', description: 'Historias de veciños e veciñas de Ferrol, en retratos e en podcast. Xente do común con soños e loitas que seguro che soan.', url: '/paisanos/', colorScheme: 'blue' },
  ] satisfies Initiative[],
  puertasHeading: 'Por onde queres comezar?',
  puertas: [
    { title: 'Son novo ou nova e quero facer algo.', text: 'Mira o catálogo de experiencias ou a axenda desta semana. Non fai falta experiencia previa, só ganas.', ctaLabel: 'Quero ver experiencias', href: '/gl/experiencias/' },
    { title: 'Veño de parte dunha entidade.', text: 'Institucións, centros educativos, empresas e colectivos: que facemos, con quen e con que resultados. E unha persoa coa que falar.', ctaLabel: 'Quero coñecervos', href: '/empresas/' },
  ] satisfies HomeDoor[],
  partnersIntro: { heading: 'Co apoio de' } satisfies SectionIntro,
  partnersGroups: pageNosotrosEs.partnersGroups,
  accreditations: [
    { name: 'Acreditación Erasmus+ (envío, acollida e coordinación)' },
    { name: 'Acreditación Corpo Europeo de Solidariedade' },
  ] satisfies Partner[],
  closingHeading: 'Coñecémonos en persoa?',
  closingText:
    'Pasa pola Casa da Xuventude (Rúa Almendra 9, Ferrol) de luns a venres, das 10:00 ás 14:00, ou escríbenos por WhatsApp. Contámosche o que hai sen compromiso, veñas pola túa conta ou de parte dunha entidade.',
}
