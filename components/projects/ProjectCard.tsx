import React from "react";

interface Project {
  title: string;
  year?: string | number;
  description?: string;
  tags?: string[];
  featured?: boolean; // Añadido para que TypeScript reconozca la propiedad
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // Añadimos 'relative' y 'overflow-hidden' al contenedor principal
    <div className="relative h-full p-6 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 group-hover:border-sky-400/50 group-hover:bg-slate-900/80 flex flex-col justify-between gap-4 overflow-hidden">
      
      {/* === ESTILOS CONDICIONALES PARA DESTACADOS === */}
      {/* Al estar aquí dentro, se renderizan POR ENCIMA del desenfoque del cristal */}
      {project.featured && (
        <>
          {/* Imagen nítida. Usa la opacidad para jugar con la intensidad (0.3 a 1.0) 
          {/*<div 
            className="absolute inset-0 z-0 pointer-events-none bg-no-repeat opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            style={{ 
              backgroundImage: "url('/images/fondo_texto.png')",
              backgroundSize: '15% auto',
              backgroundPosition: 'center top'
            }}
          />*/}
          
          {/* Gradiente sutil para fundir la izquierda de la imagen con el fondo oscuro de la tarjeta */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
          
          {/* Subrayado Azul Clarito inferior */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-400/80 z-20 opacity-80 group-hover:opacity-100 transition-opacity" />
        </>
      )}

      {/* Contenedor superior: Título, Año y Descripción (Z-10 para estar sobre la imagen) */}
      <div className="relative z-10">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-semibold text-lg text-slate-100 group-hover:text-sky-400 transition-colors duration-200">
            {project.title}
          </h3>
          
          {project.year && (
            <span className="text-xs font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2 py-1 rounded-md shrink-0">
              {project.year}
            </span>
          )}
        </div>
        
        <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Contenedor inferior: Etiquetas de tecnologías (Z-10 para estar sobre la imagen) */}
      {project.tags && project.tags.length > 0 && (
        <div className="relative z-10 flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
    </div>
  );
}