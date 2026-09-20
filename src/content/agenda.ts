import type { Faq, FixedProgram, SectionIntro } from './types'

// ES: hero retitulado por scripts/patch-pivot-content.ts (habla de Ferrol y
// comunidad local, no de programas); el resto viene de scripts/seed.ts.
export const pageFerrolEs = {
  heroEyebrow: 'Esta semana en Ferrol',
  heroHeading: 'Planes en la Almendra, cada semana del año.',
  heroText:
    'Nada de esperar a irte de Erasmus para que pase algo: en Ferrol hay clubs, talleres y encuentros casi todas las semanas, la mayoría gratis. Esto es lo que tenemos entre manos ahora mismo.',
  heroImageCaption: 'foto editorial · Offline Club en la Almendra 9',
  heroCtaPrimaryLabel: 'Ver agenda de la semana',
  heroCtaSecondaryLabel: 'Cómo llegar',
  fixedProgramsIntro: { eyebrow: 'Programas fijos', heading: 'Cuatro cosas que hacemos siempre.' } satisfies SectionIntro,
  agendaIntro: { eyebrow: 'Agenda', heading: 'Qué hay esta semana y la que viene.' } satisfies SectionIntro,
  arrivalHeading: 'Casa da Xuventude',
  arrivalAddressText: 'Rúa Almendra 9, 15401 Ferrol. Planta baja y primera. Abierto de lunes a sábado, tardes.',
  arrivalMapEmbedUrl: undefined as string | undefined,
  arrivalTransportText: 'Estación de tren a 10 min andando. Autobús urbano líneas 1, 5, 7 (parada Cantón).',
  faqIntro: { heading: 'Preguntas rápidas' } satisfies SectionIntro,
  closingHeading: 'Pásate cualquier tarde.',
  closingText: 'No hace falta avisar. Estamos en la Almendra 9.',
}

export const pageFerrolEnContent = {
  heroEyebrow: 'This week in Ferrol',
  heroHeading: 'Local plans in Ferrol, every week of the year.',
  heroText:
    "You don't need to wait for a mobility abroad for something to happen: Ferrol has clubs, workshops and meetups most weeks, most of them free. Here's what's on right now.",
  heroImageCaption: 'editorial photo · Offline Club at Almendra 9',
  heroCtaPrimaryLabel: "See this week's schedule",
  heroCtaSecondaryLabel: 'Getting here',
  fixedProgramsIntro: { eyebrow: 'Fixed programmes', heading: 'Four things we always do.' } satisfies SectionIntro,
  agendaIntro: { eyebrow: 'Schedule', heading: "What's on this week and next." } satisfies SectionIntro,
  arrivalHeading: 'Casa da Xuventude',
  arrivalAddressText: 'Rúa Almendra 9, 15401 Ferrol. Ground and first floor. Open Monday to Saturday, afternoons.',
  arrivalMapEmbedUrl: undefined as string | undefined,
  arrivalTransportText: 'Train station 10 minutes on foot. City bus lines 1, 5, 7 (Cantón stop).',
  faqIntro: { heading: 'Quick questions' } satisfies SectionIntro,
  closingHeading: 'Drop by any afternoon.',
  closingText: "No need to call ahead. We're at Almendra 9.",
}

export const fixedProgramsEs: FixedProgram[] = [
  { name: 'Offline Club', schedule: 'Martes 20:00', description: 'Dos horas sin móvil con gente nueva.' },
  { name: 'English club', schedule: 'Miércoles 19:00', description: 'Conversación real, sin profe.' },
  { name: 'Talleres Erasmus+', description: 'Cómo hacer currículum europeo, cartas de motivación, entrevistas.' },
  { name: 'Conciertazo · djams', schedule: 'Sábados noche cuando toca', description: 'Grupos locales.' },
]

export const fixedProgramsEn: FixedProgram[] = [
  { name: 'Offline Club', schedule: 'Tuesdays 20:00', description: 'Two hours without phones, meeting new people.' },
  { name: 'English club', schedule: 'Wednesdays 19:00', description: 'Real conversation, no teacher.' },
  { name: 'Erasmus+ workshops', description: 'How to write a European CV, motivation letters, interviews.' },
  { name: 'Conciertazo · djams', schedule: "Saturday nights, when it's on", description: 'Local bands.' },
]

export const ferrolFaqsEs: Faq[] = [
  { question: '¿Cuánto cuesta apuntarse?', answer: 'Nada. Casi todas las actividades son gratuitas. Algunas requieren inscripción por aforo.' },
  { question: '¿Hay que ser de Xeración?', answer: 'No. Ven cuando quieras. Si te gusta y quieres implicarte, luego hablamos.' },
  { question: '¿Qué edad hay que tener?', answer: 'Entre 14 y 30. La mayoría de la peña que viene tiene 18-25.' },
  { question: '¿Puedo proponer una actividad?', answer: 'Sí. Pásate un martes por Offline Club y coméntalo, o escríbenos por Instagram.' },
]

export const ferrolFaqsEn: Faq[] = [
  { question: 'How much does it cost to join?', answer: 'Nothing. Almost all activities are free. Some require sign-up because of limited space.' },
  { question: 'Do I have to be a Xeración member?', answer: "No. Come whenever you like. If you enjoy it and want to get involved, we'll talk." },
  { question: 'How old do I need to be?', answer: 'Between 14 and 30. Most people who come are 18–25.' },
  { question: 'Can I suggest an activity?', answer: 'Yes. Drop by Offline Club on a Tuesday and mention it, or message us on Instagram.' },
]
