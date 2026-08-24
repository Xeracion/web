import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClient } from '@sanity/client'
import { randomUUID } from 'crypto'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  throw new Error(
    'Faltan variables de entorno. Revisa NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET y SANITY_API_WRITE_TOKEN en .env.local.',
  )
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-07-30',
  useCdn: false,
})

type SanityDoc = { _id: string; _type: string; [key: string]: unknown }

const docs: SanityDoc[] = []

function doc(_id: string, _type: string, fields: Record<string, unknown>) {
  docs.push({ _id, _type, ...fields })
}

// --- Home (English) --------------------------------------------------------
doc('homeEn', 'homeEn', {
  eyebrow: 'Youth association · Ferrol · since 2013',
  heading: 'Twelve years opening doors to Europe from Galicia.',
  intro:
    'We send young Galicians volunteering across Europe, bring young Europeans to Ferrol, and put together things for the people who live here.',
  heroImageCaption: "editorial photo · group at Ferrol's quay",
  heroIndicator: "Choose where you're coming from",
  routeCardFerrol: {
    _type: 'routeCard',
    badgeLabel: 'Route 1 · Local',
    title: 'I live in Ferrol and want to do something this week.',
    text: 'Casa da Xuventude on Almendra. Clubs, workshops, get-togethers. Almost all of it free.',
    ctaLabel: "See what's on",
    photoLabel: 'group at Offline Club',
  },
  routeCardVolunteering: {
    _type: 'routeCard',
    badgeLabel: 'Route 3 · Come over',
    title: 'I want to volunteer or intern in Galicia.',
    text: '2 to 12 months in Ferrol with the European Solidarity Corps.',
    ctaLabel: 'Apply',
    photoLabel: 'volunteer group at the Cantábrico coast',
  },
  routeCardAbout: {
    _type: 'routeCard',
    badgeLabel: 'About us',
    title: 'Twelve years building a network across Europe.',
    text: "Who we are, how it started, and the team behind it.",
    ctaLabel: 'Meet the team',
    photoLabel: 'team at the Casa da Xuventude',
  },
  stats: [
    { _type: 'statItem', _key: randomUUID(), value: '12', label: 'years active since 2013' },
    { _type: 'statItem', _key: randomUUID(), value: '~80', label: 'young Galicians sent volunteering' },
    { _type: 'statItem', _key: randomUUID(), value: '~60', label: 'Europeans hosted in Ferrol' },
    { _type: 'statItem', _key: randomUUID(), value: '15+', label: 'countries of origin and destination' },
  ],
  testimonialsEyebrow: 'Real stories',
  agendaEyebrow: 'This week in Ferrol',
  agendaLinkLabel: 'Full schedule',
  closingHeading: "If you're unsure, just write to us.",
  closingText: 'No long forms. WhatsApp, email, or drop by Almendra 9 any afternoon.',
})

// --- Página Ferrol (English) -------------------------------------------------
doc('pageFerrolEn', 'pageFerrolEn', {
  heroEyebrow: 'Route 1 · Casa da Xuventude · Ferrol',
  heroHeading: 'A place on Almendra where things happen every week.',
  heroText:
    'Workshops, clubs, concerts, get-togethers. Almost all of it free. Rúa Almendra 9 — open Monday to Saturday.',
  heroImageCaption: 'editorial photo · Offline Club at Almendra 9',
  heroCtaPrimaryLabel: "See this week's schedule",
  heroCtaSecondaryLabel: 'Getting here',
  fixedProgramsIntro: { _type: 'sectionIntro', eyebrow: 'Fixed programmes', heading: 'Four things we always do.' },
  agendaIntro: { _type: 'sectionIntro', eyebrow: 'Schedule', heading: "What's on this week and next." },
  arrivalHeading: 'Casa da Xuventude',
  arrivalAddressText: 'Rúa Almendra 9, 15401 Ferrol. Ground and first floor. Open Monday to Saturday, afternoons.',
  arrivalTransportText: 'Train station 10 minutes on foot. City bus lines 1, 5, 7 (Cantón stop).',
  faqIntro: { _type: 'sectionIntro', heading: 'Quick questions' },
  closingHeading: 'Drop by any afternoon.',
  closingText: "No need to call ahead. We're at Almendra 9.",
})

