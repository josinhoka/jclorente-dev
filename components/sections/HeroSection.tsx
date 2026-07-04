import { profile } from "@/data/profile";
import Link from "next/link"; // Usamos Link directamente para aplicar las nuevas clases

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 max-w-4xl">
      
      {/* 1. Badge estilo "píldora" (muy común en Vercel/Linear) en lugar de texto plano */}
      <div className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-400 mb-6">
        Portfolio
      </div>

      {/* 2. Nombre con un sutil degradado de blanco a gris para darle profundidad */}
      <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mt-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
        {profile.name}
      </h1>

      <h2 className="mt-6 text-2xl md:text-3xl text-slate-300 font-medium tracking-tight">
        {profile.headline}
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        {profile.description}
      </p>

      {/* 3. Botones actualizados: Primario de alto contraste y secundario "fantasma" */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-100 text-slate-900 font-medium hover:bg-white transition-colors duration-200"
        >
          View Projects
        </Link>

        <Link
          href="/experience"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-200"
        >
          Experience
        </Link>

      </div>

    </section>
  );
}