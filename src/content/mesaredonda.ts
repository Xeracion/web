import type { Feature, Partner, SectionIntro, StatItem } from './types'

// Transferido de xeracion.org/mesaredonda/ — ciclo de mesas redondas de las
// municipales de mayo de 2023, dentro del proyecto Get The Net.
export const pageMesaRedondaEs = {
  heroHeading: 'Diseñamos el Ferrol del futuro.',
  heroText: [
    'Mayo de 2023 fue el momento de pensar en el Ferrol de los siguientes cuatro años. Por eso montamos una serie de encuentros informales y constructivos con las candidaturas que se presentaban a las elecciones municipales del 28 de mayo.',
    'Más de **40 jóvenes de menos de 35 años** participaron en un espacio de diálogo para pensar en clave de ciudad, con un debate que puso sobre la mesa el punto de vista, las ideas y las necesidades de la gente joven de Ferrol.',
  ],
  heroImage: '/img/mesaredonda/cabecera.webp',
  heroImageAlt: 'Un participante habla de pie ante el grupo durante una de las mesas redondas',
  heroImageCaption: 'foto · mesa redonda con una candidatura',
  whatIntro: { heading: 'Hicimos oír ideas y propuestas para la ciudad.' } satisfies SectionIntro,
  stats: [
    { value: '1', label: 'consulta online' },
    { value: '4', label: 'candidatos a la alcaldía' },
    { value: '4', label: 'eventos públicos' },
    { value: '50', label: 'litros de café' },
  ] satisfies StatItem[],
  encuentrosIntro: { heading: 'Cuatro cafés, cuatro candidaturas.' } satisfies SectionIntro,
  encuentros: ['Un café con José Manuel', 'Un café con Jorge', 'Un café con Iván', 'Un café con Ángel'],
  gallery: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    src: `/img/mesaredonda/encuentro-${n}.webp`,
    alt: 'Jóvenes de Ferrol debatiendo con una candidatura en una de las mesas redondas',
  })),
  supportIntro: { heading: 'Con el apoyo de' } satisfies SectionIntro,
  support: [
    { name: 'Cofinanciado por la Unión Europea', image: '/img/logos/cofinanciado-ue.png' },
    { name: 'Get The Net 2023', image: '/img/logos/get-the-net.png' },
  ] satisfies Partner[],
  closingHeading: '¿Tienes ideas para Ferrol?',
  closingText: 'Cuéntanoslas por WhatsApp o pásate por la Almendra 9 cualquier mañana, de 10:00 a 14:00.',
  closingCtaLabel: 'Quiero contaros mi idea',
}

export const mesaRedondaWhatEs: Feature[] = [
  { title: 'Escuchamos de primera mano las propuestas de los partidos' },
  { title: 'Analizamos la calidad y la concreción de cada candidatura' },
  { title: 'Valoramos hacia dónde iba a ir nuestro voto' },
]