// --- Página Sobre nós (English / About) --------------------------------
doc('pageNosotrosEn', 'pageNosotrosEn', {
  heroEyebrow: 'Since 2013 · Ferrol, Galicia',
  heroHeading: "We're not just another NGO. We're your network in Europe.",
  heroHeadingAccent: 'your network in Europe',
  heroText:
    "We're young people helping other young people live their European adventure. No red tape, no endless paperwork — with more than a decade of experience doing this.",
  heroStats: [
    { _type: 'statItem', _key: randomUUID(), value: '500+', label: 'young participants' },
    { _type: 'statItem', _key: randomUUID(), value: '13', label: 'years active' },
    { _type: 'statItem', _key: randomUUID(), value: '30+', label: 'countries' },
  ],
  historiaIntro: {
    _type: 'sectionIntro',
    eyebrow: 'Our story',
    heading: 'From an idea in a bar to a network across Europe.',
  },
  historiaParagraphs: [
    'Xeración was born in 2013 in Ferrol, when a group of friends came back from their own volunteering placements in Europe and realised there was no easy way to repeat the experience in their city — or to bring anyone over from abroad.',
    'The problem was simple: information about European programmes existed, but it was scattered, written in technical English, and there was no one nearby to walk you through the process step by step. We decided to be that person.',
    "Thirteen years later we're still working from the same idea: clear the paperwork and uncertainty out of the way so that saying \"I'm going\" is the easiest part of the whole trip.",
  ],
  timeline: [
    { _type: 'timelineMilestone', _key: randomUUID(), year: '2013', title: 'Founded', description: 'A group of friends in Ferrol decides to set up Xeración.' },
    { _type: 'timelineMilestone', _key: randomUUID(), year: '2015', title: 'First European volunteers', description: 'The first young people from abroad arrive in Ferrol, hosted by the association.' },
    { _type: 'timelineMilestone', _key: randomUUID(), year: '2021', title: 'ESC accreditation', description: 'Xeración becomes an accredited sending and hosting organisation for the European Solidarity Corps.' },
    { _type: 'timelineMilestone', _key: randomUUID(), year: '2024', title: '500+ participants', description: "We pass the 500 mark for young people who've been through a Xeración programme." },
    { _type: 'timelineMilestone', _key: randomUUID(), year: '2025', title: 'Das Nest opens', description: 'We open Das Nest, our first own accommodation space for volunteers.' },
  ],
  valoresIntro: { _type: 'sectionIntro', eyebrow: 'How we work', heading: "Six ideas we don't compromise on." },
  values: [
    { _type: 'valueItem', _key: randomUUID(), icon: '✈️', title: 'Mobility', description: 'We believe moving around Europe should be within reach of any young Galician, whether or not they can afford it.' },
    { _type: 'valueItem', _key: randomUUID(), icon: '🤝', title: 'Cooperation', description: 'We work with organisations across Europe that share the same way of doing things: no rush, real follow-up.' },
    { _type: 'valueItem', _key: randomUUID(), icon: '🗳️', title: 'Democracy', description: 'We encourage young people to take an active part in the decisions that affect them, inside and outside the association.' },
    { _type: 'valueItem', _key: randomUUID(), icon: '🌍', title: 'Tolerance', description: 'Every exchange and every volunteering placement is a chance to break down prejudice, starting with our own.' },
    { _type: 'valueItem', _key: randomUUID(), icon: '💚', title: 'Health', description: 'We look after the wellbeing of the people who leave and the people who arrive — support does not stop once you board the plane.' },
    { _type: 'valueItem', _key: randomUUID(), icon: '🌿', title: 'Sustainability', description: 'We choose the train whenever we can, and pick projects that leave a positive mark on the place that hosts them.' },
  ],
  equipoIntro: { _type: 'sectionIntro', eyebrow: 'Behind the scenes', heading: 'The team right now.' },
  teamMembers: [
    { _type: 'teamMember', _key: randomUUID(), name: 'Fran Sequeiro', role: 'Coordination', linkUrl: 'https://linkedin.com/in/fransequeiro' },
    { _type: 'teamMember', _key: randomUUID(), name: 'Amélie Arles', role: 'Volunteer · France' },
    { _type: 'teamMember', _key: randomUUID(), name: 'Caitlin Wessels', role: 'Volunteer · Netherlands' },
    { _type: 'teamMember', _key: randomUUID(), name: 'Marie Salaün', role: 'Volunteer · France' },
  ],
  volunteersNumber: '60+',
  volunteersSubtitle: 'European volunteers from more than 20 countries have been through Xeración since 2013.',
  volunteersCtaLabel: 'Want to be next? →',
  volunteersCtaUrl: '/volunteering/',
  iniciativasIntro: { _type: 'sectionIntro', eyebrow: 'Beyond volunteering', heading: 'Three of our own projects.' },
  iniciativas: [
    { _type: 'initiative', _key: randomUUID(), icon: '🏡', name: 'Das Nest', description: "Our volunteer accommodation space in Ferrol, designed and run by people who've been through the programme themselves.", colorScheme: 'blue' },
    { _type: 'initiative', _key: randomUUID(), icon: '🌿', name: 'Building Nature', description: 'Environmental volunteering projects on the Ferrol estuary: coastal clean-ups, reforestation, awareness campaigns.', colorScheme: 'green' },
    { _type: 'initiative', _key: randomUUID(), icon: '🎤', name: 'Speak Factor', description: 'Language workshops and clubs open to the whole area, run by our own international volunteers.', colorScheme: 'orange' },
  ],
  partnersIntro: { _type: 'sectionIntro', eyebrow: 'Who we work with' },
  partners: [
    { _type: 'partner', _key: randomUUID(), name: 'ERASMUS+' },
    { _type: 'partner', _key: randomUUID(), name: 'European Solidarity Corps' },
    { _type: 'partner', _key: randomUUID(), name: 'Eurodesk' },
    { _type: 'partner', _key: randomUUID(), name: 'Xunta de Galicia' },
    { _type: 'partner', _key: randomUUID(), name: 'Concello de Ferrol' },
    { _type: 'partner', _key: randomUUID(), name: 'Google for Nonprofits' },
  ],
  closingHeading: 'Ready to live your European adventure?',
  closingText: 'All our opportunities are fully funded. The only requirement is wanting to.',
})

