import { archivo, nosotrosTestimonialsEs, pageNosotrosEs } from '../nosotros'
import type { HomeDoor, Initiative, ResumenItem, SectionIntro, StatItem, Testimonial, TimelineMilestone, ValueItem } from '../types'

// /about/: traducción al inglés de /nosotros/ (y /gl/nos/). Las personas,
// fotos, cifras y datos son los mismos; solo se traducen los textos. Las
// páginas que solo existen en castellano (agenda, experiencias, Speak
// Factor, Paisanos) se enlazan tal cual.

const CIFRAS_EN = [
  'years making plans in Ferrol',
  'volunteers from other countries hosted',
  'young people from here sent to projects abroad',
  'members',
  `projects in our archive since ${archivo.desde}`,
  `participants from ${archivo.paises} countries in those projects`,
]

export const pageNosotrosEn = {
  ...pageNosotrosEs,
  heroHeading: 'We are Xeración, a youth collective in Ferrol that makes other plans happen.',
  heroText:
    'Since 2013 we have been creating experiences so that young people can go out, learn and meet other people, and launching projects our community needs. Non-profit, from the Casa da Xuventude, with people from here and from half of Europe.',
  heroImageAlt: 'The Xeración team and European volunteers at the Casa da Xuventude in Ferrol',
  cifrasIntro: { heading: 'Xeración in numbers.' } satisfies SectionIntro,
  cifras: pageNosotrosEs.cifras.map((cifra, i) => ({ ...cifra, label: CIFRAS_EN[i] })) satisfies StatItem[],
  resumenIntro: { heading: 'Xeración, in a few words.' } satisfies SectionIntro,
  resumen: [
    { label: 'What we are', text: 'A non-profit youth collective, born in Ferrol in 2013.' },
    { label: 'Where we are', text: 'At the Casa da Xuventude, Rúa Almendra 9. Office open Monday to Friday, 10:00 to 14:00.' },
    { label: 'Who it is for', text: 'Mostly young people. Also schools, institutions, companies and groups.' },
    { label: 'How it is funded', text: 'Some experiences are paid for by the participants and others are funded by European programmes.' },
  ] satisfies ResumenItem[],
  queHacemosIntro: { heading: 'What we do.' } satisfies SectionIntro,
  queHacemos: [
    { title: 'Experiences to grow', text: 'Walks, exchanges, courses and volunteering, from one week to one year.', ctaLabel: 'I want to volunteer in Ferrol', href: '/volunteering/' },
    { title: 'Projects for the community', text: 'Liña, Cousateca, Stop Eucalipto and Retake: things that were needed and did not exist.', ctaLabel: 'I want to see the projects', href: '/en/#projects' },
    { title: 'A meeting point in Ferrol', text: 'Free courses, workshops and plans every week at the Casa da Xuventude.', ctaLabel: 'I want to see the agenda (in Spanish)', href: '/agenda/' },
  ] satisfies HomeDoor[],
  iniciativasLocalesIntro: {
    heading: 'What we have been setting up in Ferrol.',
    text: 'Besides the big projects, European volunteers and local people have been launching small things around the city.',
  } satisfies SectionIntro,
  iniciativasLocales: [
    {
      title: 'Culture',
      items: [
        { name: 'Cultural nights', text: 'Every new volunteer presents their country with games, dances, quizzes and food. There has been a German Christmas market, an Estonian board game night, an Austrian dinner… They are still going.' },
        { name: 'Film and debate', text: 'Every two weeks, a film chosen by the volunteers and a chat afterwards.' },
      ],
    },
    {
      title: 'Environment',
      items: [
        { name: 'Canido urban garden', text: 'Next to the civic centre and with the neighbours: pallet furniture, new planters, planting and harvesting vegetables.' },
        { name: 'Canido wash house', text: 'In spring 2021 we painted the old wash house and cleaned up the area to plant a food forest.' },
        { name: 'Retake', text: 'Beach clean-ups, removal of invasive plants and planting of native trees. Still going.', href: 'https://retake.es' },
      ],
    },
    {
      title: 'With the people of Ferrol',
      items: [
        { name: 'Languages for older people', text: 'Weekly English and French classes for older people, with Afundación.' },
        { name: 'Conversation clubs', text: 'Groups of five to eight people practising English or French on any topic, one hour a week at the office.' },
        { name: 'Speak Factor', text: 'Tips for public speaking in English and Spanish, for young people. Still going.', href: '/speakfactor/' },
      ],
    },
    {
      title: 'Ideas from the volunteers',
      items: [
        { name: 'Skills workshops', text: 'Percussion, meditation, crêpes, sewing, upcycling…' },
        { name: 'One-off activities', text: '«Gallego!», a night to share Galician culture; Valentine’s Day plans; «El Barrio», a photo exhibition.' },
        { name: 'A nicer Ferrol', text: 'New murals on the campus and the Caranza chapel painted white.' },
      ],
    },
  ],
  historiaIntro: { heading: 'Where we come from.' } satisfies SectionIntro,
  historiaParagraphs: [
    'Xeración was born in 2013, started by a group of young people from Ferrol. We used to be in Narón; since 2017, the Casa da Xuventude has been our base camp.',
    'We run cultural, environmental and volunteering initiatives, and train young people with **accessible and free** workshops and courses: public speaking, languages, video, theatre.',
    'We organise international projects, from one week to one year, to go out, meet people from all over the continent and come back with a new view on the social and ecological challenges of our time.',
    'And when we see that the community is missing something, we try to build it: that is how a bus app, a library of things and several projects to look after the hills and the coast were born.',
  ],
  timeline: [
    { year: '2013', title: 'Founded', description: 'A group of young people from Ferrol start Xeración.' },
    { year: '2014', title: 'First international project' },
    { year: '2015', title: 'Our first volunteer arrives' },
    { year: '2017', title: 'The Casa da Xuventude', description: 'We move into the Casa da Xuventude in Ferrol. We used to be in Narón.' },
    { year: '2017', title: 'Speak Factor', description: 'The free public speaking course in English starts at the Casa da Xuventude.', href: '/speakfactor/' },
    { year: '2018', title: 'First international course', description: 'Speak Factor becomes a course with participants from all over Europe in Ferrol.' },
    { year: '2020', title: 'Paisanos', description: 'Portraits and a podcast with the stories of people from Ferrol.', href: '/paisanos/' },
    { year: '2022', title: 'Eurolibrary', description: '24 creatives from 4 countries travel the English Way of the Camino in a campervan, setting up human libraries.' },
    { year: '2023', title: 'Get The Net', description: 'We close a year of work on youth participation with 11 European organisations.' },
  ] satisfies TimelineMilestone[],
  valoresIntro: { heading: 'Six ideas we don’t negotiate on.' } satisfies SectionIntro,
  values: [
    { icon: '✈️', title: 'Mobility', description: 'Travelling around Europe should be within reach of any young person, especially those with fewer opportunities.' },
    { icon: '🤝', title: 'Cooperation', description: 'We run social cooperation and volunteering projects, here in Ferrol and across Europe.' },
    { icon: '🗳️', title: 'Democracy', description: 'We encourage critical thinking and want young people to have a say in the decisions that affect them.' },
    { icon: '🌍', title: 'Tolerance', description: 'Respect, interculturality and solidarity. Every exchange is an excuse to break down prejudices, starting with our own.' },
    { icon: '💚', title: 'Health', description: 'We stand for a healthy life: sport, the outdoors and alternative leisure plans.' },
    { icon: '🌿', title: 'Ecology', description: 'We look after our surroundings with nature restoration and plenty of environmental awareness.' },
  ] satisfies ValueItem[],
  equipoIntro: { heading: 'The team right now.' } satisfies SectionIntro,
  iniciativasIntro: { heading: 'Other projects of ours.' } satisfies SectionIntro,
  iniciativas: [
    { icon: '🏡', name: 'Das Nest', description: 'Our accommodation for volunteers in Ferrol, designed and run by people who have been here before.', url: 'https://dasnest.es', colorScheme: 'blue' },
    { icon: '🌿', name: 'Building Nature', description: 'Environmental volunteering around Ferrol: clean-ups, nature restoration and awareness.', colorScheme: 'green' },
    { icon: '🎤', name: 'Speak Factor', description: 'Free public speaking course in English since 2017. Every other Tuesday at 19:00 at the Casa da Xuventude.', url: '/speakfactor/', colorScheme: 'orange' },
    { icon: '🎙️', name: 'Paisanos', description: 'Stories of people from Ferrol, in portraits and a podcast. Ordinary people with dreams and struggles that will sound familiar.', url: '/paisanos/', colorScheme: 'blue' },
  ] satisfies Initiative[],
  puertasHeading: 'Where do you want to start?',
  puertas: [
    { title: 'I’m young and I want to do something.', text: 'Volunteering in Ferrol with the European Solidarity Corps: what it is like, what is covered and how to apply.', ctaLabel: 'I want to volunteer', href: '/volunteering/' },
    { title: 'I’m from an organisation.', text: 'Institutions, schools, companies and groups: what we do, who with and with what results. And a person to talk to.', ctaLabel: 'I want to get to know you', href: '/en/' },
  ] satisfies HomeDoor[],
  partnersIntro: { heading: 'With the support of' } satisfies SectionIntro,
  partnersGroups: [
    {
      items: [
        { name: 'Concello de Ferrol', image: '/img/logos/apoyos/concello-ferrol.png' },
        { name: 'Xunta de Galicia · Cultura, Lingua e Xuventude', image: '/img/logos/apoyos/xunta.png' },
        { name: 'Co-funded by the European Union', image: '/img/logos/apoyos/cofinanciado-ue.png' },
        { name: 'Eurodesk', image: '/img/logos/apoyos/eurodesk.png' },
      ],
    },
  ],
  closingHeading: 'Shall we meet in person?',
  closingText:
    'Come by the Casa da Xuventude (Rúa Almendra 9, Ferrol) Monday to Friday, from 10:00 to 14:00, or write to us on WhatsApp. We’ll tell you what’s going on, no strings attached, whether you come on your own or on behalf of an organisation.',
}

// Las citas van en su idioma original; solo se traduce el país.
const PAISES_EN: Record<string, string> = { Grecia: 'Greece', Italia: 'Italy', Letonia: 'Latvia' }

export const nosotrosTestimonialsEn: Testimonial[] = nosotrosTestimonialsEs.map((t) => ({
  ...t,
  originCity: t.originCity && (PAISES_EN[t.originCity] ?? t.originCity),
}))
