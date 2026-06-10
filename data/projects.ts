import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "waterman",
    title: "Waterman",
    description:
      "Management platform for water sports schools including scheduling, student management, invoicing and operational coordination.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap"
    ],
    featured: true,
    year: "2026",
    github: "",
    features:[
      "Class scheduling",
      "Instructor coordination",
      "Student management",
      "Offers and discounts",
      "Invoicing",
      "Calendar management",
    ],
    architecture: "Laravel monolithic application organised by business modules",
    status: "Paused — planned continuation",
    images: [ 
      //"/images/projects/waterman/idea_form.webp",
      "/images/projects/waterman/calendar.webp",
      "/images/projects/waterman/students_history.webp"
    ],
  },

  {
    slug: "waterman-api",
    title: "Waterman API",
    description:
      "REST API built with Spring Boot and Kafka demonstrating asynchronous communication patterns.",
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
      "University project recreating Frogger in Java with object-oriented design principles.",
    technologies: [
      "Java",
      "Swing"
    ],
    featured: false,
    year: "2008"
  },

  {
    slug: "derecho-publicidad",
    title: "Derecho de la Publicidad",
    description:
      "University portal allowing professors to manage publications and website content autonomously.",
    technologies: [
      "PHP",
      "CodeIgniter",
      "MySQL"
    ],
    featured: false,
    year: "2011"
  }
];