import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import {profile} from "@/data/profile";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import Navbar
  from "@/components/layout/Navbar";

import Footer
  from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  title:
    "José Carlos Lorente García | Backend Developer",

  description:
    "Backend Developer focused on Java, PHP and software development. Portfolio and selected projects.",

  metadataBase:
    new URL("https://jclorente.dev"),

  openGraph: {
    title:
      `${profile.name} | ${profile.headline}`,

    description:
      profile.description,

    url:
      "https://jclorente.dev",

    siteName:
      "jclorente.dev",

    locale:
      "en_US",

    type:
      "website",

    images: [
      {
        url:
        "/og/cover.png",

        width: 1200,
        height: 630

      }
    ]

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      data-scroll-behavior="smooth"

      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >

      <body>

        <Navbar />

        <main
          className="
        w-full
        max-w-6xl
        mx-auto
        px-5
        sm:px-8
        flex-1
        "
        >

          {children}

        </main>

        <Footer />

        <Analytics />

      </body>

    </html>

  );

}
