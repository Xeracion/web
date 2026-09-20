import type {
  Faq,
  InfoColumn,
  LifeInFerrolPhoto,
  MobilityProgram,
  OrgCard,
  ProcessStep,
  SectionIntro,
  Testimonial,
} from './types'

// pageEn: hero de siempre (scripts/seed.ts) + bloque "for organisations"
// nuevo del pivote (scripts/patch-pivot-content.ts). orgStatsProjects,
// orgStatsCountries y el PDF de perfil no tienen dato real todavía.
export const pageEnContent = {
  heroEyebrow: 'Route 3 · Come to Galicia',
  heroHeading: 'Live in Galicia for a few months. All expenses covered.',
  heroText:
    'We host young Europeans in Ferrol as ESC volunteers or Erasmus+ interns. Atlantic coast, real Spanish life, no need to speak Spanish when you arrive. 2 to 12 months. All covered by the EU.',
  heroImageCaption: 'editorial photo · volunteer group at the Cantábrico coast',
  heroCtaPrimaryLabel: 'Apply now',
  heroCtaSecondaryLabel: 'See open projects',

  forOrgsIntro: { eyebrow: 'For organisations', heading: 'Partner with Xeración.' } satisfies SectionIntro,
  orgCardVolunteers: {
    title: 'Send us your volunteers',
    text: 'We host European Solidarity Corps volunteers in Ferrol for 2 to 12 months, with accommodation, a local mentor and a structured onboarding from day one.',
    ctaLabel: 'Talk to our team',
    ctaHref: 'mailto:info@xeracion.org?subject=ESC%20volunteers',
  } satisfies OrgCard,
  orgCardVetInterns: {
    title: 'Send us your VET interns',
    text: 'We welcome vocational training placements with the same support structure as our ESC volunteers: housing guidance, a local contact and a placement that matches their field.',
    ctaLabel: 'Talk to our team',
    ctaHref: 'mailto:info@xeracion.org?subject=VET%20interns',
  } satisfies OrgCard,
  orgCardHostOurs: {
    title: 'Host ours',
    text: 'We send volunteers and youth groups to partner projects across Europe. Tell us about your organisation and we’ll see where it fits.',
    ctaLabel: 'Propose a project',
    ctaHref: 'mailto:info@xeracion.org?subject=Host%20our%20volunteers',
  } satisfies OrgCard,
  orgCardPartnerships: {
    title: 'Strategic partnerships',
    text: 'KA2 cooperation, long-term networks, joint training courses. We’re open to multi-year partnerships that go beyond a single mobility.',
    ctaLabel: 'Start a conversation',
    ctaHref: 'mailto:info@xeracion.org?subject=Strategic%20partnership',
  } satisfies OrgCard,
  orgStatsYears: String(new Date().getFullYear() - 2013),
  orgStatsProjects: undefined as string | undefined,
  orgStatsCountries: undefined as string | undefined,
  orgStatsOid: 'E10060426',
  orgStatsPic: '948920640',
  orgProfilePdfUrl: undefined as string | undefined,

  whatYouCanDoIntro: { eyebrow: 'Types of stay' } satisfies SectionIntro,
  lifeInFerrolIntro: { eyebrow: "Where you'll live", heading: 'A small Atlantic city with real Spanish life.' } satisfies SectionIntro,
  lifeInFerrolPhotos: [
    { caption: 'The Cantábrico coast', description: '10 minutes from the city, dozens of beaches in a 30 km radius.' },
    { caption: 'Old town', description: '19th-century military port, walkable, cafes, tapas.' },
    { caption: 'Food and drink', description: 'Fresh Atlantic seafood, pulpo, empanada, Galician wines. Low cost of living.' },
    { caption: 'Weather and light', description: 'Mild all year: 15°C average. Rainy autumn-winter, warm and green summers.' },
  ] satisfies LifeInFerrolPhoto[],
  practicalInfoGettingHere: {
    heading: 'Getting here',
    text: 'Fly to Santiago (SCQ, 1h drive), A Coruña (LCG, 45min) or Porto (OPO, 2h). We pick you up on arrival.',
  } satisfies InfoColumn,
  practicalInfoHousing: {
    heading: 'Housing',
    text: 'We arrange shared flat in central Ferrol with other volunteers. Rent, bills and wifi included.',
  } satisfies InfoColumn,
  practicalInfoLanguage: {
    heading: 'Language',
    text: "English is fine to start. We provide an online Spanish/Galician course. You'll be speaking basics in a month.",
  } satisfies InfoColumn,
  voicesIntro: { heading: 'Voices from past volunteers' } satisfies SectionIntro,
  howToApplyIntro: { heading: 'How to apply' } satisfies SectionIntro,
  howToApplySteps: [
    { title: 'Fill the form', description: '2-minute form: your background, languages, availability.' },
    { title: 'Video call', description: 'We meet online for 30 minutes to find the right project.' },
    { title: 'Come over', description: 'We handle the paperwork with your sending organisation. You focus on packing.' },
  ] satisfies ProcessStep[],
  faqIntro: { heading: 'FAQ' } satisfies SectionIntro,
  closingHeading: 'Ready to apply?',
  closingText: 'We usually reply within a week.',
  closingCtaPrimaryHref: undefined as string | undefined,
}

