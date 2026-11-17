import type {
  HomeDoor,
  Initiative,
  Partner,
  ResumenItem,
  SectionIntro,
  StatItem,
  TeamMember,
  Testimonial,
  TimelineMilestone,
  ValueItem,
} from './types'
import { proyectos } from './proyectos'

// Cifras del archivo de proyectos (/proyectos/), calculadas a partir de sus
// fichas para que no se queden viejas: cuántos hay, desde qué año, cuántos
// participantes suman (redondeado hacia abajo a la decena) y de cuántos países.
export const archivo = (() => {
  let participantes = 0
  const paises = new Set<string>()
  for (const p of proyectos) {
    for (const d of p.datos) {
      const m = d.label === 'Quiénes' ? d.value.match(/(\d+) participantes/) : null
      if (m) participantes += Number(m[1])
    }
    p.paises?.forEach((pais) => paises.add(pais))
  }
  return {
    proyectos: proyectos.length,
    desde: Math.min(...proyectos.map((p) => p.anio)),
    participantes: Math.floor(participantes / 10) * 10,
    paises: paises.size,
  }
})()

// Contenido transferido de xeracion.org/nosotros/ (WordPress): equipo,
// voluntarios, valores, "¿Qué es Xeración?", apoyos y memoria. Las cifras
// salen de contar el propio listado de voluntarios de esa página.
export const pageNosotrosEs = {
  // Pensado para quien no nos conoce de nada: una persona joven o una
  // institución. Las cifras van en su propia sección (cifrasEs, abajo).
  heroHeading: 'Somos Xeración, un colectivo joven de Ferrol que monta otros planes.',
  heroText:
    'Desde 2013 preparamos experiencias para que la gente joven salga, aprenda y conozca a otra gente, y ponemos en marcha proyectos que le hacen falta a la comunidad. Sin ánimo de lucro, desde la Casa da Xuventude y con gente de aquí y de media Europa.',
  // Equipo y voluntariado en la Casa da Xuventude.
  heroBackgroundImage: '/img/fotos/equipo-casa-xuventude.webp' as string | undefined,
  cifrasIntro: { heading: 'Xeración en cifras.' } satisfies SectionIntro,
  cifras: [
    { value: '13', label: 'años montando planes en Ferrol' },
    { value: '+120', label: 'voluntarios de otros países acogidos' },
    { value: '+50', label: 'jóvenes de aquí enviados a proyectos fuera' },
    { value: '57', label: 'personas socias' },
    { value: String(archivo.proyectos), label: `proyectos en nuestro archivo desde ${archivo.desde}` },
    { value: `+${archivo.participantes}`, label: `participantes de ${archivo.paises} países en esos proyectos` },
  ] satisfies StatItem[],
  resumenIntro: { heading: 'Xeración, en pocas palabras.' } satisfies SectionIntro,
  resumen: [
    { label: 'Qué somos', text: 'Un colectivo juvenil sin ánimo de lucro, nacido en Ferrol en 2013.' },
    { label: 'Dónde estamos', text: 'En la Casa da Xuventude, Rúa Almendra 9. Oficina de lunes a viernes, de 10:00 a 14:00.' },
    { label: 'Para quién', text: 'Sobre todo gente joven. También centros educativos, instituciones, empresas y colectivos.' },
    { label: 'Cómo se financia', text: 'Unas experiencias las paga quien participa y otras las financian programas europeos.' },
  ] satisfies ResumenItem[],
  queHacemosIntro: { heading: 'Lo que hacemos.' } satisfies SectionIntro,
  queHacemos: [
    { title: 'Experiencias para crecer', text: 'Caminos, intercambios, cursos y voluntariados, de una semana a un año.', ctaLabel: 'Quiero ver experiencias', href: '/experiencias/' },
    { title: 'Proyectos para la comunidad', text: 'Liña, Cousateca, Stop Eucalipto y Retake: cosas que hacían falta y no existían.', ctaLabel: 'Quiero ver los proyectos', href: '/#proyectos' },
    { title: 'Un punto de encuentro en Ferrol', text: 'Cursos gratuitos, talleres y planes cada semana en la Casa da Xuventude.', ctaLabel: 'Quiero ver la agenda', href: '/agenda/' },
  ] satisfies HomeDoor[],
  // Iniciativas locales: de la página «Iniciativas locales» del WordPress
  // (2022). Siguen en marcha (confirmado en noviembre de 2026): noches
  // culturales, Retake y Speak Factor. El resto se cuenta en pasado.
  iniciativasLocalesIntro: {
    heading: 'Lo que hemos ido montando en Ferrol.',
    text: 'Además de los proyectos grandes, el voluntariado europeo y la gente de aquí fueron poniendo en marcha cosas pequeñas en la ciudad.',
  } satisfies SectionIntro,
  iniciativasLocales: [
    {
      title: 'Cultura',
      items: [
        { name: 'Noches culturales', text: 'Cada persona voluntaria que llega presenta su país con juegos, bailes, concursos y comida. Ha habido un mercado navideño alemán, una noche estonia de juegos de mesa, una cena austriaca… Siguen en marcha.' },
        { name: 'Cine con debate', text: 'Cada dos semanas, una película elegida por el voluntariado y una charla después.' },
      ],
    },
    {
      title: 'Medio ambiente',
      items: [
        { name: 'Huerto urbano de Canido', text: 'Junto al centro cívico y con los vecinos del barrio: muebles con palés, macetas nuevas, plantar y recoger verduras.' },
        { name: 'Lavadeiro de Canido', text: 'En la primavera de 2021 pintamos el lavadero y limpiamos la zona para plantar un bosque comestible.' },
        { name: 'Retake', text: 'Limpiezas de playas, retirada de plantas invasoras y plantación de árboles autóctonos. Sigue en marcha.', href: 'https://retake.es' },
      ],
    },
    {
      title: 'Con la gente de Ferrol',
      items: [
        { name: 'Idiomas para mayores', text: 'Clases semanales de inglés y francés para personas mayores, con Afundación.' },
        { name: 'Clubs de conversación', text: 'Grupos de cinco a ocho personas para practicar inglés o francés hablando de cualquier tema, una hora a la semana en la oficina.' },
        { name: 'Speak Factor', text: 'Trucos para hablar en público en inglés y en castellano, para gente joven. Sigue en marcha.', href: '/speakfactor/' },
      ],
    },
    {
      title: 'Ideas del voluntariado',
      items: [
        { name: 'Talleres de habilidades', text: 'Percusión, meditación, crepes, costura, upcycling…' },
        { name: 'Actividades puntuales', text: '«Gallego!», una noche para dar a conocer la cultura gallega; planes por San Valentín; «El Barrio», una exposición de fotografía.' },
        { name: 'Ferrol, más bonito', text: 'Murales nuevos en el campus y la capilla de Caranza pintada de blanco.' },
      ],
    },
  ],
  historiaIntro: { heading: 'De dónde venimos.' } satisfies SectionIntro,
  historiaParagraphs: [
    'Xeración nace en 2013 de la mano de un grupo de jóvenes de Ferrol. Antes estábamos en Narón; desde 2017, la Casa da Xuventude es nuestro campamento base.',
    'Montamos iniciativas culturales, medioambientales y de voluntariado, y formamos a gente joven con talleres y cursos **accesibles y gratuitos**: oratoria, idiomas, vídeo, teatro.',
    'Organizamos proyectos internacionales, de una semana a un año, para salir, conocer gente de todo el continente y volver con otra mirada sobre los retos sociales y ecológicos de nuestro tiempo.',
    'Y cuando vemos que a la comunidad le falta algo, intentamos construirlo: así nacieron una app de buses, una biblioteca de objetos y varios proyectos para cuidar el monte y la costa.',
  ],
  timeline: [
    { year: '2013', title: 'Fundación', description: 'Un grupo de jóvenes de Ferrol pone en marcha Xeración.' },
    { year: '2014', title: 'Primer proyecto internacional' },
    { year: '2015', title: 'Llega nuestro primer voluntario' },
    { year: '2017', title: 'La Casa da Xuventude', description: 'Nos instalamos en la Casa da Xuventude de Ferrol. Antes estábamos en Narón.' },
    { year: '2017', title: 'Speak Factor', description: 'Arranca el curso gratuito de oratoria en inglés en la Casa da Xuventude.', href: '/speakfactor/' },
    { year: '2018', title: 'Primer curso internacional', description: 'Speak Factor se convierte en un curso con participantes de toda Europa en Ferrol.' },
    { year: '2020', title: 'Paisanos', description: 'Retratos y podcast con las historias de vecinos y vecinas de Ferrol.', href: '/paisanos/' },
    { year: '2022', title: 'Eurolibrary', description: '24 creativos de 4 países recorren el Camino Inglés en autocaravana montando bibliotecas humanas.' },
    { year: '2023', title: 'Get The Net', description: 'Cerramos un año de trabajo con 11 entidades europeas sobre participación juvenil.' },
  ] satisfies TimelineMilestone[],
  valoresIntro: { heading: 'Seis ideas que no negociamos.' } satisfies SectionIntro,
  values: [
    { icon: '✈️', title: 'Movilidad', description: 'Moverse por Europa debería estar al alcance de cualquier joven, sobre todo de quien tiene menos oportunidades.' },
    { icon: '🤝', title: 'Cooperación', description: 'Movemos proyectos de cooperación social y voluntariado, aquí en Ferrol y en el resto de Europa.' },
    { icon: '🗳️', title: 'Democracia', description: 'Fomentamos el pensamiento crítico y que la gente joven tenga voz en las decisiones que le afectan.' },
    { icon: '🌍', title: 'Tolerancia', description: 'Respeto, interculturalidad y solidaridad. Cada intercambio es una excusa para desmontar prejuicios, empezando por los nuestros.' },
    { icon: '💚', title: 'Salud', description: 'Defendemos una vida sana: deporte, aire libre y planes de ocio alternativo.' },
    { icon: '🌿', title: 'Ecología', description: 'Cuidamos el entorno con acciones de restauración de la naturaleza y mucha sensibilización ambiental.' },
  ] satisfies ValueItem[],
  equipoIntro: { heading: 'El equipo ahora mismo.' } satisfies SectionIntro,
  teamMembers: [
    { name: 'Fran Sequeiro', role: 'Coordinación', image: '/img/equipo/fran-sequeiro.webp', linkUrl: 'https://www.linkedin.com/in/fransequeiro/' },
    { name: 'Suzan Barendregt', role: 'Asistente de proyectos', country: 'NL', image: '/img/equipo/suzan-barendregt.webp', bio: "Hi, my name is Suzan. I am 22 years old and from The Netherlands. […]", bioLong: "Hi, my name is Suzan. I am 22 years old and from The Netherlands. I love trying new foods and explore nature so I'm so excited to be here in Ferrol and am looking forward to discovering all the beauty Spain has to offer!" },
    { name: 'Laetitia Wangler', role: 'Community manager', country: 'FR', image: '/img/equipo/laetitia-wangler.webp', bio: "Bread and cheese ? 🥖 Now guess where I’m coming from ! Hi, my name is Laetitia and i’m your new favorite French team member 😝 […]", bioLong: "Bread and cheese ? 🥖 Now guess where I’m coming from ! Hi, my name is Laetitia and i’m your new favorite French team member 😝 Talking, sharing, eating, i love to discover and connect with each other. Be ready to have fun, be creative and laugh a lot, isnt it what Xeracion was created for ? Can’t wait to see you soon ! 🫶🏻" },
    { name: 'Isi Ritter', role: 'Directora creativa', country: 'DE', image: '/img/equipo/isi-ritter.webp', bio: "Hey, I am Isi:) I am 21 years old and from Leipzig, Germany. I love gardening, animals and being creative! […]", bioLong: "Hey, I am Isi:) I am 21 years old and from Leipzig, Germany. I love gardening, animals and being creative! Additionally, I am always open for a good conversation, so if you need somebody to talk to, hit me up:))" },
    { name: 'Örjan Petersson', role: 'Coordinador de eventos', country: 'SE', image: '/img/equipo/orjan-petersson.webp', bio: "Hi my name is Örjan, im the new hot Swede in the team! I am 22y old and come from Kalmar. […]", bioLong: "Hi my name is Örjan, im the new hot Swede in the team! I am 22y old and come from Kalmar. I am a generalist so I have alot of interests but some of them are, martial arts, psychology and making and editing videos for my tiktok!" },
    { name: 'Febe Prins', role: 'Coordinadora de eventos', country: 'NL', image: '/img/equipo/febe-prins.webp', bio: "My name is Febe, 19 years old. and interested in anything creative, movies, painting, crafting, and acting! I am here to learn, curious about everything. And people´s story" },
  ] satisfies TeamMember[],
  pastVolunteersIntro: {
    heading: 'Gente de toda Europa que ya ha pasado por aquí.',
  } as SectionIntro | undefined,
  pastVolunteers: [
    // De más reciente a más antiguo, por fecha de llegada (hoja «Timeline volunteers»).
    { name: 'Caitlin Wessels', country: 'NL', image: '/img/equipo/caitlin-wessels.webp', bio: "Hey I'm Caitlin, 22, from the Netherlands. Creative mind, open heart, big energy. […]", bioLong: "Hey I'm Caitlin, 22, from the Netherlands. Creative mind, open heart, big energy. I love turning creative ideas into something real, whether that's visuals, conversations, or new perspectives. I can completely lose myself in music, sketching, cooking en most of all, being in nature. Ready to create something meaningful here!" },
    { name: 'Amélie Arles', country: 'FR', image: '/img/equipo/amelie-arles.webp', bio: "My name is Amélie, and I am a new volunteer at Xeracíon. I am a book lover and always have music in my ears. I come from the south of France, between the sun and the sea." },
    { name: 'Marie Salaün', country: 'FR', image: '/img/equipo/marie-salaun.webp' },
    { name: 'Sara Mauro', country: 'IT', image: '/img/equipo/sara-mauro.webp' },
    { name: 'Kamilla Shishkova', country: 'NL', image: '/img/equipo/kamilla-shishkova.webp' },
    { name: 'Jose Pekkonen', country: 'FI', image: '/img/equipo/jose-pekkonen.webp' },
    { name: "Jessy Hermitte", country: 'FR', image: '/img/voluntarios/jessy-hermitte.webp', bio: "Hello I’m Jessy ! Curious and eager to learn, this journey will be a great aventure and I hope to meet some friends on the road !" },
    { name: "Valentin Föger", country: 'AT', image: '/img/voluntarios/valentin-foger.webp', bio: "Hey, my Name is Valentin. My friends call me Vale. I am from Austria and I am twenty years old. Xeracion will be my first ever experience living and working abroad so I am really exited. […]", bioLong: "Hey, my Name is Valentin. My friends call me Vale. I am from Austria and I am twenty years old. Xeracion will be my first ever experience living and working abroad so I am really exited. One interesting fact about me... Well I just love trees. :)" },
    { name: "Felipe Granzow", country: 'DE', image: '/img/voluntarios/felipe-granzow.webp', bio: "Hey, Im Felipe. My Family is originally from Galicia which is why I decided to come here. […]", bioLong: "Hey, Im Felipe. My Family is originally from Galicia which is why I decided to come here. I arrived in Ferrol on the 3rd of October and Im looking forward to meet a lot of interesting people and learn more about the Galician culture. Also I have to say that so far, Ferrol is nicer than what I was told." },
    { name: "Jana Kocurcova", country: 'CZ', image: '/img/voluntarios/jana-kocurcova.webp', bio: "Hello :) My name is Jana, and I came to Ferrol from the Czech Republic. I am passionate about food, traveling, folklore, traditions, sports, music, and new experiences themselves." },
    { name: "Giulia Zaffino", country: 'IT', image: '/img/voluntarios/giulia-zaffino.webp', bio: "Crochet, movie and food" },
    { name: "Jadyn van 't Hoenderdaal", country: 'NL', image: '/img/voluntarios/jadyn-van-t-hoenderdaal.webp', bio: "I am creative, a guitarist and love traveling" },
    { name: "Andres Kask", country: 'EE', image: '/img/voluntarios/andres-kask.webp', bio: "Hi! My name is Andres, I'm 21 years old. I love deep conversations, music, travelling and football." },
    { name: "Devrim Isler", country: 'TR', image: '/img/voluntarios/devrim-isler.webp', bio: "Hi! My name is Devrim. I'm 27 years old and I'm from Turkey. I love traveling, meeting new people and learning new things. I'm very happy to be in Xeracion for new adventures." },
    { name: "Sami Saad", country: 'FR', image: '/img/voluntarios/sami-saad.webp', bio: "Salut, I'm Sami, i'm 25 yo and I come from France. I like football, reading, discovering new things and a lot of others various stuff. […]", bioLong: "Salut, I'm Sami, i'm 25 yo and I come from France. I like football, reading, discovering new things and a lot of others various stuff. I'll be here for the next six months, so I'll do my best to integrate the community, be helpful, meet new people and simply enjoy my stay." },
    { name: "Lucie di Domenico", country: 'FR', image: '/img/voluntarios/lucie-di-domenico.webp', bio: "Hi, I'm Lucie. I'm 21 years old. I live in the beautifull city in France. Now, I'm in Ferrol, for live my dream. I love discovering new things, travelling and eating. […]", bioLong: "Hi, I'm Lucie. I'm 21 years old. I live in the beautifull city in France. Now, I'm in Ferrol, for live my dream. I love discovering new things, travelling and eating. So, we will live new avdenture together, I'm so happy !" },
    { name: "Martina Aramini", country: 'IT', image: '/img/voluntarios/martina-aramini.webp', bio: "Hi everyone! I'm Martina and I come from Como, a small town in the north of Italy. […]", bioLong: "Hi everyone! I'm Martina and I come from Como, a small town in the north of Italy. I love being around people and surrounding myself with many friends and at the same time I like to take time to think, listen music and read. I'm so happy to be here and I can't wait to know everything about Galicia." },
    { name: "Sotiris Krouskas", country: 'GR', image: '/img/voluntarios/sotiris-krouskas.webp', bio: "Traveling archeologist that loves movies and theater" },
    { name: "Benjamin Coen", country: 'DE', image: '/img/voluntarios/benjamin-coen.webp', bio: "¡Hola! My name is Benjamin, I am 19 years old and from Germany. […]", bioLong: "¡Hola! My name is Benjamin, I am 19 years old and from Germany. I love making music, taking photos and I am so excited about being able to spend the next 10 months here in Ferrol, Hopefully, I can get to know a lot of new people and discover the Galician culture, while also giving something back to the community." },
    { name: "Linda Pūdāne", country: 'LV', image: '/img/voluntarios/linda-pudane.webp', bio: "Hi! My name is Linda, I’m from Latvia. I’m here to get new experience and share my knowledge in career guidance and personal development." },
    { name: "Joshua Astiazarain Olivera", country: 'NL', image: '/img/voluntarios/joshua-astiazarain-olivera.webp', bio: "Hi! My name is Joshua, I'm 18 years old and from Amsterdam, The Netherlands. I can tell you everything about football and I also play the guitar. […]", bioLong: "Hi! My name is Joshua, I'm 18 years old and from Amsterdam, The Netherlands. I can tell you everything about football and I also play the guitar. As you can see I'm still very young, but I'm ready to learn and gain experience! Hasta luego!" },
    { name: "Reinie van de Glind", country: 'NL', image: '/img/voluntarios/reinie-van-de-glind.webp', bio: "My name is Reinie and I come from the Netherlands. I like to be creative even though I don’t always grant myself the time draw in my free time. […]", bioLong: "My name is Reinie and I come from the Netherlands. I like to be creative even though I don’t always grant myself the time draw in my free time. I feel most alive when I’m traveling with friends or family. Seeing different parts of the world amazes me and gives me a feeling of freedom. I will be in Ferrol for 1 year and I’m really looking forward to do the projects here." },
    { name: "Leon Hernot", country: 'NL', image: '/img/voluntarios/leon-hernot.webp' },
    { name: "Patricia Maria Hodos", country: 'RO', image: '/img/voluntarios/patricia-maria-hodos.webp' },
    { name: "Romain Martenot", country: 'FR', image: '/img/voluntarios/romain-martenot.webp' },
    { name: "Maxime Petel", country: 'FR', image: '/img/voluntarios/maxime-petel.webp' },
    { name: "Adina Ghetu-Matei", country: 'AT', image: '/img/voluntarios/adina-ghetu-matei.webp' },
    { name: "Anastasios Batzonis", country: 'GR', image: '/img/voluntarios/anastasios-batzonis.webp' },
    { name: "Faye Hagedorn", country: 'NL', image: '/img/voluntarios/faye-hagedorn.webp' },
    { name: "Sophia Kouroutoú", country: 'GR', image: '/img/voluntarios/sophia-kouroutou.webp' },
    { name: "Natalia Alberska", country: 'PL', image: '/img/voluntarios/natalia-alberska.webp' },
    { name: "Wiktoria Pawlak", country: 'PL', image: '/img/voluntarios/wiktoria-pawlak.webp' },
    { name: "Hanna Misniakiewicz", country: 'PL', image: '/img/voluntarios/hanna-misniakiewicz.webp' },
    { name: "Gabriela Magnuska", country: 'PL', image: '/img/voluntarios/gabriela-maguska.webp' },
    { name: "Monika Sroczynska", country: 'PL', image: '/img/voluntarios/monika-sroczynska.webp' },
    { name: "Sandra Medina", country: 'PT', image: '/img/voluntarios/sandra-medina.webp' },
    { name: "Seda Gurenc", country: 'TR', image: '/img/voluntarios/seda-gurenc.webp' },
    { name: "Birsu Bilgicer", country: 'TR', image: '/img/voluntarios/birsu-bilgicer.webp' },
    { name: "Lynn Frances Zeijts", country: 'NL', image: '/img/voluntarios/lynn-frances-zeijts.webp' },
    { name: "Maria Rakotonoel", country: 'FR', image: '/img/voluntarios/maria-rakotonoel.webp' },
    { name: "Luca Calm", country: 'DE', image: '/img/voluntarios/luca-calm.webp' },
    { name: "Demy Van den Bergh", country: 'NL', image: '/img/voluntarios/demy-van-den-bergh.webp' },
    { name: "Shenna Alissa Verduin", country: 'NL', image: '/img/voluntarios/shenna-alissa-verduin.webp' },
    { name: "Dominika Stankiewicz", country: 'PL', image: '/img/voluntarios/dominika-stankiewicz.webp' },
    { name: "Katarzyna Mierzejewska", country: 'PL', image: '/img/voluntarios/katarzyna-mierzejewska.webp' },
    { name: "Ekincan Ateş", country: 'TR', image: '/img/voluntarios/ekincan-ates.webp' },
    { name: "Koray Bakoglu", country: 'TR', image: '/img/voluntarios/koray-bakoglu.webp' },
    { name: "Oliwia Drążek", country: 'PL', image: '/img/voluntarios/oliwia-drazek.webp' },
    { name: "Rümeysa Yemsel", country: 'TR', image: '/img/voluntarios/rumeysa-yemsel.webp' },
    { name: "Kamila Graczyk", country: 'PL', image: '/img/voluntarios/kamila-graczyk.webp' },
    { name: "Yasin Almaz", country: 'TR', image: '/img/voluntarios/yasin-almaz.webp' },
    { name: "Burak Sahin", country: 'TR', image: '/img/voluntarios/burak-sahin.webp' },
    { name: "Sultan Zengin", country: 'TR', image: '/img/voluntarios/sultan-engin.webp' },
    { name: "Sahsenem Narin", country: 'TR', image: '/img/voluntarios/sahsenem-narin.webp' },
    { name: "Luca Gambella", country: 'IT', image: '/img/voluntarios/luca-gambella.webp' },
    { name: "Betül Cabuk", country: 'TR', image: '/img/voluntarios/betul-cabuk.webp' },
    { name: "Merve Pektas", country: 'TR', image: '/img/voluntarios/merve-pektas.webp' },
    { name: "Yonca Akagündüz", country: 'TR', image: '/img/voluntarios/yonca-akagunduz.webp' },
    { name: "Nadege Lefort", country: 'FR', image: '/img/voluntarios/nadege-lefort.webp' },
    { name: "Cecilia Uitermark", country: 'NL', image: '/img/voluntarios/cecilia-ultermark.webp' },
    { name: "Thirza van 't Rood", country: 'NL', image: '/img/voluntarios/thirza-van-t-rood.webp' },
    { name: "Ayca Sarihan", country: 'TR', image: '/img/voluntarios/ayca-sarihan.webp' },
    { name: "Cagatay Türk", country: 'TR', image: '/img/voluntarios/cagatay-turk.webp' },
    { name: "Anita Duda", country: 'PL', image: '/img/voluntarios/anita-duda.webp' },
    { name: "Francesca Di Tella", country: 'IT', image: '/img/voluntarios/francesca-di-tella.webp' },
    // Las últimas, sin fecha registrada en la hoja.
    { name: "Agnieszka Kopeć", country: 'PL', image: '/img/voluntarios/agnieszka-kopec.webp' },
    { name: "Aylin Akan", country: 'TR', image: '/img/voluntarios/aylin-akan.webp' },
    { name: "Bacak Gunduzlu", country: 'TR', image: '/img/voluntarios/bacak-gunduzlu.webp' },
    { name: "Berra Ari", country: 'TR', image: '/img/voluntarios/berra-ari.webp' },
    { name: "Ege Yaman", country: 'TR', image: '/img/voluntarios/ege-yaman.webp' },
    { name: "Hasan Yurgun", country: 'TR', image: '/img/voluntarios/hasan-yurgun.webp' },
    { name: "Emilka Garska", country: 'PL', image: '/img/voluntarios/emilka-garska.webp' },
    { name: "Jana Sadovska", country: 'SK', image: '/img/voluntarios/jana-sadovska.webp' },
    { name: "Oliver Aoveer", country: 'EE', image: '/img/voluntarios/oliver-aoveer.webp' },
    { name: "Ridvan Can", country: 'TR', image: '/img/voluntarios/ridvan-can.webp' },
  ] as TeamMember[],
  iniciativasIntro: { heading: 'Otros proyectos nuestros.' } satisfies SectionIntro,
  iniciativas: [
    { icon: '🏡', name: 'Das Nest', description: 'Nuestro espacio de alojamiento para voluntariado en Ferrol, pensado y gestionado por quienes ya pasaron por aquí.', url: 'https://dasnest.es', colorScheme: 'blue' },
    { icon: '🌿', name: 'Building Nature', description: 'Voluntariado ambiental en la comarca de Ferrol: limpiezas, restauración de naturaleza y sensibilización.', colorScheme: 'green' },
    { icon: '🎤', name: 'Speak Factor', description: 'Curso gratuito de oratoria en inglés desde 2017. Martes alternos a las 19:00 en la Casa da Xuventude.', url: '/speakfactor/', colorScheme: 'orange' },
    { icon: '🎙️', name: 'Paisanos', description: 'Historias de vecinos y vecinas de Ferrol, en retratos y en podcast. Gente de a pie con sueños y luchas que seguro te suenan.', url: '/paisanos/', colorScheme: 'blue' },
  ] satisfies Initiative[],
  puertasHeading: '¿Por dónde quieres empezar?',
  puertas: [
    { title: 'Soy joven y quiero hacer algo.', text: 'Mira el catálogo de experiencias o la agenda de esta semana. No hace falta experiencia previa, solo ganas.', ctaLabel: 'Quiero ver experiencias', href: '/experiencias/' },
    { title: 'Vengo de parte de una entidad.', text: 'Instituciones, centros educativos, empresas y colectivos: qué hacemos, con quién y con qué resultados. Y una persona con la que hablar.', ctaLabel: 'Quiero conoceros', href: '/empresas/' },
  ] satisfies HomeDoor[],
  partnersIntro: { heading: 'Con el apoyo de' } satisfies SectionIntro,
  partnersGroups: [
    {
      items: [
        // Copias recortadas al contenido (sin márgenes blancos) para que todos
        // pesen lo mismo. El de la UE es el oficial de la Comisión Europea.
        { name: 'Concello de Ferrol', image: '/img/logos/apoyos/concello-ferrol.png' },
        { name: 'Xunta de Galicia · Cultura, Lingua e Xuventude', image: '/img/logos/apoyos/xunta.png' },
        { name: 'Cofinanciado por la Unión Europea', image: '/img/logos/apoyos/cofinanciado-ue.png' },
        { name: 'Eurodesk', image: '/img/logos/apoyos/eurodesk.png' },
      ] satisfies Partner[],
    },
  ],
  // Datos legales y acreditaciones: ya no se muestran en /nosotros/, pero se
  // conservan aquí (son datos reales, no tocar sin confirmación).
  legalName: 'Asociación Xeración',
  legalCif: 'G70385091',
  legalAddress: 'Rúa Almendra 9, 15402 Ferrol',
  legalOid: 'E10060426',
  legalPic: '948920640',
  memoriaAnualUrl: 'https://docs.google.com/document/d/1SfrtkrOP5oNJ1IFNEWurItOSaf9bPovJap7ZN5jOh24/edit?usp=sharing' as string | undefined,
  accreditations: [
    { name: 'Acreditación Erasmus+ (envío, acogida y coordinación)' },
    { name: 'Acreditación Cuerpo Europeo de Solidaridad' },
  ] satisfies Partner[],
  closingHeading: '¿Nos conocemos en persona?',
  closingText: 'Pásate por la Casa da Xuventude (Rúa Almendra 9, Ferrol) de lunes a viernes, de 10:00 a 14:00, o escríbenos por WhatsApp. Te contamos lo que hay sin compromiso, vengas por tu cuenta o de parte de una entidad.',
  closingCtaPrimaryHref: undefined as string | undefined,
}

// Citas reales: Tasos en la portada de xeracion.org; Martina y Linda en sus
// reseñas de Google (se mantienen en el idioma original).
export const nosotrosTestimonialsEs: Testimonial[] = [
  {
    quote: 'Hacer un voluntariado europeo ha sido la mejor decisión. Me ha ayudado a descubrir mejor mi potencial y a tener nuevas oportunidades laborales.',
    name: 'Tasos Batzonis',
    originCity: 'Grecia',
    program: 'ESC',
    image: '/img/voluntarios/anastasios-batzonis.webp',
  },
  {
    quote: 'Un lugar de encuentro donde cada semana se realizan numerosas actividades lúdicas y educativas para los jóvenes. […] Un lugar que te hace sentir como en casa, ¡súper!',
    name: 'Martina Aramini',
    originCity: 'Italia',
    image: '/img/voluntarios/martina-aramini.webp',
  },
  {
    quote: 'Great opportunities, interesting events, and the best place for networking for foreigners in Ferrol.',
    name: 'Linda Pūdāne',
    originCity: 'Letonia',
    image: '/img/voluntarios/linda-pudane.webp',
  },
]
