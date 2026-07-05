import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function SelectedProjects() {
  // Ahora filtramos estrictamente los proyectos que tengan la propiedad featured a true.
  // Añadimos opcionalmente un .slice(0, 4) al final por si en el futuro marcas 
  // demasiados como destacados y no quieres que la Home crezca infinitamente.
  const featuredProjects = projects
    .filter((project) => project.featured === true)
    .slice(0, 4);

  // Si no hay proyectos destacados, no renderizamos la sección para que no quede un hueco en blanco
  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 animate-fade-in">
      
      {/* Cabecera de la sección con la línea en gradiente */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-200 whitespace-nowrap">
          Selected Projects
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-slate-700/80 to-transparent" />
      </div>

      {/* Grid responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block no-underline text-inherit transition-all duration-300 hover:-translate-y-1"
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
      
      {/* Enlace para ver todos los proyectos */}
      <div className="mt-10 flex justify-end">
        <Link 
          href="/projects" 
          className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2"
        >
          View all projects <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

    </section>
  );
}