// --- Testimonios de "Sobre nós" (English) -----------------------------------
doc('testimonial-tasos-en', 'testimonial', {
  quote: 'I came to Ferrol not knowing anyone. I left with a second family scattered across half of Europe.',
  name: 'Tasos Batzonis',
  originCity: 'Greece',
  program: 'ESC',
  language: 'en',
  displaySize: 'mediano',
  route: 'nosotros',
})
doc('testimonial-martina-en', 'testimonial', {
  quote: 'I thought it would just be an odd year in my career. It was the year I learned the most about myself.',
  name: 'Martina Aramini',
  originCity: 'Italy',
  program: 'ESC',
  language: 'en',
  displaySize: 'mediano',
  route: 'nosotros',
})
doc('testimonial-linda-en', 'testimonial', {
  quote: "No one warned me I'd miss Ferrol's rain so much once I got home.",
  name: 'Linda Pūdāne',
  originCity: 'Latvia',
  program: 'ESC',
  language: 'en',
  displaySize: 'mediano',
  route: 'nosotros',
})

// --- Programas fijos (route: ferrol, language: en) --------------------------
doc('fixedProgram-offline-club-en', 'fixedProgram', {
  name: 'Offline Club',
  schedule: 'Tuesdays 20:00',
  description: 'Two hours without phones, meeting new people.',
  route: 'ferrol',
  language: 'en',
})
doc('fixedProgram-english-club-en', 'fixedProgram', {
  name: 'English club',
  schedule: 'Wednesdays 19:00',
  description: 'Real conversation, no teacher.',
  route: 'ferrol',
  language: 'en',
})
doc('fixedProgram-erasmus-workshops-en', 'fixedProgram', {
  name: 'Erasmus+ workshops',
  description: 'How to write a European CV, motivation letters, interviews.',
  route: 'ferrol',
  language: 'en',
})
doc('fixedProgram-conciertazo-en', 'fixedProgram', {
  name: 'Conciertazo · djams',
  schedule: "Saturday nights, when it's on",
  description: 'Local bands.',
  route: 'ferrol',
  language: 'en',
})

// --- Preguntas frecuentes (route: ferrol, language: en) ----------------------
const ferrolFaqsEn: Array<[string, string]> = [
  ['How much does it cost to join?', 'Nothing. Almost all activities are free. Some require sign-up because of limited space.'],
  ['Do I have to be a Xeración member?', "No. Come whenever you like. If you enjoy it and want to get involved, we'll talk."],
  ['How old do I need to be?', 'Between 14 and 30. Most people who come are 18–25.'],
  ['Can I suggest an activity?', 'Yes. Drop by Offline Club on a Tuesday and mention it, or message us on Instagram.'],
]
ferrolFaqsEn.forEach(([question, answer], i) => {
  doc(`faq-ferrol-en-${i + 1}`, 'faq', { question, answer, route: 'ferrol', language: 'en', order: i + 1 })
})

async function run() {
  console.log(`Creando ${docs.length} documentos nuevos en inglés en ${dataset} (sin pisar nada existente)...`)
  const tx = docs.reduce((t, d) => t.createIfNotExists(d), client.transaction())
  await tx.commit()
  console.log('Listo.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
