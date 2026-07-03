"use client";

import SectionTitle
  from "@/components/ui/SectionTitle";

import AnimatedSection
  from "./AnimatedSection";

interface ProjectFeaturesProps {

  features: string[];

}

export default function ProjectFeatures({
  features,
}: ProjectFeaturesProps) {

  return (

    <AnimatedSection>

      <section>

        <SectionTitle
          title="Features"
        />

        <ul
          className="
            mt-6
            space-y-3
          "
        >

          {features.map((feature) => (

            <li
              key={feature}
              className="
                text-slate-300
                leading-7
              "
            >

              • {feature}

            </li>

          ))}

        </ul>

      </section>

    </AnimatedSection>

  );

}