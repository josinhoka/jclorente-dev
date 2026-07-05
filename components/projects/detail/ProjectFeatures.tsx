import SectionTitle from "@/components/ui/SectionTitle";

interface ProjectFeaturesProps {
  features: string[];
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className="animate-fade-in">
      
      {/* Nuestro nuevo componente de título estandarizado */}
      <SectionTitle title="Features" />
      
      {/* Grid: 1 columna en móvil, 2 columnas a partir de tablets (sm) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group flex items-start gap-4 p-5 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-slate-900/80"
          >
            {/* Pequeño "led" indicador que reacciona al pasar el ratón (Hover) */}
            <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-all duration-300 shrink-0 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
            
            <span className="text-slate-300 text-sm md:text-base leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
              {feature}
            </span>
            
          </div>
        ))}
        
      </div>

    </section>
  );
}