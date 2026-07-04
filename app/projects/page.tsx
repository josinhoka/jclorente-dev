import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECT_CATEGORIES } from "@/data/projectCategories";
import Link from "next/link"; 
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    // Limitamos el ancho y mejoramos el padding responsivo
    <main className="max-w-6xl mx-auto px-4 py-12 md:px-8 min-h-screen">
      
      <SectionTitle title="Projects" />

      <div className="mt-12 space-y-16">
        {Object.entries(PROJECT_CATEGORIES).map(([category, title]) => {
          const categoryProjects = projects.filter(
            (project) => project.category === category
          );
            
          if (categoryProjects.length === 0) {
            return null;
          }
            
          return (
            <section key={category} className="animate-fade-in">
              {/* Cabecera de categoría más integrada con una línea en gradiente */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-200 whitespace-nowrap">
                  {title}
                </h2>
                <div className="h-px w-full bg-gradient-to-r from-slate-700/80 to-transparent" />
              </div>

              {/* Cambiamos space-y-4 por un Grid moderno y responsivo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group block no-underline text-inherit transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* El ProjectCard recibirá los estados hover gracias a la clase 'group' de arriba */}
                    <ProjectCard project={project} />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}