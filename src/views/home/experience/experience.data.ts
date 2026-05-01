import {
  SiAntdesign,
  SiCss,
  SiCypress,
  SiHibernate,
  SiHtml5,
  SiJest,
  SiNextdotjs,
  SiNx,
  SiReact,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiSpringboot,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

import cybLogo from "@/assets/logos/codeyourbrand_logo.jpeg";
import codetainLogo from "@/assets/logos/codetain_logo.jpeg";

export type Experience = {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  logo: StaticImageData;
  description: string;
  achievements: string[];
  technologies: {
    name: string;
    icon: IconType;
  }[];
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    achievements: [
      "Delivered and owned end-to-end features for the Two Continents project using Next.js and Spring Boot, ensuring smooth data exchange and performance optimization",
      "Designed and developed scalable frontend architecture using Next.js, React, Zustand, and Tanstack Query within an Nx monorepo, improving maintainability and developer experience",
      "Proactively identified and resolved performance bottlenecks, significantly improving application stability and user experience",
      "Contributed to architectural decisions and technology choices, balancing scalability, performance, and development speed",
      "Built and integrated RESTful services using Spring Boot with modern frontend architecture",
      "Conducted Code Reviews and ensuring code quality standards and architectural consistency throughout the project",
      "Mentored less experienced developers through meticulous code reviews and technical 1-on-1 sessions, focusing on architectural consistency and the adoption of best practices",
    ],
    company: "CodeYourBrand",
    description:
      "I worked as part of a team developing a complex web platform, taking on a role with significant ownership over code quality and technical direction. Beyond implementation, I was actively involved in shaping architectural approaches and team standards. Over time, I became a go-to person within the team, supporting other developers, contributing to technical decision-making, and ensuring consistency across the project.",
    id: "1",
    location: "Warszawa, Remote",
    period: "02.2025 - Present",
    position: "Software Developer",
    logo: cybLogo,
    technologies: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "Spring Hibernate",
        icon: SiHibernate,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Zustand",
        icon: GiBearFace,
      },
      {
        name: "Shadcn",
        icon: SiShadcnui,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Tanstack-Query",
        icon: SiReactquery,
      },
      {
        name: "Storybook",
        icon: SiStorybook,
      },
      {
        name: "Nx",
        icon: SiNx,
      },
      {
        name: "Jest",
        icon: SiJest,
      },
      {
        name: "Vitest",
        icon: SiVitest,
      },
      {
        name: "Cypress",
        icon: SiCypress,
      },
    ],
  },
  {
    achievements: [
      "Developed and maintained a scalable web application using React and Next.js",
      "Designed and implemented new features and reusable UI components, improving code quality through e2e tests using Cypress and regular code reviews",
      "Built and maintained an internal UI component library documented with Storybook, increasing development efficiency and UI consistency",
      "Migrated a legacy JavaScript codebase to TypeScript, improving type safety and long-term maintainability",
      "Collaborated closely with UI/UX designers and backend engineers to deliver consistent, high-quality features",
    ],
    company: "Codetain",
    description:
      "This role was focused on building and evolving the user interface while establishing solid foundations for further application growth. I emphasized writing clean, maintainable code and improving the overall development workflow. The experience helped me strengthen my frontend best practices, cross-team collaboration, and approach to building scalable applications.",
    id: "2",
    location: "Zielona Góra, Hybrid",
    period: "01.2022 - 11.2024",
    position: "Frontend Developer",
    logo: codetainLogo,
    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Zustand",
        icon: GiBearFace,
      },
      {
        name: "Styled-Components",
        icon: SiStyledcomponents,
      },
      {
        name: "Tanstack-Query",
        icon: SiReactquery,
      },
      {
        name: "Antd",
        icon: SiAntdesign,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Jest",
        icon: SiJest,
      },
      {
        name: "Cypress",
        icon: SiCypress,
      },
    ],
  },
];
