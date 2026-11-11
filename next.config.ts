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
  "img-src 'self' https://substackcdn.com data:",
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

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "substackcdn.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
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
      ["/proyectos", "/experiencias/"],
      ["/condiciones-erasmus", "/preguntas/"],
      ["/calendario", "/agenda/"],
      ["/eventos", "/agenda/"],
      ["/english", "/"],
    ];
    return [
      ...legacy.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...PAISANOS_PAGES.map((slug) => ({ source: `/paisanos${slug}`, destination: `/paisanos/${slug}/`, permanent: true })),
      ...PAISANOS_POSTS.flatMap((slug) => [
        { source: `/${slug}`, destination: `/paisanos/${slug}/`, permanent: true },
        { source: `/${slug}-2`, destination: `/paisanos/${slug}/`, permanent: true },
      ]),
      { source: "/en/:path*", destination: "/", permanent: true },
      { source: "/ferrol", destination: "/agenda/", permanent: true },
      { source: "/ferrol/:path*", destination: "/agenda/:path*", permanent: true },
      { source: "/irse", destination: "/experiencias/", permanent: true },
      { source: "/irse/:path*", destination: "/experiencias/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
