import type { Partner, SectionIntro, StatItem, Testimonial } from './types'

// /speak-factor-tc/ era la convocatoria (en inglés) del curso internacional
// Speak Factor VI. Ahora es la memoria del proyecto ya realizado: datos del
// programa oficial y de la documentación del Drive de Xeración (solo cifras
// agregadas, nunca datos personales de participantes) y fotos del álbum
// compartido del proyecto.
export const pageSpeakFactorViEs = {
  heroEyebrow: 'Proyecto realizado · Mayo 2026',
  heroHeading: 'Speak Factor VI: una semana para perderle el miedo al escenario.',
  heroText: [
    'Del 11 al 18 de mayo de 2026 reunimos en Panxón, frente a las islas Cíes, a 21 jóvenes de 14 países para un curso intensivo de oratoria en inglés.',
    'Seis días de juegos, teatro, voz y mucho ensayo que terminaron como prometimos: cada participante subió a un escenario de verdad, en Vigo, a dar el discurso de su vida delante de público local.',
  ],
  heroImage: '/img/speakfactor-vi/gala-escenario.webp',
  heroImageAlt: 'Una participante da su discurso con micrófono en el escenario del café Vitrubia, en Vigo',
  heroImageCaption: 'foto · gala final en el café Vitrubia',
  facts: [
    { label: 'Dónde', value: 'Panxón (Nigrán) · Vigo' },
    { label: 'Cuándo', value: '11–18 de mayo de 2026' },
    { label: 'Quiénes', value: '21 participantes · 14 países' },
    { label: 'Valoración', value: '4,9 sobre 5' },
  ] satisfies StatItem[],
  daysIntro: { eyebrow: 'Día a día', heading: 'Así fue la semana.' } satisfies SectionIntro,
  days: [
    { day: 'Día 0', title: 'Se levanta el telón', text: 'Llegada a Panxón, primera cena juntos y juegos para romper el hielo: dos verdades y una mentira, caras dibujadas y preguntas con música.' },
    { day: 'Día 1', title: 'Bajo el foco', text: 'La Juggling Machine para hacer equipo con pelotas de malabares, miedos y expectativas, los tríos de aprendizaje y una primera grabación de «la historia de mi vida».' },
    { day: 'Día 2', title: 'Escribe tu historia', text: 'Storytelling: propósito, género y estructura. Cada persona escribe un discurso de dos minutos, lo presenta y recibe feedback del grupo.' },
    { day: 'Día 3', title: 'Habla con el cuerpo', text: 'Postura, movimiento y presencia escénica. Y uno de los ejercicios más duros de la semana: dos minutos de silencio delante del grupo.' },
    { day: 'Día 4', title: 'Suelta la voz', text: 'Yoga por la mañana, beatbox polaco y técnica vocal, las estructuras KISS y AIDA y ensayos uno a uno con los formadores.' },
    { day: 'Día 5', title: 'Hazte con el escenario', text: 'Ensayo general, un discurso dirigido al océano y, por la noche, la gala pública en el café Vitrubia de Vigo: todo el mundo dio su discurso ante público local.' },
    { day: 'Día 6', title: 'Más allá de la sala', text: 'Qué aprendimos: repaso de la gala, autoevaluación final, Youthpass, una carta a uno mismo y la noche de cierre.' },
    { day: 'Día 7', title: 'Llévatelo a casa', text: 'Desayuno y despedidas.' },
  ],
  trainersIntro: { eyebrow: 'Quién lo impartió', heading: 'Dos formadores, dos maneras de subir al escenario.' } satisfies SectionIntro,
  trainers: [
    {
      name: 'Gabriel Vivas',
      text: 'Actor e investigador doctoral en el King’s College de Londres. Usa el teatro, la voz y el cuerpo como herramienta de transformación social, y ha trabajado con la comunidad gitana y con activistas LGTBIQ+.',
    },
    {
      name: 'Miłosz Bałdyga',
      text: 'Entrena a deportistas, directivos y gente que necesita rendir bajo presión. Tiene dos récords del mundo de malabares con tres pelotas y diseña juegos para trabajar la confianza, el estrés y la conciencia corporal.',
    },
  ],
  trainersImage: '/img/speakfactor-vi/formadores.webp',
  trainersImageAlt: 'Los dos formadores, con micrófono, hablando al grupo durante una sesión',
  galleryIntro: { eyebrow: 'En imágenes', heading: 'Lo que pasó en Panxón.' } satisfies SectionIntro,
  gallery: [
    { src: '/img/speakfactor-vi/malabares.webp', alt: 'Participantes practicando malabares en la sala de trabajo' },
    { src: '/img/speakfactor-vi/ensayo.webp', alt: 'Un participante ensaya su discurso de pie ante el grupo sentado' },
    { src: '/img/speakfactor-vi/movimiento.webp', alt: 'Una participante abre los brazos durante un ejercicio de movimiento' },
    { src: '/img/speakfactor-vi/cuerpo.webp', alt: 'El grupo hace un ejercicio de expresión corporal con los brazos extendidos' },
    { src: '/img/speakfactor-vi/mascaras.webp', alt: 'Cuatro participantes posan con máscaras durante un ejercicio de teatro' },
    { src: '/img/speakfactor-vi/grupo.webp', alt: 'Un grupo de participantes en fila frente a la pared de la sala' },
    { src: '/img/speakfactor-vi/oceano.webp', alt: 'Una participante, dentro del agua, ensaya su discurso dirigido al océano' },
    { src: '/img/speakfactor-vi/gala-voz.webp', alt: 'Otra participante habla con micrófono durante la gala en Vigo' },
    { src: '/img/speakfactor-vi/playa.webp', alt: 'Tres participantes sonríen en una playa de Nigrán' },
    { src: '/img/speakfactor-vi/atardecer.webp', alt: 'Atardecer sobre la ría de Vigo desde Panxón' },
  ],
  voicesIntro: { eyebrow: 'Lo que dijeron', heading: 'En sus propias palabras.' } satisfies SectionIntro,
  voicesNote: 'Respuestas anónimas del cuestionario final, en su idioma original.',
  support: [{ name: 'Cofinanciado por la Unión Europea', image: '/img/logos/cofinanciado-ue.png' }] satisfies Partner[],
  closingHeading: '¿Te lo perdiste?',
  closingText: 'Mientras preparamos la próxima edición, Speak Factor sigue cada dos martes en la Casa da Xuventude de Ferrol. Gratis.',
  closingPrimaryLabel: 'Quiero probarlo en Ferrol',
  closingSecondaryLabel: 'Quiero ver otras experiencias',
}

// Del cuestionario final (formulario de reembolso), respuestas de mayo de
// 2026. Anónimas: no se escribieron para publicarse con nombre.
export const speakFactorViVoicesEs: Testimonial[] = [
  { quote: 'Silence is not our enemy. Even it can be stronger than words.', name: 'Participante' },
  { quote: 'Warmth and generosity are fundamental for public speaking.', name: 'Participante' },
  { quote: '[…] fear is much worse than the things I’m afraid of […]', name: 'Participante' },
]
