import { List } from "@/components";

const SKILLS_ITEMS = [
  "Currently specializing in React & Next.js",
  "Frontend Developer",
];

export const HeroSkills = () => (
  <List className="mb-10">
    {SKILLS_ITEMS.map((item, index) => (
      <List.Item size="small" key={index}>
        {item}
      </List.Item>
    ))}
  </List>
);
