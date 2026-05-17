import "./globals.css";
import Head from "next/head";
import { EB_Garamond, DM_Sans, Ballet } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CartProvider } from "@/context/cartContext";

import Header from "@/app/components/header/header.js";
import Banner from "../components/content/banner/banner";
import Footer from "@/app/components/footer/footer";

const eb_garamond = EB_Garamond({
  subsets: ["latin"], // ou ['latin-ext'] si besoin
  weight: ["400", "500", "600", "700"], // choisis tes graisses
  variable: "--font-eb-garamond", // optionnel pour l'utiliser en CSS
});
const ballet = Ballet({
  subsets: ["latin"], // ou ['latin-ext'] si besoin
  weight: ["400"], // choisis tes graisses
  variable: "--font-ballet", // optionnel pour l'utiliser en CSS
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title:
    "Haumana Bien-être | Psychopraticienne, Massages & Maquillage à Présilly (74) France",

  description:
    "Haumana Bien-être à Présilly (Haute-Savoie) propose un accompagnement en psychopraticienne, des soins bien-être, massages et prestations maquillage. Un espace dédié à l’harmonie du corps et des émotions pour retrouver équilibre, apaisement et confiance en soi.",

  icons: [{ url: "/logo.ico", sizes: "256x256", type: "image/x-icon" }],

  keywords: [
    "psychopraticienne Présilly",
    "psychopraticienne Haute-Savoie",
    "massage bien-être Présilly",
    "massage 74",
    "soins énergétiques Haute-Savoie",
    "bien-être femme",
    "accompagnement émotionnel",
    "relaxation et détente",
    "maquillage professionnel Haute-Savoie",
    "maquillage événementiel 74",
  ],

  authors: [{ name: "Haumana Bien-être" }],

  openGraph: {
    title: "Haumana Bien-être | Psychopraticienne & Massages à Présilly (74)",
    description:
      "Accompagnement psychopratique, massages bien-être et maquillage à Présilly en Haute-Savoie. Un espace dédié à l’apaisement, la reconnexion à soi et l’harmonie du corps et des émotions.",
    url: "https://haumana-bien-etre.fr",
    siteName: "Haumana Bien-être",
    images: [
      {
        url: "/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Haumana Bien-être - Présilly",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Haumana Bien-être | Présilly (74)",
    description:
      "Psychopraticienne, massages bien-être et maquillage à Présilly. Un accompagnement pour retrouver équilibre et sérénité.",
    images: ["/ogImage.png"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={dmSans.className}>
        <NextIntlClientProvider>
          <CartProvider>
            <Banner />
            <Header />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
