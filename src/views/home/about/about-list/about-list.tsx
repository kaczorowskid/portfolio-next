import { AboutItem } from "./about-item";

const ABOUT_ITEMS = [
  {
    content:
      "I'm a passionate developer with expertise in creating modern web applications and digital experiences. I focus on clean code, beautiful design, and seamless user experiences.",
    highlightedContent: "passionate developer",
    hasLine: true,
  },
  {
    content:
      "With years of experience in frontend development, I specialize in React, TypeScript, and modern web technologies. I focus on creating scalable, maintainable, and user-friendly applications.",
    highlightedContent: "frontend development",
    hasLine: false,
  },
  {
    content:
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    highlightedContent: "",
    hasLine: false,
  },
  {
    content:
      "I'm always eager to learn new opportunities and contribute to amazing projects. Let's build something together!",
    highlightedContent: "amazing projects",
    hasLine: true,
  },
];

export const AboutList = () => (
  <div className="max-w-6xl mx-auto grid items-center md:grid-cols-2 gap-x-12 gap-y-8 text-left">
    {ABOUT_ITEMS.map((item, index) => (
      <AboutItem key={index} item={item} />
    ))}
  </div>
);
