import SectionTitle
  from "@/components/ui/SectionTitle";

import AnimatedSection
  from "./AnimatedSection";

interface ProjectArchitectureProps {

  architecture: string;

}

export default function ProjectArchitecture({
  architecture,
}: ProjectArchitectureProps) {

  return (

    <AnimatedSection>

      <section>

        <SectionTitle
          title="Architecture"
        />

        <p
          className="
            mt-6
            text-slate-300
            leading-8
          "
        >

          {architecture}

        </p>

      </section>

    </AnimatedSection>

  );

}

