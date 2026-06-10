import Link from "next/link";

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
          JC
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

      </nav>

    </header>
  );
}