import SectionTitle from "@/components/ui/SectionTitle";

import ExperienceCard
from "@/components/experience/ExperienceCard";

import { experiences }
from "@/data/experience";

export default function ExperiencePage() {

  return (
    <main className="p-8">

      <SectionTitle title="Experience" />

      <div className="mt-8 space-y-6">

        {experiences.map((experience) => (

          <ExperienceCard
            key={experience.company}
            experience={experience}
          />

        ))}

      </div>

    </main>
  );
}
