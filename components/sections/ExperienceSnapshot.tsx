export default function ExperienceSnapshot() {
  const highlights = [
    {
      title: "Backend Development",
      text: "Java, Spring Boot, PHP, REST APIs and software architecture."
    },
    {
      title: "Systems Background",
      text: "Linux, automation, databases and production troubleshooting."
    },
    {
      title: "Product Mindset",
      text: "UX, project management and full software lifecycle understanding."
    }
  ];

  return (
    <section className="py-20">
      
      {/* Cabecera adaptada al nuevo estilo con la línea en gradiente */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-200 whitespace-nowrap">
          What I Bring
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-slate-700/80 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <article
            key={item.title}
            // Añadimos la clase 'group' y los efectos de elevación, borde y fondo al hacer hover
            className="group p-6 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-slate-900/80"
          >
            <h3 className="text-lg font-semibold text-slate-100 group-hover:text-sky-400 transition-colors duration-200">
              {item.title}
            </h3>
            
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              {item.text}
            </p>
          </article>
        ))}
      </div>

    </section>
  );
}