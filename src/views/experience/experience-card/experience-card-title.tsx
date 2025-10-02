import { List } from "@/components";

type ExperienceCardTitleProps = {
  title: string;
};

export const ExperienceCardTitle = ({ title }: ExperienceCardTitleProps) => (
  <List>
    <List.Item size="medium">
      <p className="text-2xl font-bold">{title}</p>
    </List.Item>
  </List>
);
