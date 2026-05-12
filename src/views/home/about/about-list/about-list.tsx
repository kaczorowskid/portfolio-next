import { AboutItem } from "./about-item";

const ABOUT_ITEMS = [
  {
    content:
      "I'm Damian, a full-stack developer based near Wrocław with over 4 years of commercial experience. I enjoy shipping features end-to-end and feeling at home on both sides of the stack.",
    highlightedContent: "full-stack developer",
    hasLine: true,
  },
  {
    content:
      "Mostly React, Next.js and TypeScript on the frontend, with Spring Boot and Java on the backend. I lean toward boring, well-supported tools that keep a team moving.",
    highlightedContent: "React, Next.js and TypeScript",
    hasLine: false,
  },
  {
    content:
      "Lately my work has revolved around scalable frontend architecture in Nx monorepos, mentoring less experienced devs, and being the person who ends up doing thoughtful code reviews.",
    highlightedContent: "scalable frontend architecture",
    hasLine: false,
  },
  {
    content:
      "I value writing maintainable, readable code and engaging in open technical discussions — both questioning decisions and welcoming the same in return.",
    highlightedContent: "maintainable, readable code",
    hasLine: true,
  },
];

export const AboutList = () => (
  <div className="max-w-6xl mx-auto grid items-center md:grid-cols-2 gap-x-12 gap-y-8 text-left bg-black text-white p-6 lg:p-12 rounded-4xl">
    {ABOUT_ITEMS.map((item) => (
      <AboutItem key={item.highlightedContent} item={item} />
    ))}
  </div>
);
