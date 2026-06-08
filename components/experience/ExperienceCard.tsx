import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {

  return (
    <div className="border border-slate-700 rounded-lg p-6">

      <div className="flex justify-between">

        <div>

          <h3 className="text-xl font-bold">
            {experience.company}
          </h3>

          <p className="text-slate-400">
            {experience.role}
          </p>

        </div>

        <div className="text-slate-400 text-right">

          <p>
            {experience.start} - {experience.end}
          </p>

          <p>
            {experience.location}
          </p>

        </div>

      </div>

      <p className="mt-4">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">

        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-slate-800 rounded text-sm"
          >
            {tech}
          </span>
        ))}

      </div>

    </div>
  );
}
