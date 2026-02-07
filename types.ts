
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'soft';
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  platform: 'Medium' | 'Dev.to' | 'Personal';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  PORTFOLIO = 'portfolio',
  WRITING = 'writing',
  SERVICES = 'services',
  CONTACT = 'contact'
}
