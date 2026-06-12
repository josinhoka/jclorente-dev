import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

interface ProjectPageProps {

  params: Promise<{
    slug: string;
  }>;

}

export async function generateStaticParams() {

  return projects.map((project) => ({
    slug: project.slug,
  }));

}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {

  const { slug } = await params;

  const project =
    projects.find(
      (p) =>
        p.slug === slug
    );

  if (!project) {
    notFound();
  }

  return (

    <main 
      className="
      w-full
      max-w-4xl
      mx-auto
      py-16
      px-5
      sm:px-8
      ">

      <Link href="/projects" 
        className="
        text-sky-400
        hover:text-sky-300
        ">
          ← Back to projects
      </Link>

      <header className="
        mt-10
        mb-14
        ">

        <div className="
          flex
          flex-wrap
          items-end
          gap-4
          ">

          <h1 className="
            text-5xl
            font-bold
            ">
            {project.title}
          </h1>

          <span className="
            text-slate-400
            ">
              {project.year}
          </span>

          {project.featured && (

            <span className="
              px-3
              py-1
              rounded
              bg-sky-500
              text-sm
              font-semibold
              ">
              Featured
            </span>
          )}

        </div>

      </header>

      <section className="
        mb-12
        ">

        <SectionTitle title="Overview" />

        <p className="
          mt-6
          text-slate-300
          text-lg
          leading-8
          ">
            {project.description}
        </p>
      </section>

      <section className="space-y-16">
        
        {project.features && (

          <section>
            <SectionTitle
              title="Features"
              />
              <ul className="mt-6 space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                    text-slate-300
                    leading-7
                    ">

                    • {feature}

                  </li>
                ))}
              </ul>
          </section>
        )}

        {project.architecture && (
          <section>
            <SectionTitle title="Architecture" />
            <p className="
              mt-6
              text-slate-300
              leading-8
              ">
              {project.architecture}
            </p>

          </section>
        )}

        {project.images && (
            <section>
              <SectionTitle title="Gallery" />
              <div className="
                mt-8
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-6
                ">
                
                {project.images.map((image) => (
                  <figure key={image}
                    className="
                    rounded-2xl
                    overflow-hidden
                    border
                    border-slate-800
                    bg-slate-900
                    ">
                      
                      <Image src={image} 
                        alt={`${project.title} screenshot`}
                        width={1400}
                        height={900}
                        loading="lazy"
                        className="
                        w-full
                        transition
                        hover:scale-[1.03]
                        cursor-pointer
                        aspect-video
                        object-cover
                        "/>
                      
                        <figcaption className="
                          px-5
                          py-4
                          text-sm
                          text-slate-400
                          ">
                        
                            {image.split("/").pop()?.replace(".webp","").replace("-"," ")}
                      
                        </figcaption>
                  
                  </figure>
                ))}

                  </div>
                  </section>
                  )}

                  <section>
                    <SectionTitle title="Tech Stack" />
                      <div className="
                        mt-6
                        flex
                        flex-wrap
                        gap-3
                        ">
                        
                        {project.technologies.map((tech) => (
                          
                          <span key={tech} className="
                            px-4
                            py-2
                            rounded
                            bg-slate-800
                            text-slate-200
                            ">
                              {tech}
                          </span>

                        ))}

                      </div>
                    </section>
                  </section>

      {project.github && (

        <footer
          className="
            mt-16
            ">

          <ButtonLink
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            >
              View on GitHub
          </ButtonLink>

        </footer>

      )}

    </main>

  );

}