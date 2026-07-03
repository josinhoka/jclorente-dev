import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectOverview from "@/components/projects/detail/ProjectOverview";
import ProjectFeatures from "@/components/projects/detail/ProjectFeatures";
import ProjectArchitecture from "@/components/projects/detail/ProjectArchitecture";
import ProjectGallery from "@/components/projects/detail/ProjectGallery";
import ProjectTechStack from "@/components/projects/detail/ProjectTechStack";

interface ProjectPageProps {

  params: Promise<{
    slug: string;
  }>;

}

export async function generateStaticParams() {

  return projects.map((project) => ({
    slug: project.slug,
  }));

}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {

  const { slug } = await params;

  const project =
    projects.find(
      (p) =>
        p.slug === slug
    );

  if (!project) {
    notFound();
  }

  console.log(project);

  return (

    <main 
      className="
      w-full
      max-w-4xl
      mx-auto
      py-16
      px-5
      sm:px-8
      ">

      <Link href="/projects" 
        className="
        text-sky-400
        hover:text-sky-300
        ">
          ← Back to projects
      </Link>

      <header className="
        mt-10
        mb-14
        ">

        <div className="
          flex
          flex-wrap
          items-end
          gap-4
          ">

          <h1 className="
            text-5xl
            font-bold
            ">
            {project.title}
          </h1>

          <span className="
            text-slate-400
            ">
              {project.year}
          </span>

          {project.featured && (

            <span className="
              px-3
              py-1
              rounded
              bg-sky-500
              text-sm
              font-semibold
              ">
              Featured
            </span>
          )}

        </div>

      </header>

      <ProjectOverview description={project.description} />

      <section className="space-y-16">

        { project.features && (
          <ProjectFeatures features={project.features} />
          )
        }
          

        { project.architecture && ( 
            <ProjectArchitecture architecture={project.architecture} /> 
          )
        }


        { project.images && (
            <ProjectGallery title={project.title} images={project.images} /> 
          )
        }

        <ProjectTechStack technologies={project.technologies} />

      </section>

      {project.github && (

        <footer className="
        mt-16
        ">
          {project.private? (
            <span className="
            text-slate-500
            ">
              Private repository
              <br />
              <span className="
              text-slate-600
              text-sm
              ">
                Internal enterprise tool
              </span>
            
            </span>
          )
        
          :( project.github && (
        
          <ButtonLink
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          >
            View on GitHub
            
          </ButtonLink>

          ))}
        
        </footer>

      )}

    </main>

  );

}