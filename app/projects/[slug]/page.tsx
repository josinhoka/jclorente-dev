import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectOverview from "@/components/projects/detail/ProjectOverview";
import ProjectFeatures from "@/components/projects/detail/ProjectFeatures";
import ProjectArchitecture from "@/components/projects/detail/ProjectArchitecture";
import ProjectGallery from "@/components/projects/detail/ProjectGallery";
import ProjectTechStack from "@/components/projects/detail/ProjectTechStack";
import PageTitle from "@/components/ui/PageTitle";

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

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full max-w-4xl mx-auto py-12 px-6 md:px-8">
      
      {/* Botón de volver más refinado */}
      <Link 
        href="/projects" 
        className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors mb-12"
      >
        <span className="transform transition-transform group-hover:-translate-x-1">←</span> 
        Back to projects
      </Link>

      <header className="mb-16 border-b border-slate-800/60 pb-10">
        
        {/* Usamos el nuevo componente parametrizado. 
            Le pasamos el título, y opcionalmente el badge si es "featured" */}
        <PageTitle 
          title={project.title} 
          badge={project.featured ? "Featured" : undefined} 
        />

        {/* Mantenemos el año justo debajo para no sobrecargar la línea del título */}
        <div className="mt-2">
          <span className="font-mono text-sm text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2.5 py-1 rounded-md">
            {project.year}
          </span>
        </div>

      </header>

      <div className="space-y-20">
        <ProjectOverview description={project.description} />

        {project.features && (
          <ProjectFeatures features={project.features} />
        )}

        {project.architecture && ( 
          <ProjectArchitecture architecture={project.architecture} /> 
        )}

        {project.images && (
          <ProjectGallery title={project.title} images={project.images} /> 
        )}

        <ProjectTechStack technologies={project.technologies} />
      </div>

      <footer className="mt-20 pt-10 border-t border-slate-800/60">
        {project.github && (
          project.private ? (
            <div className="inline-flex flex-col items-start gap-1 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
              <span className="text-slate-300 font-medium flex items-center gap-2">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Private Repository
              </span>
              <span className="text-slate-500 text-sm">
                Internal enterprise tool
              </span>
            </div>
          ) : (
            <ButtonLink
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </ButtonLink>
          )
        )}
      </footer>

    </main>
  );
}