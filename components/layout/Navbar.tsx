import Link from "next/link";
import MobileMenu from "./MobileMenu";
import {profile} from "@/data/profile";
export default function Navbar() {
  return (
    <header className="border-b border-slate-800">

      <nav
        className="
        max-w-6xl
        mx-auto
        px-5
        sm:px-8
        py-5
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
          <span className="
          tracking-tight
          ">
            
            {profile.name.split(" ").map((word)=>word[0]).slice(0,2).join("")}

          </span>
        </Link>

        <div className="
        hidden
        md:flex
        gap-8
        "
        >

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/experience">
            Experience
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

        <MobileMenu />

      </nav>

    </header>
  );
}