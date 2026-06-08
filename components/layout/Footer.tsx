import { profile } from "@/data/profile";

export default function Footer() {

  return (

    <footer
      className="
        border-t
        border-slate-800
        mt-20
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto

          px-8
          py-8
        "
      >

        <div
          className="
            flex
            justify-between

            flex-wrap
          "
        >

          <p
            className="
              text-slate-400
            "
          >
            © 2026 {profile.name}
          </p>

          <div
            className="
              flex
              gap-6
            "
          >

            <a
              href={profile.github}
              target="_blank"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </footer>

  );

}