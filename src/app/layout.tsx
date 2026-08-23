import { stegaClean } from "@sanity/client/stega";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

import { getSiteSettings } from "@/sanity/lib/queries";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = stegaClean(await getSiteSettings());
  const title = siteSettings?.title ?? "Xeración";
  const description =
    siteSettings?.description ??
    "Asociación xuvenil de Ferrol activa dende 2013.";
  const images = [{ url: "/opengraph-image", width: 1200, height: 630 }];

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s · ${title}` },
    description,
    openGraph: {
      title,
      description,
      siteName: title,
      locale: "es_ES",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang = pathname.startsWith("/en") ? "en" : "es";

  return (
    <html lang={lang} className={`${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
