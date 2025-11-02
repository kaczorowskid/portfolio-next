import { List } from "@/components";

type ExpertiseMobileDetailsItemContentListProps = {
  bullets: string[];
};

export const ExpertiseMobileDetailsItemContentList = ({
  bullets,
}: ExpertiseMobileDetailsItemContentListProps) => (
  <List className="text-2xl my-10 space-y-10">
    {bullets.map((bullet, index) => (
      <List.Item key={index} size="medium">
        {bullet}
      </List.Item>
    ))}
  </List>
);
