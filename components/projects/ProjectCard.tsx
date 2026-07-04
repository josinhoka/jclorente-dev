import React from "react";

interface Project {
  title: string;
  year?: string | number;
  description?: string;
  tags?: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="h-full p-6 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 group-hover:border-sky-400/50 group-hover:bg-slate-900/80 flex flex-col justify-between gap-4">
      
      {/* Contenedor superior: Título, Año y Descripción */}
      <div>
        <div className="flex justify-between items-start gap-4 mb-3">
          {/* Aquí se cambió el color del hover del título */}
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

      {/* Contenedor inferior: Etiquetas de tecnologías */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
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