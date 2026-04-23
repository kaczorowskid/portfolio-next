import image from "@/assets/images/portfolio.png";
import smartHome from "@/assets/images/smart-home.png";
import board from "@/assets/images/board.png";

export const PROJECTS_DETAILS_DATA = [
  {
    title: "Personal portfolio",
    image: image,
    description:
      "A personal portfolio website built with Next.js to showcase my projects, skills, and experience. Focused on clean design, smooth navigation, and responsiveness across all devices.",
    technologies: [
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind",
      "Typescript",
      "Shadcn/UI",
      "Remark",
      "Zod",
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
      "React",
      "HTML",
      "CSS",
      "Typescript",
      "Zustand",
      "Shadcn/UI",
      "Tanstack-Query",
      "Tailwind",
      "Vitest",
      "Prisma",
      "PostrgeSQL",
      "Nest.js",
      "AVR",
      "Arduino",
      "NodeMCU",
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
      "React",
      "HTML",
      "CSS",
      "Typescript",
      "Zustand",
      "Styled-Components",
      "Tanstack-Query",
      "Antd",
      "express.js",
    ],
  },
];
