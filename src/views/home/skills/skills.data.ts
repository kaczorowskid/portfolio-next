import {
  IconBrandAbstract,
  IconBrandCss3,
  IconBrandCypress,
  IconBrandFigma,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBuildingStadium,
  IconCodeVariable,
  IconImageInPicture,
} from "@tabler/icons-react";

export const SKILLS_DATA = {
  frontend: {
    color: "red" as const,
    skills: [
      {
        name: "JavaScript",
        icon: IconBrandReact,
      },
      {
        name: "TypeScript",
        icon: IconBrandTypescript,
      },
      {
        name: "React",
        icon: IconBrandReact,
      },
      {
        name: "Next.js",
        icon: IconBrandNextjs,
      },
      {
        name: "HTML",
        icon: IconBrandHtml5,
      },
      {
        name: "CSS",
        icon: IconBrandCss3,
      },
      {
        name: "Redux",
        icon: IconBrandCss3,
      },
      {
        name: "Zustand",
        icon: IconBrandCss3,
      },
      {
        name: "Tanstack Query",
        icon: IconBrandCss3,
      },
      {
        name: "Tailwind CSS",
        icon: IconBrandTailwind,
      },
      {
        name: "Storybook",
        icon: IconBrandCss3,
      },
      {
        name: "Cypress",
        icon: IconBrandCypress,
      },
      {
        name: "Jest",
        icon: IconBrandAbstract,
      },
    ],
  },
  backend: {
    color: "orange" as const,
    skills: [
      {
        name: "Java Spring Boot",
        icon: IconBrandNodejs,
      },
      {
        name: "Spring Hibernate",
        icon: IconBrandNodejs,
      },
      {
        name: "Node.js",
        icon: IconBrandNodejs,
      },
      {
        name: "Next.js",
        icon: IconImageInPicture,
      },
      {
        name: "express.js",
        icon: IconCodeVariable,
      },
      {
        name: "PostgreSQL",
        icon: IconBuildingStadium,
      },
      {
        name: "Mongo DB",
        icon: IconBrandMongodb,
      },
    ],
  },
  other: {
    color: "purple" as const,
    skills: [
      {
        name: "Claude Code",
        icon: IconBrandGit,
      },
      {
        name: "Nx",
        icon: IconBrandGit,
      },
      {
        name: "Docker",
        icon: IconBrandGit,
      },
      {
        name: "REST",
        icon: IconBrandGit,
      },
      {
        name: "RWD",
        icon: IconBrandGit,
      },
      {
        name: "Git",
        icon: IconBrandGit,
      },
      {
        name: "Figma",
        icon: IconBrandFigma,
      },
    ],
  },
};
