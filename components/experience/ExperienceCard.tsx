import { Experience } from "@/types/experience";
import TechBadge from "./TechBadge";
import ReactMarkdown from 'react-markdown';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group border border-slate-800/60 rounded-xl p-6 lg:p-8 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-slate-900/80">
      
      {/* Cabecera de la tarjeta: Títulos a la izquierda, Fechas a la derecha */}
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors duration-200">
            {experience.company}
          </h3>
          <p className="text-lg font-medium text-slate-300 mt-1">
            {experience.role}
          </p>
        </div>
        
        <div className="text-left md:text-right shrink-0">
          <p className="text-sm font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2.5 py-1 rounded-md inline-block mb-2 md:mb-1">
            {experience.start} - {experience.end}
          </p>
          <p className="text-sm text-slate-500 block">
            {experience.location}
          </p>
        </div>
      </div>

      {/* Descripción */}
      <div className="mt-4 text-slate-400 leading-relaxed text-sm md:text-base">
       <ReactMarkdown>{experience.description}</ReactMarkdown>
      </div>
      

      {/* Etiquetas */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/50">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      )}

    </div>
  );
}