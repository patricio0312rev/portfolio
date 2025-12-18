export interface JobProject {
  id: string;
  name: string;
  summary?: string;
  bullets: string[];
  technologies?: string[];
  images?: string[];
  website?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "freelance" | "founder";
  startDate: string;
  endDate: string | "present";
  description: string;
  projects: JobProject[];
  achievements?: string[];
  technologies: string[];
  images: string[];
  website?: string;
  featured?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  institutionLogo: string;
  location: string;
  country: string;
  countryFlag: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
  type: "bachelor" | "master" | "specialization" | "diploma";
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  images: string[];
  link?: string;
  category: "academic" | "professional" | "competition";
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  date: string;
  abstract: string;
  keywords: string[];
  link: string;
  image: string;
}

export type Theme = "light" | "dark";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}
