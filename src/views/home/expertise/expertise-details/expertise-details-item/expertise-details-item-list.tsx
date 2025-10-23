import { List } from "@/components";

type ExpertiseDetailsItemListProps = {
  bullets: string[];
};

export const ExpertiseDetailsItemList = ({
  bullets,
}: ExpertiseDetailsItemListProps) => (
  <List className="text-2xl my-10 space-y-10">
    {bullets.map((bullet, index) => (
      <List.Item key={index} size="medium">
        {bullet}
      </List.Item>
    ))}
  </List>
);
