import Link from "next/link";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectPreview({
  project,
}: Props) {

  return (

    <Link
      href={`/projects/${project.slug}`}
      className="
        block

        rounded-2xl

        border

        border-slate-800

        bg-slate-900

        p-6

        hover:border-sky-600

        transition
      "
    >

      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-3
          items-start
        "
      >

        <h3
          className="
            text-2xl

            font-semibold
          "
        >

          {project.title}

        </h3>

        <span
          className="
            text-slate-500
          "
        >

          {project.year}

        </span>

      </div>

      <p
        className="
          mt-4

          text-slate-300
        "
      >

        {project.description}

      </p>

      <div
        className="
          flex

          flex-wrap

          gap-2

          mt-6
        "
      >

        {project.technologies
          .slice(0, 4)
          .map((tech) => (

            <span
              key={tech}

              className="
                px-3
                py-1

                rounded

                bg-slate-800

                text-sm
              "
            >

              {tech}

            </span>

          ))}

      </div>

    </Link>

  );

}