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
        name: "React",
        icon: IconBrandReact,
      },
      {
        name: "Next.js",
        icon: IconBrandNextjs,
      },
      {
        name: "TypeScript",
        icon: IconBrandTypescript,
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
        name: "Tailwind CSS",
        icon: IconBrandTailwind,
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
        name: "postgresql",
        icon: IconBuildingStadium,
      },
      {
        name: "Mongo DB",
        icon: IconBrandMongodb,
      },
    ],
  },
  others: {
    color: "purple" as const,
    skills: [
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
