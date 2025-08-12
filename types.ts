import type { ReactNode, RefObject } from 'react';

export interface Category {
  id: string;
  name: string;
  icon: ReactNode;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface ResumeItem {
  period: string;
  title: string;
  institution: string;
  description?: string;
}

export interface TechSkill {
  name:string;
  icon: ReactNode;
}

export interface TechCategory {
  category: string;
  skills: TechSkill[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  url?: string;
  repoUrl?: string;
  documentationUrl?: string;
  description?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  description: string;
  url: string;
}

export interface ResumeRefs {
  skills: RefObject<HTMLDivElement>;
  jobs: RefObject<HTMLDivElement>;
  educations: RefObject<HTMLDivElement>;
  certificates: RefObject<HTMLDivElement>;
}MLDivElement>;
}
