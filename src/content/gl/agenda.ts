import { pageFerrolEs } from '../agenda'
import type { Faq, FixedProgram, SectionIntro } from '../types'

// Axenda en galego (/gl/axenda/). Mesma estrutura que pageFerrolEs.
export const pageFerrolGl = {
  ...pageFerrolEs,
  heroHeading: 'Cada semana hai algo que facer en Xeración.',
  heroText:
    'Xogos sen móbil, arte, música en directo e noites con xente doutros países. Case sempre de martes a xoves ás 20:00 na Casa da Xuventude de Ferrol, e case todo de balde.',
  heroImageAlt: 'Obradoiro de Speak Factor na Casa da Xuventude de Ferrol',
  heroCtaPrimaryLabel: 'Quero ver que hai',
  heroCtaSecondaryLabel: 'Quero saber como chegar',
  fixedProgramsIntro: { heading: 'O que se repite cada semana.' } satisfies SectionIntro,
  agendaIntro: { heading: 'Que hai nos próximos catorce días.' } satisfies SectionIntro,
  arrivalHeading: 'Casa da Xuventude',
  arrivalAddressText: [
    'Rúa Almendra 9, 15402 Ferrol.',
    'A oficina abre de luns a venres, das 10:00 ás 14:00. Os plans son pola tarde, case sempre de martes a xoves ás 20:00: mira a axenda para confirmalo.',
  ],
  arrivalTransportText:
    'En bus, con Liña, a nosa app de autobuses de Ferrol e de Galicia. Pon a Almendra 9 como destino e dirache que bus coller, en que parada e cando pasa, en tempo real. De balde e sen instalar nada.',
  arrivalLinaLabel: 'Quero chegar con Liña',
  faqIntro: { heading: 'Antes de vir.' } satisfies SectionIntro,
  closingHeading: 'Ven ao próximo plan.',
  closingText: 'Non fai falta avisar. Case sempre hai algo de martes a xoves ás 20:00 na Almendra 9: mira a axenda para confirmalo.',
}

export const fixedProgramsGl: FixedProgram[] = [
  { name: 'Speak Factor', schedule: 'Martes alternos · 20:00', description: 'Oratoria e improvisación en inglés, con xogos e retos. De 18 a 30 anos.', href: '/speakfactor/' },
  { name: 'Jam Session', schedule: 'Martes alternos · 20:00', description: 'Música en directo: trae o teu instrumento ou ven escoitar.' },
  { name: 'ARTholics', schedule: 'Mércores · 20:00', description: 'Lapis, pinceis, gancho e boa compañía.' },
  { name: 'Offline Club', schedule: 'Xoves · 20:00', description: 'Prohibido o móbil, obrigatorio o pique: billar, futbolín e xogos de mesa.' },
  { name: 'Noites culturais', schedule: 'Datas soltas, na axenda', description: 'Unha noite para coñecer outro país coa xente que vén de fóra.' },
]

export const ferrolFaqsGl: Faq[] = [
  { question: 'Hai que apuntarse?', answer: 'Non. Case todo é de balde e abonda con vir. Se algún plan ten prazas limitadas, veralo na axenda.' },
  { question: 'Hai que ser de Xeración?', answer: 'Non. Ven cando queiras. Se che gusta e queres implicarte, despois falamos.' },
  { question: 'Que idade hai que ter?', answer: 'Entre 18 e 30.' },
  { question: 'Podo propoñer unha actividade?', answer: 'Si. Coméntao en calquera plan, escríbenos por WhatsApp ou Instagram, ou pásate pola oficina de luns a venres, das 10:00 ás 14:00.' },
]
