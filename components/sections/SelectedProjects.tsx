import SectionTitle
from "@/components/ui/SectionTitle";

import ProjectPreview
from "@/components/projects/ProjectPreview";

import { projects }
from "@/data/projects";

export default function SelectedProjects() {

  const featured =
    projects.filter(
      (p) =>
        p.featured
    );

  return (

    <section
      className="
        py-20
      "
    >

      <SectionTitle
        title="Selected Projects"
      />

      <div
        className="
          mt-10

          grid

          gap-6
        "
      >

        {

          featured.map(
            (
              project
            ) => (

              <ProjectPreview
                key={
                  project.slug
                }

                project={
                  project
                }
              />

            )
          )

        }

      </div>

    </section>

  );

}