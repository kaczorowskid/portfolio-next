import { AboutItem } from "./about-item";

const ABOUT_ITEMS = [
  `I'm a passionate developer with expertise in creating modern web applications and digital experiences. I focus on clean code, beautiful design, and seamless user experiences.`,
  `With years of experience in frontend development, I specialize in React, TypeScript, and modern web technologies. I believe in the power of collaboration and continuous learning.`,
  `When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.`,
  `I'm always open to new opportunities and exciting projects. Let's create something amazing together!`,
];

export const AboutList = () => (
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8 text-left">
    {ABOUT_ITEMS.map((item, index) => (
      <AboutItem key={index} text={item} />
    ))}
  </div>
);
