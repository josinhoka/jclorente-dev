import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {

  return (

    <footer
      className="
      mt-24
border-t

border-slate-800
"
    >

      <div
        className="
max-w-6xl

mx-auto

px-5

sm:px-8

py-10

flex

flex-col

md:flex-row

justify-between

gap-6
"
      >

        <div>

          <p className="font-semibold">
            {profile.name}
          </p>

          <p className="
          mt-2 
          text-slate-400
          "
          >
            {profile.headline}
          </p>

        </div>

        <div
          className="
          flex
          gap-6
          text-slate-400
          "
          >

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/experience">
            Experience
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

      </div>

    </footer>

  );

}