

import React from 'react';
import type { Category, SocialLink, ResumeItem, TechCategory, Project } from './types';
import { 
  Github, Linkedin, Send, Phone, Mail, User, Shapes, Briefcase, FolderGit2, GraduationCap,
  Sparkles, BrainCircuit, Wind, Shield, Link as LinkIcon
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Craig Magagula',
  about: 'A detail-oriented Full-Stack Developer specializing in Artificial Intelligence and Machine Learning. Passionate about building intelligent, data-driven applications that solve real-world problems. My objective is to leverage my skills in modern frontend frameworks and AI/ML APIs to contribute to innovative projects and grow as an AI/ML Engineer.',
  email: 'craigthabo0@gmail.com',
  phone: '+1 123 456 7890',
  cvUrl: 'https://capeitinitiative.sharepoint.com/sites/DemandProgramme2JHBITsupport/Shared%20Documents/General/Personal%20branding/Craig%20Magagula/(Craig)%202024%20Candidate%20CV%20V2.pdf?CT=1754431889182'
};

export const CATEGORIES: Category[] = [
  { id: 'about', name: 'About', icon: <User size={18}/> },
  { id: 'skills', name: 'Skills', icon: <Shapes size={18}/> },
  { id: 'jobs', name: 'Jobs', icon: <Briefcase size={18}/> },
  { id: 'projects', name: 'Projects', icon: <FolderGit2 size={18}/> },
  { id: 'educations', name: 'Educations', icon: <GraduationCap size={18}/> },
];

export const SOCIALS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/craig-magagula/', icon: <Linkedin size={18}/> },
  { name: 'GitHub', url: 'https://github.com/CraigMagagula', icon: <Github size={18}/> },
  { name: 'Phone', url: `tel:${PERSONAL_INFO.phone}`, icon: <Phone size={18}/> },
  { name: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: <Mail size={18}/> },
];

export const TYPING_TITLES = ['AI/ML Engineer', 'Prompt Engineer', 'Front-End Developer'];

export const CONTACT_DETAILS = [
  {
    icon: <Mail size={24} className="text-teal-400" />,
    text: PERSONAL_INFO.email,
  },
  {
    icon: <Phone size={24} className="text-teal-400" />,
    text: PERSONAL_INFO.phone,
  },
];

const SkillIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 flex items-center justify-center">{children}</div>
);

