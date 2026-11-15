import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "img-src 'self' https://substackcdn.com https://*.googleusercontent.com data:",
  "font-src 'self' data:",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "frame-src 'self' https://www.google.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
].join("; ");

// Entrevistas de Paisanos en el WordPress anterior: páginas de 2023
// (/paisanosluis/…) y entradas del blog de 2020 (/luis/, y /luis-2/ en inglés).
const PAISANOS_PAGES = ["luis", "montse", "sarath", "olga", "mbacke", "fran", "vanessa"];
const PAISANOS_POSTS = ["luis", "montse", "sarath", "mbacke", "vanessa", "fran", "katia", "demba", "alberto", "maria", "juan"];

// Fichas y convocatorias de proyectos del WordPress anterior → su ficha en
// el archivo /proyectos/ (ver src/content/proyectos.ts, campo urlsAntiguas).
const PROYECTOS_LEGACY: Array<[string, string]> = [
  ["artbeat", "artbeat"],
  ["buildingnature", "building-nature"],
  ["city-hack-day", "city-hack-day"],
  ["hackathon", "coimpact"],
  ["creative-climate-activism", "creative-climate-activism"],
  ["crossing-borders", "crossing-borders"],
  ["intercambio-galicia", "crossing-borders"],
  ["ecobubble", "ecobubble"],
  ["eco-fashion", "ecofashion"],
  ["enpact", "enpact"],
  ["eurolibrary", "eurolibrary"],
  ["feel-the-green-2", "feel-the-green"],
  ["ferrall", "ferrall"],
  ["cerrando-get-the-net", "get-the-net"],
  ["going-rural", "going-rural"],
  ["mad-you", "mad-you"],
  ["comenzamos-peas-in-a-pod", "peas-in-a-pod"],
  ["restaurando-la-naturaleza", "restaurando-la-naturaleza"],
  ["trashoholics", "trashoholics"],
  ["festival-de-la-democracia", "vozeu"],
  ["x", "x-team"],
  ["yeah", "yeah"],
  ["nohate-mp4", "nohate-mp4"],
  ["project-writing-meetup-10", "project-writing-meetup"],
  ["meninas-esc-de-corto-plazo", "meninas"],
  ["call-creation-social-inclusion", "creation-for-social-inclusion"],
];

// Páginas del WordPress que vivían bajo /en/ (las fichas de algunos proyectos
// solo existían en inglés, y las versiones inglesas de Paisanos). Van antes de
// la regla general /en/* → /.
const EN_LEGACY: Array<[string, string]> = [
  ["artbeat", "/proyectos/artbeat/"],
  ["buildingnature", "/proyectos/building-nature/"],
  ["ecobubble", "/proyectos/ecobubble/"],
  ["ferrall", "/proyectos/ferrall/"],
  ["paisanos-en", "/paisanos/"],
  ...["luis", "montse", "sarath", "olga", "mbacke"].map((slug): [string, string] => [`${slug}-en`, `/paisanos/${slug}/`]),
  ...["luis", "montse", "sarath", "mbacke", "fran", "katia", "demba", "alberto", "maria"].map((slug): [string, string] => [`${slug}-2`, `/paisanos/${slug}/`]),
  ["juan-english", "/paisanos/juan/"],
  ["inicitivas-locales", "/nosotros/#iniciativas-locales"],
];

// Entradas del blog del WordPress con convocatorias de proyectos de otras
// entidades (2014–2023), ya cerradas → el catálogo de experiencias.
const BLOG_CONVOCATORIAS = [
  "volunteering-opportunity-in-poland",
  "voluntariado-rybnik",
  "voluntariado-myslowice",
  "proyecto-voluntario-en-polonia",
  "curso-en-alemania-y-portugal",
  "voluntariado-en-francia",
  "voluntariado-en-sosnowiec",
  "voluntariado-en-polonia",
  "voluntariado-en-bulgaria",
  "voluntariado-en-dinamarca",
  "leading-ladder",
  "voluntariado-en-turquia-mad-you-you-can-make-a-difference",
  "eu-volunteers-wanted",
  "aventura-en-el-parque-nacional-borjomi-en-georgia",
  "entrena-tu-voz-en-polonia-con-erasmus",
  "intercambio-bratislava",
  "peace-building-in-europe-intercambio-juvenil-en-alemania",
  "intercambio-en-macedonia-para-hablar-de-reciclaje",
  "voluntariado-con-ninos-en-polonia",
  "curso-sobre-iniciativa-y-habilidades-de-liderazgo-en-hungria",
  "berlin-te-llama-para-hablar-de-migraciones-ii",
  "curso-erasmus-de-derechos-humanos-en-georgia",
  "discovereu-y-preparate-para-explorar-europa",
  "sve-verano-eslovaquia",
  "union-europea-y-fotografia-se-encuentran-en-berlin",
  "berlin-te-llama-para-hablar-de-migraciones",
  "adios-sve-bienvenido-cuerpo-europeo-de-solidaridad",
  "curso-para-jovenes-emprendedores-en-mollina-malaga",
  "curso-para-lideres-juveniles-en-budapest",
  "taller-de-marketing",
  "un-ano-de-voluntario-en-faro",
  "intercambio-climate-change",
  "celebra-fin-de-ano-en-polonia-hablando-de-democracia",
  "taller-en-republica-checa",
  "sve-en-polonia-con-ninos",
  "curso-de-formacion-en-berlin",
  "verano-en-polonia-con-servicio-voluntario-europeo",
  "descubre-alemania-y-atrevete-a-actuar",
  "te-enviamos-gratis-de-intercambio-a-rumania",
  "vete-gratis-de-intercambio-a-alemania",
  "nocheviejaencracovia",
  "da-talleres-a-ninos-polacos-con-este-proyecto-sve",
  "curso-sobre-acciones-no-violentas-en-georgia",
  "curso-de-gestion-de-proyectos-en-republica-checa",
  "intercambio-last-minute-en-estonia",
  "programa-young-leaders-2016",
  "intercambio-estilos-de-vida",
  "curso-de-open-space-technology-en-chequia",
  "curso-en-portugal-para-emprendedores-sociales",
  "sve-en-estonia-de-11-meses",
  "plaza-last-minute-para-sve-en-moldavia",
  "curso-para-trabajadores-juveniles-en-armenia",
  "curso-subvencionado-en-alemania",
  "intercambio-subvencionado-para-musicos-en-sicilia",
  "intercambio-juvenil-en-alemania",
  "curso-bullying-reino-unido",
  "formacion-subvencionada-en-bibliotecas-humanas",
  "intercambio-empleabilidad-rumania",
  "back2values1",
  "vete-a-estonia-en-agosto-con-xeracion",
  "practicas-remuneradas-en-el-comite-economico-y-social-de-la-ue",
  "curso-subvencionado-en-rumania-european-tools-for-adult-literacy-in-democracy",
  "proyecto-sve-en-alemania-para-2015",
];

