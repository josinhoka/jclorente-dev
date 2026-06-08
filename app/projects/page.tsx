import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";

// 1. Importamos el componente Link oficial de Next.js
import Link from "next/link"; 

import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
     <main className="p-8">

      <SectionTitle title="Projects" />

      <div className="mt-6 space-y-4">

        {projects.map((project) => (

          // 2. Movemos el 'key' al elemento raíz y cambiamos <a> por <Link>
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="block" // Opcional: hace que todo el espacio de la tarjeta sea cliqueable
          >
            <ProjectCard project={project} />
          </Link>
        ))}

      </div>

    </main>
  );
}