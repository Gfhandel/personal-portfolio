import React from 'react';
import { Project, Article, Service, Testimonial, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'goshen',
    title: 'Goshen LMS',
    description: 'An eLearning Management System and bridge for transitioning Web2 users to Web3. Features 3 distinct dashboards for Admin, Students, and Partners.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'Django', 'Vue.js', 'Web3'],
    link: '#',
    github: 'https://github.com/Gfhandel/'
  },
  {
    id: 'walletsways',
    title: 'WalletsWays',
    description: 'A robust financial service (Fintech) application deployed for users in Australia and Nepal. Built for secure, high-speed transactions.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    tags: ['Dart', 'Flutter', 'DRF', 'Fintech'],
    link: '#',
    github: 'https://github.com/Gfhandel/'
  },
  {
    id: 'neplay',
    title: 'nePlay',
    description: 'A high-engagement entertainment mobile application (similar to TikTok) featuring real-time video streaming and social interactions.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    tags: ['Flutter', 'Python', 'Django', 'Mobile'],
    link: '#',
    github: 'https://github.com/Gfhandel/'
  },
  {
    id: 'bloom',
    title: 'Bloom Journal',
    description: 'A 365-day gratitude journal application designed to improve mental health through daily reflections and habit tracking.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop',
    tags: ['Flutter', 'Dart', 'UX Design', 'Health'],
    link: '#',
    github: 'https://github.com/Gfhandel/'
  },
  {
    id: 'uniuyo',
    title: 'UniUyo Timetable Automation',
    description: 'A complex automation system built for the Department of Engineering, UniUyo to manage and optimize course scheduling.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?q=80&w=800&auto=format&fit=crop',
    tags: ['PHP', 'MySQL', 'Automation', 'Engineering'],
    link: '#',
    github: 'https://github.com/Gfhandel/'
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Scaling Fintech Solutions globally',
    excerpt: 'Lessons learned while deploying WalletsWays across diverse regulatory markets in Australia and Nepal.',
    date: 'Oct 12, 2023',
    link: '#',
    platform: 'Dev.to'
  },
  {
    id: '2',
    title: 'Web2 to Web3: The UX Bridge',
    excerpt: 'How we designed Goshen to facilitate a seamless transition for traditional learners into the decentralized world.',
    date: 'Jan 28, 2024',
    link: '#',
    platform: 'Medium'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Full-Stack Development',
    description: 'End-to-end web and mobile application development using modern stacks like Django, Vue, and Flutter.',
    icon: '💻'
  },
  {
    id: '2',
    title: 'AI Business Automation',
    description: 'Leveraging AI and custom scripts to automate complex business processes and increase operational efficiency.',
    icon: '🤖'
  },
  {
    id: '3',
    title: 'Backend Engineering',
    description: 'Architecting scalable, secure server-side systems and APIs using Python, Django, and PHP/Laravel.',
    icon: '⚙️'
  },
  {
    id: '4',
    title: 'Mobile App Engineering',
    description: 'Building high-performance, native mobile experiences with Dart and Flutter for iOS and Android.',
    icon: '📱'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Tech Lead',
    role: 'Goshen',
    content: 'Moses single-handedly built the frontend of one of the biggest Edutech SaaS platforms in Nigeria.',
    avatar: 'https://i.pravatar.cc/150?u=techlead'
  },
  {
    id: '2',
    name: 'Dept. Head',
    role: 'UniUyo Engineering',
    content: 'The automation project for our department significantly reduced manual scheduling errors.',
    avatar: 'https://i.pravatar.cc/150?u=uniuyo'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python / Django', level: 98, category: 'backend' },
  { name: 'Dart / Flutter', level: 95, category: 'mobile' },
  { name: 'JavaScript / Vue', level: 94, category: 'frontend' },
  { name: 'PHP / Laravel', level: 90, category: 'backend' },
  { name: 'AWS / DevOps', level: 85, category: 'devops' },
  { name: 'PostgreSQL', level: 92, category: 'backend' },
  { name: 'Rest API Design', level: 96, category: 'backend' },
  { name: 'Nginx / Linux', level: 88, category: 'devops' }
];