import { pageFerrolEs } from '../agenda'
import type { Faq, FixedProgram, SectionIntro } from '../types'

// Axenda en galego (/gl/axenda/). Mesma estrutura que pageFerrolEs.
export const pageFerrolGl = {
  ...pageFerrolEs,
  heroHeading: 'Plans na Almendra, cada semana do ano.',
  heroText:
    'Nada de agardar a marchar de Erasmus para que pase algo: en Ferrol hai clubs, obradoiros e encontros case todas as semanas, a maioría de balde. Isto é o que temos entre mans agora mesmo.',
  heroImageAlt: 'Obradoiro de Speak Factor na Casa da Xuventude de Ferrol',
  heroCtaPrimaryLabel: 'Quero ver a axenda da semana',
  heroCtaSecondaryLabel: 'Como chegar',
  fixedProgramsIntro: { heading: 'Catro cousas que facemos sempre.' } satisfies SectionIntro,
  agendaIntro: { heading: 'Que hai esta semana e a seguinte.' } satisfies SectionIntro,
  arrivalHeading: 'Casa da Xuventude',
  arrivalAddressText: [
    'Rúa Almendra 9, 15402 Ferrol. Planta baixa e primeira.',
    'Atención ao público de luns a venres, das 10:00 ás 14:00. As actividades adoitan ser martes, mércores e xoves, normalmente ás 20:00, pero depende da axenda.',
  ],
  arrivalTransportText: 'Estación de tren a 10 min a pé. Autobús urbano liñas 1, 5, 7 (parada Cantón).',
  faqIntro: { heading: 'Preguntas rápidas' } satisfies SectionIntro,
  closingHeading: 'Ven ao próximo plan.',
  closingText: 'Non fai falta avisar. Case sempre hai algo martes, mércores ou xoves ás 20:00 na Almendra 9: mira a axenda para confirmalo.',
}

export const fixedProgramsGl: FixedProgram[] = [
  { name: 'Offline Club', schedule: 'Martes 20:00', description: 'Dúas horas sen móbil con xente nova.' },
  { name: 'English club', schedule: 'Mércores 19:00', description: 'Conversa real, sen profe.' },
  { name: 'Obradoiros Erasmus+', description: 'Como facer o currículo europeo, cartas de motivación, entrevistas.' },
  { name: 'Conciertazo · djams', schedule: 'Sábados á noite cando toca', description: 'Grupos locais.' },
]

export const ferrolFaqsGl: Faq[] = [
  { question: 'Canto custa apuntarse?', answer: 'Nada. Case todas as actividades son de balde. Algunhas precisan inscrición polo aforo.' },
  { question: 'Hai que ser de Xeración?', answer: 'Non. Ven cando queiras. Se che gusta e queres implicarte, despois falamos.' },
  { question: 'Que idade hai que ter?', answer: 'Entre 14 e 30. A maioría da xente que vén ten entre 18 e 25.' },
  { question: 'Podo propoñer unha actividade?', answer: 'Si. Pásate un martes polo Offline Club e coméntao, ou escríbenos por Instagram.' },
]
