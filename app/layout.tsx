import type { Metadata } from "next";
import {Analytics} from "@vercel/analytics/react";

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
    "José Carlos Lorente",

  description:
    "Backend Developer Portfolio",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"

      className={`
        ${geistSans.variable}
        ${geistMono.variable}
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
