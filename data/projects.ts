import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "waterman",
    title: "Waterman",
    description:
      "Gestión integral de escuela de deportes acuáticos.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap"
    ],
    featured: true,
    year: "2026",
    github: ""
  },

  {
    slug: "waterman-api",
    title: "Waterman API",
    description:
      "API REST con Spring Boot y Kafka.",
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka"
    ],
    featured: true,
    year: "2026",
    github:
      "https://github.com/josinhoka/waterman-api"
  },

  {
    slug: "frogger",
    title: "Frogger",
    description:
      "Videojuego desarrollado en Java durante la universidad.",
    technologies: [
      "Java",
      "Swing"
    ],
    featured: false,
    year: "2008"
  },

  {
    slug: "publicidad-derecho",
    title: "Publicidad y Derecho",
    description:
      "Portal universitario desarrollado en PHP.",
    technologies: [
      "PHP",
      "CodeIgniter",
      "MySQL"
    ],
    featured: false,
    year: "2011"
  }
];