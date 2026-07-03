import SectionTitle
  from "@/components/ui/SectionTitle";

import AnimatedSection
  from "./AnimatedSection";

interface ProjectOverviewProps {

  description: string;

}

export default function ProjectOverview({
  description,
}: ProjectOverviewProps) {

  return (

    <AnimatedSection>

      <section
        className="
          mb-12
        "
      >

        <SectionTitle
          title="Overview"
        />

        <p
          className="
            mt-6
            text-slate-300
            text-lg
            leading-8
          "
        >

          {description}

        </p>

      </section>

    </AnimatedSection>

  );

}