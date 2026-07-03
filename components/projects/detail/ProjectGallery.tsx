import Image from "next/image";

import SectionTitle
  from "@/components/ui/SectionTitle";

import AnimatedSection
  from "./AnimatedSection";

interface ProjectGalleryProps {

  title: string;

  images: string[];

}

export default function ProjectGallery({
  title,
  images,
}: ProjectGalleryProps) {

  return (

    <AnimatedSection>

      <section>

        <SectionTitle
          title="Gallery"
        />

        <div
          className="
            mt-8

            grid
            grid-cols-1
            lg:grid-cols-2

            gap-6
          "
        >

          {images.map((image) => (

            <figure
              key={image}
              className="
                rounded-2xl
                overflow-hidden
                bg-slate-900
              "
            >

              <Image

                src={image}

                alt={`${title} screenshot`}

                width={1600}

                height={900}

                loading="lazy"

                className="
                  w-full

                  aspect-video

                  object-contain

                  transition
                  duration-300

                  hover:scale-[1.03]

                  cursor-pointer
                "

              />

              <figcaption
                className="
                  px-5
                  py-4

                  text-sm

                  text-slate-400
                "
              >

                {image
                  .split("/")
                  .pop()
                  ?.replace(".webp", "")
                  .replaceAll("-", " ")}

              </figcaption>

            </figure>

          ))}

        </div>

      </section>

    </AnimatedSection>

  );

}

