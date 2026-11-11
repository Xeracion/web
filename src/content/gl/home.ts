import { homeEs } from '../home'
import type { HomeDoor, HomeProject, SectionIntro, StatItem } from '../types'

// Portada en galego (/gl/). Mesma estrutura que homeEs; as fotos, os logos
// e as ligazóns externas son as mesmas.
export const homeGl = {
  ...homeEs,
  heading: 'Outros plans son posibles.',
  intro:
    'Somos un grupo de xente que monta alternativas: experiencias para medrar, sobre todo se es xove, e proxectos que melloran a vida da comunidade. Dende 2013.',
  heroImageAlt: 'Cinco mozos e mozas de Xeración celebran cos brazos en alto nun parque no outono',
  heroActions: [
    { label: 'Quero ver experiencias', href: '#experiencias' },
    { label: 'Quero ver os proxectos', href: '#proxectos' },
  ],
  agendaHeading: 'Esta semana en Xeración',
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
      href: 'https://xn--lia-8ma.com',
      ctaLabel: 'Quero probala',
    },
    {
      name: 'Cousateca',
      text: 'Unha biblioteca de obxectos con préstamo veciñal. Para que mercar unha furadeira que vas usar dúas veces.',
      href: 'https://cousateca.com',
      ctaLabel: 'Quero ver que hai',
    },
    {
      name: 'Stop Eucalipto',
      text: 'Devolverlle o bosque autóctono ao monte, parcela a parcela.',
      href: 'https://stopeucalipto.com',
      ctaLabel: 'Quero velo',
    },
    {
      name: 'Retake',
      text: 'Mañás de voluntariado para limpar praias e ribeiras, plantar árbores autóctonas e quitar eucalipto. Dende 2019.',
      href: 'https://retake.es',
      ctaLabel: 'Quero botar unha man',
    },
  ] satisfies HomeProject[],
  figuresHeading: 'Un grupo pequeno cun historial longo.',
  figuresText:
    'Somos unha asociación xuvenil sen ánimo de lucro. Levamos dende 2013 montando experiencias e proxectos, con xente de aquí e de fóra.',
  figures: [
    { value: '2013', label: 'ano no que comezamos' },
    { value: '+120', label: 'voluntarios internacionais acollidos' },
    { value: '+50', label: 'mozos e mozas enviados a proxectos fóra' },
    { value: '57', label: 'persoas socias' },
  ] satisfies StatItem[],
  figuresBacking:
    'Parte do que facemos finánciao Europa. Estamos acreditados por Erasmus+ e o Corpo Europeo de Solidariedade e formamos parte da rede Eurodesk.',
  figuresLinkLabel: 'Quero saber quen sodes',
  figuresLinkHref: '/gl/nos/',
  doorsHeading: 'Vés de parte dunha entidade?',
  doors: [
    {
      title: 'Fagamos algo xuntos.',
      text: 'Para institucións e empresas: que facemos, con quen e con que resultados. E unha persoa coa que falar.',
      ctaLabel: 'Quero coñecervos',
      href: '/empresas/',
    },
    {
      title: 'Traes un grupo?',
      text: 'Camiños, cursos e estadías á medida para centros, asociacións e equipos. Dinos as datas e cantos sodes.',
      ctaLabel: 'Quero un orzamento',
      href: 'mailto:info@xeracion.org?subject=Orzamento%20para%20un%20grupo',
    },
  ] satisfies HomeDoor[],
  closingHeading: 'Se dubidas, escríbenos.',
  closingText:
    'Sen formularios longos. WhatsApp, correo ou pásate pola Almendra 9 de luns a venres, das 10:00 ás 14:00.',
}

export const catalogEmptyGl = {
  title: 'Estamos preparando as próximas experiencias.',
  text: 'Escríbenos por WhatsApp e contámosche o que vén antes ca a ninguén. Mentres, en Ferrol sempre hai algo esta semana.',
  whatsappLabel: 'Quero que me avisedes',
  whatsappMessage: 'Ola, quero que me avisedes das próximas experiencias de Xeración.',
  agendaLabel: 'Quero ver a axenda',
}
