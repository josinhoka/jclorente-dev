"use client";

import Link from "next/link";

import MobileMenu from "./MobileMenu";

import { profile } from "@/data/profile";

import { usePathname } from "next/navigation";

import Image from "next/image";

export default function Navbar() {

  const pathname =
    usePathname();

  const links = [

    {
      href: "/projects",
      label: "Projects"
    },

    {
      href: "/experience",
      label: "Experience"
    },

    {
      href: "/about",
      label: "About"
    },

    {
      href: "/contact",
      label: "Contact"
    }

  ];

  return (

    <header
      className="
        border-b
        border-slate-800
      "
    >

      <nav
        className="
          max-w-6xl

          mx-auto

          px-5
          sm:px-8

          py-4

          flex

          justify-between

          items-center
        "
      >

        <Link

          href="/"

          className="
            text-2xl

            font-bold

            hover:text-sky-400

            transition
          "

        >

          <Image src="/brand/logo.png"
            alt={profile.name.split(" ").map((word) =>word[0]).slice(0,2).join("")}
            width={60}
            height={60}
            className="
            brightness-105
            hover:scale-105
            transition
            "/>

        </Link>

        <div
          className="
            hidden

            md:flex

            gap-8
          "
        >

          {

            links.map(
              (
                link
              ) => (

                <Link

                  key={
                    link.href
                  }

                  href={
                    link.href
                  }

                  className={`

                    transition

                    ${

                      pathname ===
                      link.href

                      ?

                      "text-sky-400"

                      :

                      "text-slate-300 hover:text-sky-400"

                    }

                  `}

                >

                  {
                    link.label
                  }

                </Link>

              )
            )

          }

        </div>

        <MobileMenu />

      </nav>

    </header>

  );

}