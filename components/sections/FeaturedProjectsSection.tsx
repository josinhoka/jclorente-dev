import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

export default function FeaturedProjectsSection() {

  const featuredProjects = projects.filter(
    project => project.featured
  );

  return (
    <section className="mt-20">

      <SectionTitle title="Featured Projects" />

      <div className="mt-6 space-y-4">

        {featuredProjects.map(project => (

          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block"
          >
            <ProjectCard project={project} />
          </Link>

        ))}

      </div>

    </section>
  );
}