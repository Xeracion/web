import type { SectionIntro, StatItem } from './types'

// Transferido de xeracion.org/speakfactor/. La reserva se hacía con un plugin
// de WordPress (Amelia); aquí se sustituye por un mensaje de WhatsApp.
export const pageSpeakFactorEs = {
  heroEyebrow: 'Speak Factor · Ferrol',
  heroHeading: 'La oportunidad gratuita de mejorar tu oratoria en inglés.',
  heroText: [
    'Speak Factor es el curso gratuito de oratoria que organiza Xeración. Desde 2017 ayudamos a la gente joven de Ferrol a mejorar sus habilidades de comunicación delante del público. A través de juegos y ejercicios practicamos improvisación, discurso y comunicación no verbal.',
    'Si quieres mejorar tus presentaciones, este es tu sitio.',
  ],
  heroImage: '/img/speakfactor/orador.webp',
  heroImageAlt: 'Un participante de Speak Factor habla ante el grupo gesticulando con las manos',
  heroImageCaption: 'foto · participante en Speak Factor',
  ctaLabel: 'Quiero reservar mi plaza',
  whatsappMessage: 'Hola, quiero reservar plaza en Speak Factor.',
  videosLinkLabel: 'Ver los vídeos',
  facts: [
    { label: 'Dónde', value: 'Casa da Xuventude · Rúa Almendra 9' },
    { label: 'Cuándo', value: 'Martes alternos · 19:00' },
    { label: 'Precio', value: 'Gratis' },
    { label: 'Idioma', value: 'Inglés' },
  ] satisfies StatItem[],
  whatIntro: { eyebrow: 'Qué hacemos', heading: 'Del miedo a hablar en público a la confianza.' } satisfies SectionIntro,
  whatText:
    'En nuestros talleres convertirás el miedo a hablar en público en confianza y seguridad. Aprenderás a captar la atención de tu audiencia, controlar los nervios y utilizar el lenguaje corporal a tu favor. Exploramos distintos estilos de comunicación y pondrás en práctica todo lo aprendido con ejercicios reales. Además, recibirás comentarios constructivos que te ayudarán a mejorar y brillar en cada presentación.',
  whatImage: '/img/speakfactor/escena.webp',
  whatImageAlt: 'Dos participantes practican una presentación de pie mientras el resto del grupo escucha',
  gallery: [
    { src: '/img/fotos/speak-factor-taller.webp', alt: 'Taller de Speak Factor en la Casa da Xuventude de Ferrol' },
    { src: '/img/fotos/speak-factor-grupo.webp', alt: 'Grupo de Speak Factor durante una dinámica' },
  ],
  learnIntro: { eyebrow: 'Aprenderás a', heading: 'Todo lo que te llevas.' } satisfies SectionIntro,
  learn: [
    'Comunicar de manera eficiente en diversas situaciones',
    'Improvisar',
    'Preparar presentaciones oficiales',
    'Expresar mejor tus ideas y sensaciones',
    'Dar y recibir feedback constructivo',
    'Manejar el estrés antes de una presentación',
    'Controlar tu comunicación no verbal',
    'Actuar',
    'Trabajar en equipo',
  ],
  learnOutro: '… todo dentro de un ambiente distendido y divertido.',
  videosIntro: { eyebrow: 'En vídeo', heading: '¿Aún no tienes claro de qué va esto?' } satisfies SectionIntro,
  videosText: 'Échale un ojo a estos vídeos, entre ellos el del curso internacional que organizamos en 2018.',
  videos: [
    {
      title: 'SpeakFactor · Improve your public speaking skills',
      url: 'https://youtu.be/8uVkx1tdzjg',
      image: '/img/speakfactor/feedback.webp',
    },
    {
      title: 'Speak Factor (1st edition) · el curso internacional de 2018',
      url: 'https://youtu.be/BTUjJ7Pt9Hg',
      image: '/img/speakfactor/notas.webp',
    },
  ],
  internationalLinkLabel: 'Así fue Speak Factor VI, la edición internacional de 2026',
  closingHeading: '¿Te guardamos un sitio?',
  closingText: 'Es gratis. Escríbenos por WhatsApp y te contamos cuándo es la próxima sesión.',
  closingSecondaryLabel: 'Prefiero pasarme por la Almendra 9',
}
