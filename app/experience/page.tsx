import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { softwareExperience, operationsExperience } from "@/data/experience";
import PageTitle from "@/components/ui/PageTitle";

export default function ExperiencePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 md:px-8">
      
      {/* Cabecera principal de la página de Experiencia */}
      <div className="mb-16 md:mb-20 pt-4 md:pt-8">
        
        {/* Título grande y contundente */}
         <PageTitle title="Experience"/>
        
        {/* Badge estilo píldora para destacar los años */}
        <div className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-400">
          11+ Years of Professional Experience
        </div>
        
        {/* Pequeño texto introductorio para "anclar" la sección (Opcional) */}
        <p className="mt-6 text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
          Bridging systems administration, operations, and software engineering to build robust, scalable, and highly available architectures.
        </p>
        
      </div>

      {/* Bloque 1: Software Engineering and Systems Experience */}
      <section className="mt-12 animate-fade-in">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-200 whitespace-nowrap">
            Software Engineering & Systems
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-slate-700/80 to-transparent" />
        </div>

        {/* CONTENEDOR DE LA LÍNEA DEL TIEMPO */}
        {/* border-l dibuja la línea vertical. ml-3 la separa un poco del borde izquierdo */}
        <div className="relative border-l border-slate-700/50 ml-3 md:ml-4 space-y-8">
          {softwareExperience.map((experience) => (
            <div key={experience.company} className="relative pl-8 md:pl-10 group">
              
              {/* PUNTO DE LA LÍNEA DEL TIEMPO */}
              {/* Se posiciona absolutamente sobre la línea. Cambia de color sutilmente al pasar el ratón por la tarjeta */}
              <div className="absolute w-3 h-3 bg-slate-900 border-2 border-slate-600 rounded-full -left-[6.5px] top-8 transition-colors duration-300 group-hover:border-sky-400 group-hover:bg-sky-400/20" />
              
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </section>

      {/* Bloque 2: Team Management and Operations */}
      <section className="mt-20 animate-fade-in">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-200 whitespace-nowrap">
            Team Management & Operations
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-slate-700/80 to-transparent" />
        </div>

        {/* MISMO EFECTO DE LÍNEA DEL TIEMPO PARA EL SEGUNDO BLOQUE */}
        <div className="relative border-l border-slate-700/50 ml-3 md:ml-4 space-y-8">
          {operationsExperience.map((experience) => (
            <div key={experience.company} className="relative pl-8 md:pl-10 group">
              
              <div className="absolute w-3 h-3 bg-slate-900 border-2 border-slate-600 rounded-full -left-[6.5px] top-8 transition-colors duration-300 group-hover:border-sky-400 group-hover:bg-sky-400/20" />
              
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}