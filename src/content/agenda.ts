import type { Faq, FixedProgram, SectionIntro } from './types'

// Copy revisado en noviembre de 2026 con lo que hay de verdad en el Google
// Calendar de Xeración: planes fijos, días y horas salen de ahí.
export const pageFerrolEs = {
  heroHeading: 'Cada semana hay algo que hacer en la Almendra.',
  heroText:
    'Juegos sin móvil, arte, música en directo y noches con gente de otros países. Casi siempre de martes a jueves a las 20:00 en la Casa da Xuventude de Ferrol, y casi todo gratis.',
  heroImage: '/img/fotos/speak-factor-taller.webp' as string | undefined,
  heroImageAlt: 'Taller de Speak Factor en la Casa da Xuventude de Ferrol',
  heroImageCaption: 'foto editorial · Offline Club en la Almendra 9',
  heroCtaPrimaryLabel: 'Quiero ver qué hay',
  heroCtaSecondaryLabel: 'Quiero saber cómo llegar',
  fixedProgramsIntro: { heading: 'Lo que hacemos cada semana.' } satisfies SectionIntro,
  agendaIntro: { heading: 'Qué hay esta semana y la que viene.' } satisfies SectionIntro,
  arrivalHeading: 'Casa da Xuventude',
  // Horario confirmado por Xeración (noviembre de 2026).
  arrivalAddressText: [
    'Rúa Almendra 9, 15402 Ferrol. Planta baja y primera.',
    'La oficina abre de lunes a viernes, de 10:00 a 14:00. Los planes son por la tarde, casi siempre de martes a jueves a las 20:00: mira la agenda para confirmarlo.',
  ],
  arrivalMapEmbedUrl: 'https://www.google.com/maps?q=Casa%20da%20Xuventude%2C%20R%C3%BAa%20Almendra%209%2C%2015402%20Ferrol&z=17&output=embed' as string | undefined,
  // Liña es un proyecto de Xeración. No se ponen líneas ni paradas a mano:
  // las da la app en tiempo real.
  arrivalTransportText:
    'En bus, con Liña, nuestra app de autobuses de Ferrol y de Galicia. Pon la Almendra 9 como destino y te dice qué bus coger, en qué parada y cuándo pasa, en tiempo real. Gratis y sin instalar nada.',
  arrivalLinaLabel: 'Quiero llegar con Liña',
  arrivalLinaHref: 'https://xn--lia-8ma.com',
  faqIntro: { heading: 'Preguntas rápidas' } satisfies SectionIntro,
  closingHeading: 'Ven al próximo plan.',
  closingText: 'No hace falta avisar. Casi siempre hay algo de martes a jueves a las 20:00 en la Almendra 9: mira la agenda para confirmarlo.',
}

// Días y horas tal como están en el Google Calendar (noviembre de 2026).
export const fixedProgramsEs: FixedProgram[] = [
  { name: 'Offline Club', schedule: 'Jueves 20:00', description: 'Prohibido el móvil, obligatorio el pique: billar, futbolín y juegos de mesa.' },
  { name: 'ARTholics', schedule: 'Miércoles 20:00', description: 'Lápices, pinceles, ganchillo y buena compañía.' },
  { name: 'Jam Session', schedule: 'Martes alternos, 20:00', description: 'Música en directo: trae tu instrumento o ven a escuchar.' },
  { name: 'Noches culturales', description: 'De vez en cuando, una noche para conocer otro país con la gente que viene de fuera. Mira la agenda.' },
]

export const ferrolFaqsEs: Faq[] = [
  { question: '¿Cuánto cuesta apuntarse?', answer: 'Nada. Casi todas las actividades son gratis. Si alguna tiene plazas limitadas, lo verás en la agenda.' },
  { question: '¿Hay que ser de Xeración?', answer: 'No. Ven cuando quieras. Si te gusta y quieres implicarte, luego hablamos.' },
  { question: '¿Qué edad hay que tener?', answer: 'Entre 14 y 30. La mayoría de la peña que viene tiene 18-25.' },
  { question: '¿Puedo proponer una actividad?', answer: 'Sí. Coméntalo en cualquier plan, escríbenos por WhatsApp o Instagram, o pásate por la oficina de lunes a viernes, de 10:00 a 14:00.' },
]
