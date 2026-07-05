"use client";

import { useRef } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "./AnimatedSection";

interface ProjectGalleryProps {
  title: string;
  images: string[];
}

export default function ProjectGallery({
  title,
  images,
}: ProjectGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) return null;

  // Solo activamos el carrusel si hay más de 2 imágenes
  const hasCarousel = images.length > 2;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <AnimatedSection>
      <section className="animate-fade-in relative group/carousel">
        
        <SectionTitle title="Gallery" />

        <div className="relative mt-8">
          
          {/* Botón Izquierdo */}
          {hasCarousel && (
            <button 
              onClick={() => scroll("left")}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:text-sky-400 hover:border-sky-400 hover:bg-slate-800 transition-all shadow-lg opacity-0 md:group-hover/carousel:opacity-100 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}

          {/* Contenedor del Carrusel (Misma lógica que en Projects) */}
          <div 
            ref={scrollRef}
            className="flex flex-row flex-nowrap overflow-x-auto gap-6 snap-x snap-mandatory py-4 -my-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image) => {
              const imageName = image
                .split("/")
                .pop()
                ?.replace(".webp", "")
                .replaceAll("-", " ") || "Screenshot";

              return (
                <figure
                  key={image}
                  // flex-none y w-[calc...] obligan a que midan exactamente la mitad y no se estiren
                  className="group relative flex-none w-[85%] md:w-[calc(50%-0.75rem)] snap-start flex flex-col rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-slate-900/80 shadow-lg"
                >
                  <div className="relative w-full aspect-video p-4 flex items-center justify-center bg-gradient-to-br from-slate-950/80 to-slate-900/80">
                    <Image
                      src={image}
                      alt={`${title} - ${imageName}`}
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="w-full h-full object-contain rounded-md transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
                    />
                  </div>

                  <figcaption className="w-full px-5 py-4 text-sm font-medium text-slate-400 border-t border-slate-800/60 group-hover:text-sky-400 transition-colors duration-300 capitalize flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-sky-400 transition-colors duration-300 shadow-sm" />
                    {imageName}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Botón Derecho */}
          {hasCarousel && (
            <button 
              onClick={() => scroll("right")}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:text-sky-400 hover:border-sky-400 hover:bg-slate-800 transition-all shadow-lg opacity-0 md:group-hover/carousel:opacity-100 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          )}

        </div>

      </section>
    </AnimatedSection>
  );
}