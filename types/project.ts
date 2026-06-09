export interface Project {

  slug: string;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  year: string;
  github?: string;
  status?: string;
  features?: string[];
  architecture?: string;
  images?: string[];
}