export const TECH_STACK: TechCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <SkillIcon><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /></SkillIcon> },
      { name: 'CSS3', icon: <SkillIcon><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /></SkillIcon> },
      { name: 'JavaScript', icon: <SkillIcon><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /></SkillIcon> },
      { name: 'React', icon: <SkillIcon><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /></SkillIcon> },
      { name: 'FlutterFlow', icon: <SkillIcon><Wind size={48} className="text-blue-400" /></SkillIcon> },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Gemini API', icon: <SkillIcon><Sparkles size={48} className="text-purple-400" /></SkillIcon> },
      { name: 'OpenAI', icon: <SkillIcon><BrainCircuit size={48} className="text-green-400" /></SkillIcon> },
    ],
  },
  {
    category: 'Databases & Cloud',
    skills: [
      { name: 'Google Cloud', icon: <SkillIcon><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" /></SkillIcon> },
      { name: 'Azure', icon: <SkillIcon><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" /></SkillIcon> },
    ],
  },
  {
    category: 'AI & ML Tools',
    skills: [
      { name: 'Gemini', icon: <SkillIcon><Sparkles size={48} className="text-purple-400" /></SkillIcon> },
      { name: 'OpenAI', icon: <SkillIcon><BrainCircuit size={48} className="text-green-400" /></SkillIcon> },
      { name: 'Stability AI', icon: <SkillIcon><Shapes size={48} className="text-pink-400" /></SkillIcon> },
      { name: 'LangChain', icon: <SkillIcon><LinkIcon size={48} className="text-yellow-400" /></SkillIcon> },
      { name: 'AIF360', icon: <SkillIcon><Shield size={48} className="text-red-400" /></SkillIcon> },
    ],
  },
];


export const EDUCATIONS: ResumeItem[] = [
  {
    period: '2022 - 2023',
    title: 'System Development',
    institution: 'The Finishing College',
  },
];

export const JOBS: ResumeItem[] = [
    {
    period: '2025 - Present',
    title: 'IT Support Learnership',
    institution: 'Capaciti',
  },
  {
    period: '2023 - 2024',
    title: 'Graphic designer',
    institution: 'Opentel',
  },
];

export const PROJECTS: Project[] = [
  { 
    title: 'Bias Audit Report', 
    category: 'AI/ML', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3', 
    url: '#',
    repoUrl: '#',
    documentationUrl: '#'
  },
  { 
    title: 'AI Prototype', 
    category: 'Websites', 
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3', 
    url: 'https://www.figma.com/proto/t5oNvi6IN6kmGQoE4pD9m3/iHealth---pharmacy-and-health-UI-kit--Community-?node-id=0-1&t=mSexPT8MLpqzfKo8-1',
    repoUrl: '#',
    documentationUrl: 'https://capeitinitiative-my.sharepoint.com/:w:/g/personal/mbali_vilakazi_capaciti_org_za/EbRSxNAek01Dhc6ggw83Iy8BQuEgC6LXS0-3c6-2-kV28g?e=jSEP8k'
  },
  { 
    title: 'AI Chatbot Project', 
    category: 'Websites', 
    image: 'https://media.istockphoto.com/id/1445426863/vector/chat-bot-vector-logo-design-concept.jpg?s=612x612&w=0&k=20&c=XDdfzS4lNW9yxQ0BQGZq9KMLL4bJ8ywXlYdAhBSuoCA=', 
    url: 'https://landbot.online/v3/H-2940542-BMFIZK3JPWO9T9L4/index.html',
    repoUrl: 'https://github.com/CraigMagagula/BotKnows.git',
    documentationUrl: 'https://capeitinitiative-my.sharepoint.com/:w:/g/personal/craig_magagula_capaciti_org_za/Ea8TzZhO-elBpE91TG0mrj4BuMiQ7iy7sanI7_JyTgo86A?e=7ScPjv'
  },
  { 
    title: 'SmartEd - AI Learning Platform', 
    category: 'Websites', 
    image: 'https://static.vecteezy.com/system/resources/previews/016/116/310/non_2x/smart-idea-logo-education-icon-illustration-vector.jpg', 
    url: 'https://smart-ed-two.vercel.app/',
    repoUrl: 'https://github.com/CraigMagagula/SmartEd.git',
    documentationUrl: 'https://capeitinitiative-my.sharepoint.com/:w:/g/personal/mbali_vilakazi_capaciti_org_za/EbcIodWck4tHmDOViQdAnFkBo3ZrT9MBuBcTmjpgyko7BA?e=iDHyGg'
  },
  { 
    title: 'Edu-Tech Platform', 
    category: 'Websites', 
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800', 
    url: 'https://edu-tech-sand.vercel.app/',
    repoUrl: 'https://github.com/CraigMagagula/edu-tech',
    documentationUrl: 'https://github.com/CraigMagagula/edu-tech/blob/main/README.md'
  },
  { 
    title: 'Interactive Resume Builder', 
    category: 'Websites', 
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800', 
    url: 'https://resume-2-0-taupe.vercel.app/',
    repoUrl: 'https://github.com/CraigMagagula/resume-2.0.git',
    documentationUrl: 'https://capeitinitiative-my.sharepoint.com/:w:/g/personal/mbali_vilakazi_capaciti_org_za/ERwRdXO4CjZJm6AcY9XxoXEBbSiN-gdyJG0STelAU8d1BA?e=QIZqqA'
  },
  { 
    title: 'Sentiment Analysis App', 
    category: 'Websites', 
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800', 
    url: 'https://sentiment-analysis-week.streamlit.app/',
    repoUrl: 'https://github.com/CraigMagagula/Sentiment-Analysis.git',
    documentationUrl: 'https://capeitinitiative-my.sharepoint.com/:w:/g/personal/craig_magagula_capaciti_org_za/EScVPU_cZoJFsUA3e_llwXcBLMl1__uWueDY1qUQTxouew?e=wsaTpt'
  },
];
