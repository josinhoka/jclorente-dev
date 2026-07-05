"use client";

import { useRef } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECT_CATEGORIES } from "@/data/projectCategories";
import Link from "next/link"; 
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import PageTitle from "@/components/ui/PageTitle";

// 1. Subcomponente que gestiona cada categoría independientemente
function CategorySection({ title, categoryProjects }: { title: string, categoryProjects: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft } = scrollRef.current;
      // Desplaza el ancho visible
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Solo activamos los botones del carrusel si hay más de 2 proyectos
  const hasCarousel = categoryProjects.length > 2;

  return (
    <section className="animate-fade-in relative group/carousel">
      
      {/* Cabecera de la categoría */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-200 whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-slate-700/80 to-transparent" />
      </div>

      <div className="relative">
        
        {/* Botón Izquierdo (Solo visible si hay > 2 proyectos) */}
        {hasCarousel && (
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:text-sky-400 hover:border-sky-400 hover:bg-slate-800 transition-all shadow-lg opacity-0 md:group-hover/carousel:opacity-100 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}

        {/* CONTENEDOR FLEX: flex-nowrap obliga a que formen una fila infinita */}
        <div 
          ref={scrollRef}
          className="flex flex-row flex-nowrap overflow-x-auto gap-6 snap-x snap-mandatory py-4 -my-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categoryProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              // CLAVES AQUÍ: flex-none evita que se estiren/cojan, w-[calc...] fija el 50% exacto
              className="group relative block no-underline text-inherit transition-all duration-300 hover:-translate-y-1 snap-start flex-none w-[85%] md:w-[calc(50%-0.75rem)] rounded-xl overflow-hidden"
            >
              
             

              {/* Tarjeta principal */}
              <div className="relative z-10 h-full">
                <ProjectCard project={project} />
              </div>

            </Link>
          ))}
        </div>

        {/* Botón Derecho (Solo visible si hay > 2 proyectos) */}
        {hasCarousel && (
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:text-sky-400 hover:border-sky-400 hover:bg-slate-800 transition-all shadow-lg opacity-0 md:group-hover/carousel:opacity-100 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        )}

      </div>
    </section>
  );
}

// 2. Componente de la Página Principal
export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 md:px-8">
      
      <div className="mb-16 pt-4 md:pt-8">

        <PageTitle title="Projects"/>
        
        <div className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-400">
          Technical Portfolio
        </div>
        <p className="mt-6 text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
          A showcase of my work focusing on robust software architecture, backend development, and scalable solutions built for production.
        </p>
      </div>

      <div className="space-y-16">
        {Object.entries(PROJECT_CATEGORIES).map(([category, title]) => {
          
          // Agrupamos los proyectos por categoría
          const categoryProjects = projects.filter(
            (project) => project.category === category
          );
            
          if (categoryProjects.length === 0) {
            return null;
          }
            
          // Instanciamos el bloque independiente
          return (
            <CategorySection 
              key={category} 
              title={title} 
              categoryProjects={categoryProjects} 
            />
          );
        })}
      </div>

    </main>
  );
}