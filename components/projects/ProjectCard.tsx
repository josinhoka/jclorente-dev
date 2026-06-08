import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4">

      <h3 className="text-xl font-bold">
        {project.title}
      </h3>

      <p>
        {project.description}
      </p>

      <p>
        {project.year}
      </p>

    </div>
  );
}