// Bloque 2 "for individuals" — mismos mobilityProgram de siempre (route en),
// con las anclas rotas (`/en/#volunteering`) corregidas a la propia página.
export const mobilityProgramsEn: MobilityProgram[] = [
  {
    name: 'ESC volunteering',
    duration: '2 to 12 months',
    idealFor:
      'Support local youth activities, help run our English club, contribute to environmental or cultural projects, learn Spanish on the way.',
    covers: 'Accommodation, food allowance, local transport, insurance, weekly pocket money, online language course.',
    ctaLabel: 'See open ESC projects',
    ctaUrl: '#apply',
  },
  {
    name: 'Erasmus+ traineeship',
    duration: '2 to 6 months',
    idealFor: 'Structured internship with our team. Communication, project management, event coordination, or digital content.',
    covers: 'Erasmus+ grant from your home university.',
    ctaLabel: 'Enquire about traineeships',
    ctaUrl: 'mailto:info@xeracion.org',
  },
  {
    name: 'Training Course (TC)',
    duration: '5 to 10 days',
    idealFor: 'You work (or want to work) in youth work and are looking for a short, practical training hosted in Ferrol.',
    covers: 'Travel, accommodation, food and the training itself.',
    ctaLabel: 'Ask about training courses',
    ctaUrl: 'mailto:info@xeracion.org',
  },
]

export const testimonialsEn: Testimonial[] = [
  { quote: 'I came to Ferrol for six months. I stayed almost a year. The sea, the food, the people.', name: 'Amélie', originCity: 'Lyon', destinationCity: 'Ferrol', program: 'ESC', year: 2023 },
  { quote: "Ferrol is small, but you feel like you're at the edge of Europe. It changed how I think about work.", name: 'Kamilla', originCity: 'Warsaw', destinationCity: 'Ferrol', program: 'ESC', year: 2022 },
  { quote: 'Best decision of my gap year. I still miss the empanada.', name: 'Jonas', originCity: 'Berlin', destinationCity: 'Ferrol', program: 'ESC', year: 2024 },
]

export const faqsEn: Faq[] = [
  {
    question: 'Do I need to speak Spanish?',
    answer:
      "No. English is fine when you arrive. We also give you access to a free online Spanish/Galician course before and during your stay, so you'll pick up the basics fast.",
  },
  {
    question: 'How much pocket money will I get?',
    answer:
      "It's a weekly amount set by the European Commission based on the cost of living in Spain, on top of your accommodation, food allowance and local transport already being covered.",
  },
  {
    question: 'Can I bring a partner?',
    answer:
      "You can ask, but placements depend on the host organisation and how many spots they have, so we can't always guarantee the same project for both of you. We'll be upfront about it from the first call.",
  },
  {
    question: 'What kind of accommodation do you offer?',
    answer: "A shared flat in central Ferrol with other volunteers, with rent, bills and wifi included. You'll have your own room.",
  },
  {
    question: 'How do I find a sending organisation in my country?',
    answer:
      "If you don't have one yet, we can point you towards partner organisations we've worked with before, or you can search the official European Solidarity Corps portal. Either way, we help with the paperwork.",
  },
  {
    question: "What if the project doesn't work for me once I'm here?",
    answer:
      "Talk to us straight away — we check in with you regularly during your stay. If something's really not working, we look at adjusting the role or, as a last resort, finding another placement.",
  },
]
