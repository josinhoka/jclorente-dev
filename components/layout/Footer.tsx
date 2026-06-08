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

        <p className="text-slate-400">

          © 2026 {profile.name}

        </p>

      </div>

    </footer>
  );
}