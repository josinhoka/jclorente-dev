interface PageTitleProps {
  title: string;
  badge?: string;
  // Añadimos estas opciones por si algún día quieres que un título tenga un gradiente azul en lugar de gris
  gradientFrom?: string; 
  gradientTo?: string;
}

export default function PageTitle({ 
  title, 
  badge, 
  gradientFrom = "from-slate-100", 
  gradientTo = "to-slate-400" 
}: PageTitleProps) {
  
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4">
      {/* Añadimos pb-2 aquí para arreglar el fallo de la "g" cortada de Frogger */}
      <h1 className={`text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo} pb-2`}>
        {title}
      </h1>

      {badge && (
        <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-400 shrink-0">
          {badge}
        </span>
      )}
    </div>
  );
}