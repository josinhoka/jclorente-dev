import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function SelectedProjects() {
  // Aquí filtramos los proyectos que quieres destacar en la Home.
  // Ajusta esto según cómo decidas cuáles mostrar (ej. por id, por categoría o simplemente los 4 primeros).
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="mt-20">
      
      {/* Cabecera de la sección con la línea en gradiente */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-200 whitespace-nowrap">
          Selected Projects
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-slate-700/80 to-transparent" />
      </div>

      {/* Grid responsivo: 1 columna en móvil, 2 en pantallas medianas/grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            // La clase "group" aquí es VITAL para que ProjectCard cambie de color (a tu sky-400) al pasar el ratón
            className="group block no-underline text-inherit transition-all duration-300 hover:-translate-y-1"
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
      
      {/* Enlace opcional para llevar al usuario a ver el resto del portfolio */}
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