import AnimatedSection
  from "./AnimatedSection";

import SectionTitle
  from "@/components/ui/SectionTitle";

interface ProjectTechStackProps {

  technologies: string[];

}

export default function ProjectTechStack({
  technologies,
}: ProjectTechStackProps) {

  return (

    <AnimatedSection>

      <section>

        <SectionTitle
          title="Tech Stack"
        />

        <div
          className="
            mt-6

            flex
            flex-wrap

            gap-3
          "
        >

          {technologies.map((tech) => (

            <span
              key={tech}

              className="
                px-4
                py-2

                rounded

                bg-slate-800

                text-slate-200
              "
            >

              {tech}

            </span>

          ))}

        </div>

      </section>

    </AnimatedSection>

  );

}

