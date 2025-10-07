import { List } from "@/components";

const SKILLS_ITEMS = [
  "Currently specializing in React & Next.js",
  "Full Stack Developer",
];

export const HeroSkills = () => (
  <div className="mb-10">
    <List>
      {SKILLS_ITEMS.map((item, index) => (
        <List.Item size="small" key={index}>
          {item}
        </List.Item>
      ))}
    </List>
  </div>
);
