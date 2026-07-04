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
    status: "Prototype completed — further development planned",
    images: [ 
      //"/images/projects/waterman/idea_form.webp",
      "/images/projects/waterman/calendar.webp",
      "/images/projects/waterman/students_history.webp"
    ],
    category: "backend"
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
    featured: false,
    year: "2026",
    github:
      "https://github.com/josinhoka/waterman-api",
    category: "backend"
  },

  {
    slug: "position-management-tool",
    title: "Stock Position Management Tool",
    description:
      "Developed and deployed a Java application to manage stock position creation incidents, automating operational workflows and reducing resolution times from days to minutes while improving process reliability.",
    technologies: [
      "Java",
      "Swing", 
      "Automation"
    ],
    featured: true,
    year: "2016",
    images: [ 
      //"/images/projects/waterman/idea_form.webp",
      "/images/projects/position-management-tool/stook_management_gui.webp"
    ],
    github: "Private project",
    private: true,
    category: "automation"
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
    year: "2011",
    category: "automation"
  },

  {
    slug: "bomberman",
    title: "Java 2D Game Engine",
    description:
      "Object-oriented game engine implementing the core mechanics of Bomberman.",
    technologies: [
      "Java",
      "Swing",
      "OOP",
      "Game Loop",
      "Multithreading"
    ],
    architecture:"The engine is organised into four layers: Presentation, Game Controller, Domain Model and Utilities. Rendering, game logic and entity management are separated to improve maintainability and extensibility while following object-oriented design principles.",
    features: [
      "60 FPS game loop",
      "State machine",
      "Tile-based level system",
      "ASCII level parser",
      "Collision detection",
      "Entity hierarchy",
      "Power-up system",
      "Enemy AI",
      "Audio manager",
      "Object-oriented architecture"
    ],
    featured: true,
    year: "2026",
    github: "https://github.com/josinhoka/bomberman-java-clone",
    images: [
      "/images/projects/bomberman/main-menu.webp",
      "/images/projects/bomberman/gameplay.webp",
      "/images/projects/bomberman/explosion.webp"
    ],
    category: "engineering"
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
    year: "2008",
    category: "engineering"
  },
];