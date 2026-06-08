import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {

  return (
    <div className="border border-slate-700 rounded-lg p-6 hover:border-sky-400 transition">

      <div className="flex justify-between items-center">

        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <span className="text-slate-400">
          {project.year}
        </span>

      </div>

      <p className="mt-3 text-slate-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">

        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-sm px-2 py-1 rounded bg-slate-800"
          >
            {tech}
          </span>
        ))}

      </div>

    </div>
  );
}