// Otras URLs del WordPress sin equivalente: entradas de prueba o muy antiguas,
// la versión inglesa y restos técnicos.
const LEGACY_VARIOS: Array<[string, string]> = [
  ["selfhosted-audio-post", "/"],
  ["se-queres-mellorar-o-teu-karma-tes-unha-cita-en-betanzos", "/"],
  ["tes-entre-18-e-24-anos-tes-un-blogue-se-a-resposta-e-si-viena-esperate", "/"],
  ["axudas-fomento-emprego", "/"],
  ["my-account", "/"],
  ["get-in-touch-sp", "/"],
  ["elementor-32411", "/"],
  ["inicitivas-locales", "/nosotros/#iniciativas-locales"],
  ["categoria/cursos", "/experiencias/"],
  ["categoria/intercambios", "/experiencias/"],
  ["categoria/experiencias", "/experiencias/"],
  ["categoria/voluntariado", "/experiencias/"],
  ["categoria/voluntariado/mad-you", "/proyectos/mad-you/"],
  ["categoria/paisanos", "/paisanos/"],
  ["categoria/peas-in-a-pod", "/proyectos/peas-in-a-pod/"],
  ["categoria/sin-categorizar", "/"],
  ["categoria/stories-of-ferrol", "/stories-of-ferrol/"],
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "substackcdn.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    // 90 solo para las fotos grandes de cabecera; el resto va a 75 (por defecto).
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          ...SECURITY_HEADERS,
          { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
        ],
      },
    ];
  },
  // La página antigua /ferrol/ se renombró a /agenda/.
  // La página antigua /irse/ se sustituyó por el catálogo de experiencias en /experiencias/.
  // Redirige las URLs antiguas para no romper enlaces ya indexados o guardados,
  // incluidas las páginas del WordPress anterior de xeracion.org.
  async redirects() {
    const legacy: Array<[string, string]> = [
      ["/voluntariado-europeo", "/experiencias/"],
      ["/intercambios", "/experiencias/"],
      ["/cursos", "/experiencias/"],
      ["/oportunidades", "/experiencias/"],
      ["/condiciones-erasmus", "/preguntas/"],
      ["/calendario", "/agenda/"],
      ["/eventos", "/agenda/"],
      ["/english", "/en/"],
    ];
    return [
      ...legacy.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...PAISANOS_PAGES.map((slug) => ({ source: `/paisanos${slug}`, destination: `/paisanos/${slug}/`, permanent: true })),
      ...PAISANOS_POSTS.flatMap((slug) => [
        { source: `/${slug}`, destination: `/paisanos/${slug}/`, permanent: true },
        { source: `/${slug}-2`, destination: `/paisanos/${slug}/`, permanent: true },
      ]),
      ...PROYECTOS_LEGACY.map(([slug, target]) => ({ source: `/${slug}`, destination: `/proyectos/${target}/`, permanent: true })),
      ...EN_LEGACY.map(([slug, destination]) => ({ source: `/en/${slug}`, destination, permanent: true })),
      ...BLOG_CONVOCATORIAS.map((slug) => ({ source: `/${slug}`, destination: "/experiencias/", permanent: true })),
      ...LEGACY_VARIOS.map(([slug, destination]) => ({ source: `/${slug}`, destination, permanent: true })),
      // Into the Wild tiene su propia web.
      { source: "/intothewild", destination: "https://intothewildproject.com", permanent: true },
      { source: "/into-the-wild", destination: "https://intothewildproject.com", permanent: true },
      // /en/ es la portada en inglés; el resto de páginas antiguas bajo /en/ van a ella.
      { source: "/en/:path+", destination: "/en/", permanent: true },
      { source: "/ferrol", destination: "/agenda/", permanent: true },
      { source: "/ferrol/:path*", destination: "/agenda/:path*", permanent: true },
      { source: "/irse", destination: "/experiencias/", permanent: true },
      { source: "/irse/:path*", destination: "/experiencias/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
