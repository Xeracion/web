import { homeEs } from '../home'
import type { HomeDoor, HomeProject, SectionIntro, StatItem } from '../types'

// Portada en galego (/gl/). Mesma estrutura que homeEs; as fotos, os logos
// e as ligazóns externas son as mesmas.
export const homeGl = {
  ...homeEs,
  heading: 'Outros plans son posibles.',
  intro:
    'Xeración é unha organización xuvenil sen ánimo de lucro de Ferrol. Dende 2013 creamos experiencias para xente nova e proxectos que melloran a vida da comunidade, co apoio de institucións galegas e europeas.',
  heroImageAlt: 'Cinco mozos e mozas de Xeración celebran cos brazos en alto nun parque no outono',
  heroActions: [
    { label: 'Quero ver experiencias', href: '#experiencias' },
    { label: 'Quero ver os proxectos', href: '#proxectos' },
  ],
  agendaHeading: 'Os próximos cinco días en Xeración',
  institutionalLogos: homeEs.institutionalLogos.map((logo) =>
    logo.caption ? { ...logo, name: 'Cofinanciado pola Unión Europea', caption: 'Cofinanciado pola Unión Europea' } : logo,
  ),
  agendaLinkLabel: 'Quero ver toda a axenda',
  catalogIntro: {
    heading: 'Para saír distinto de como entraches.',
    text: 'Aventuras ao aire libre, camiños, encontros, voluntariados. Unhas págalas ti, outras están financiadas. Todas che deixan algo.',
  } satisfies SectionIntro,
  catalogAllLabel: 'Quero ver todas as experiencias',
  projectsHeading: 'Montámolos porque facían falta.',
  projectsText: 'Cando algo non existe e debería, tentamos construílo. Estes son algúns.',
  projects: [
    {
      name: 'Liña',
      text: 'Os autobuses de Ferrol e de Galicia nunha soa app, con horarios e tempo real de varias operadoras.',
      logo: { src: '/img/logos/proyectos/lina-icono.svg', width: 32, height: 32, wordmark: 'Liña', wordmarkColor: '#123d29' },
      href: 'https://xn--lia-8ma.com',
      ctaLabel: 'Quero probala',
    },
    {
      name: 'Cousateca',
      text: 'Unha biblioteca de obxectos con préstamo veciñal. Para que mercar unha furadeira que vas usar dúas veces.',
      logo: { src: '/img/logos/proyectos/cousateca-icono.png', width: 32, height: 32, wordmark: 'Cousateca', wordmarkColor: '#1d3fba' },
      href: 'https://cousateca.com',
      ctaLabel: 'Quero ver que hai',
    },
    {
      name: 'Stop Eucalipto',
      text: 'Devolverlle o bosque autóctono ao monte, parcela a parcela.',
      logo: { src: '/img/logos/proyectos/stop-eucalipto.png', width: 600, height: 192 },
      href: 'https://stopeucalipto.com',
      ctaLabel: 'Quero velo',
    },
    {
      name: 'Retake',
      text: 'Mañás de voluntariado para limpar praias e ribeiras, plantar árbores autóctonas e quitar eucalipto. Dende 2019.',
      logo: { src: '/img/logos/proyectos/retake.png', width: 967, height: 240 },
      href: 'https://retake.es',
      ctaLabel: 'Quero botar unha man',
    },
  ] satisfies HomeProject[],
  figuresHeading: 'Dende 2013 facendo que pasen cousas.',
  figuresText:
    'Acollemos xente de toda Europa, enviamos mozos e mozas de aquí a proxectos fóra e traballamos con empresas, centros e institucións de Ferrol e de Galicia.',
  figures: [
    { value: '+120', label: 'voluntarios internacionais acollidos' },
    { value: '+50', label: 'mozos e mozas enviados a proxectos fóra' },
    { value: '+50', label: 'empresas colaboradoras' },
    { value: '+15', label: 'países de orixe de quen acollemos' },
  ] satisfies StatItem[],
  figuresBacking:
    'Parte do que facemos finánciao Europa. Estamos acreditados por Erasmus+ e o Corpo Europeo de Solidariedade e formamos parte da rede Eurodesk.',
  figuresLinkLabel: 'Quero saber quen sodes',
  figuresLinkHref: '/gl/nos/',
  doorsHeading: 'Vés de parte dunha entidade?',
  doors: [
    {
      title: 'Tes unha empresa?',
      text: 'Acolle en prácticas a xente nova doutros países. Ocupámonos de toda a xestión, sen custo para ti.',
      ctaLabel: 'Quero acoller a alguén',
      href: '/empresas/',
    },
    {
      title: 'Traes un grupo?',
      text: 'Camiños, cursos e estadías á medida para centros, colectivos e equipos. Dinos as datas e cantos sodes.',
      ctaLabel: 'Quero un orzamento',
      href: 'mailto:info@xeracion.org?subject=Orzamento%20para%20un%20grupo',
    },
    {
      title: 'Fagamos algo xuntos.',
      text: 'Para administracións e organizacións: proxectos para a comunidade, actividades para xente nova e colaboracións á medida. Cunha persoa ao outro lado.',
      ctaLabel: 'Quero falar convosco',
      href: 'mailto:info@xeracion.org?subject=Colaboraci%C3%B3n%20con%20Xeraci%C3%B3n',
    },
  ] satisfies HomeDoor[],
  closingHeading: 'Se dubidas, escríbenos.',
  closingText:
    'Sen formularios longos. Se es novo ou nova, escríbenos por WhatsApp. Se vés dunha entidade, mellor por correo. E sempre podes pasarte pola Almendra 9 de luns a venres, das 10:00 ás 14:00.',
  closingWhatsappLabel: 'Quero escribirvos por WhatsApp',
  closingEmailLabel: 'Veño dunha entidade',
  closingEmailSubject: 'Colaboración con Xeración',
}

export const catalogEmptyGl = {
  title: 'Estamos preparando as próximas experiencias.',
  text: 'Escríbenos por WhatsApp e contámosche o que vén antes ca a ninguén. Mentres, en Ferrol sempre hai algo esta semana.',
  whatsappLabel: 'Quero que me avisedes',
  whatsappMessage: 'Ola, quero que me avisedes das próximas experiencias de Xeración.',
  agendaLabel: 'Quero ver a axenda',
}
