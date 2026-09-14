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

// The embedded Sanity Studio at /studio is a third-party SPA that relies on
// inline styles/scripts and its own frame/connect targets, so it gets only
// the baseline headers above — a strict CSP there risks breaking editing.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "img-src 'self' https://cdn.sanity.io https://substackcdn.com data:",
  "font-src 'self' data:",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "connect-src 'self' https://*.sanity.io https://*.apicdn.sanity.io",
  "frame-src 'self' https://www.google.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
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
        source: "/((?!studio).*)",
        headers: [
          ...SECURITY_HEADERS,
          { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
        ],
      },
      {
        source: "/studio/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
  // La página antigua /ferrol/ (y su versión en inglés) se renombró a /agenda/.
  // Redirige las URLs antiguas para no romper enlaces ya indexados o guardados.
  async redirects() {
    return [
      { source: "/ferrol", destination: "/agenda/", permanent: true },
      { source: "/ferrol/:path*", destination: "/agenda/:path*", permanent: true },
      { source: "/en/ferrol", destination: "/en/agenda/", permanent: true },
      { source: "/en/ferrol/:path*", destination: "/en/agenda/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
