import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Buscamos el proyecto por su slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <header style={{ marginBottom: "2rem" }}>
        <a href="/projects" style={{ color: "#0070f3", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Volver a proyectos
        </a>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
          <h1 style={{ fontSize: "2.5rem", margin: 0 }}>{project.title}</h1>
          <span style={{ color: "#666", fontSize: "1.2rem", fontWeight: "300" }}>({project.year})</span>
          {project.featured && (
            <span style={{ background: "#f59e0b", color: "#fff", padding: "0.2rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "bold" }}>
              Destacado
            </span>
          )}
        </div>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#333" }}>
          {project.description}
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Tecnologías utilizadas:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.technologies.map((tech) => (
            <span key={tech} style={{ background: "#eee", padding: "0.3rem 0.6rem", borderRadius: "4px", fontSize: "0.9rem" }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {project.github && (
        //<footer style={{ marginTop: "3rem", paddingTop: "1rem", borderTop: "1px solid #eaeaea" }}>
            <footer>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: "inline-block", background: "#24292e", color: "#fff", padding: "0.5rem 1rem", borderRadius: "6px", textDecoration: "none", fontWeight: "500" }}
          >
            Ver código en GitHub
          </a>
        </footer>
      )}
    </main>
  );
}