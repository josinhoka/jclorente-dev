export interface Project {
  slug: string;

  title: string;

  description: string;

  technologies: string[];

  // Opcional
  github?: string;

  featured: boolean;

  year: string;
}