import {
  SiAntdesign,
  SiArduino,
  SiCss,
  SiEspressif,
  SiExpress,
  SiHtml5,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";

import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

import image from "@/assets/images/portfolio.png";
import smartHome from "@/assets/images/smart-home.png";
import board from "@/assets/images/board.png";

export type Project = {
  title: string;
  image: StaticImageData;
  description: string;
  technologies: {
    name: string;
    icon: IconType;
  }[];
  live?: string;
  github?: string;
};

export const PROJECTS_DETAILS_DATA: Project[] = [
  {
    title: "Personal portfolio",
    image: image,
    description:
      "A personal portfolio website built with Next.js to showcase my projects, skills, and experience. Focused on clean design, smooth navigation, and responsiveness across all devices.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Shadcn/UI", icon: SiShadcnui },
    ],
    live: "https://",
    github: "https://github.com",
  },
  {
    title: "Smart Home System",
    image: smartHome,
    description:
      "The Smart Home System is an application designed to centralize control over various home resources, such as blinds and temperature sensors, enhancing comfort, efficiency, and ease of management. This system seamlessly integrates with physical devices and provides a user-friendly web interface for monitoring and control.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Zustand", icon: GiBearFace },
      { name: "Shadcn/UI", icon: SiShadcnui },
      { name: "Tanstack-Query", icon: SiReactquery },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vitest", icon: SiVitest },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Nest.js", icon: SiNestjs },
      { name: "AVR", icon: FaMicrochip },
      { name: "Arduino", icon: SiArduino },
      { name: "NodeMCU", icon: SiEspressif },
    ],
    live: undefined,
    github: "https://github.com",
  },
  {
    title: "Ticket tracker",
    image: board,
    description:
      "A simple issue tracking application inspired by Jira, built to manage tasks, boards, and workflows in a clear and intuitive way. It allows users to create and organize tickets, track their status, and get a quick overview of recent activity through a clean dashboard with basic statistics and notes. Designed as a lightweight tool for improving task management and productivity.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Zustand", icon: GiBearFace },
      { name: "Styled-Components", icon: SiStyledcomponents },
      { name: "Tanstack-Query", icon: SiReactquery },
      { name: "Antd", icon: SiAntdesign },
      { name: "Express.js", icon: SiExpress },
    ],
  },
];
