import SectionTitle
from "@/components/ui/SectionTitle";

import { profile }
from "@/data/profile";

export default function ContactPage() {

  return (

    <main
      className="
        py-16
      "
    >

      <SectionTitle
        title="Contact"
      />

      <div
        className="
          mt-10
          space-y-6
        "
      >

        <a

          href={`mailto:${profile.email}`}

          className="
            block

            text-xl

            hover:text-sky-400
          "
        >

          {profile.email}

        </a>

        <a

          href={profile.linkedin}

          target="_blank"

          className="
            block

            text-xl

            hover:text-sky-400
          "
        >

          LinkedIn

        </a>

        <a

          href={profile.github}

          target="_blank"

          className="
            block

            text-xl

            hover:text-sky-400
          "
        >

          GitHub

        </a>

      </div>

    </main>

  );

}