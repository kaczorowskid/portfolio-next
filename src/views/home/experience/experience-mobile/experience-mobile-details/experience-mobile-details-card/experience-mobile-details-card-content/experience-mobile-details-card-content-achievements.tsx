import { List } from "@/components";

type ExperienceMobileDetailsCardContentAchievementsProps = {
  achievements: string[];
};

export const ExperienceMobileDetailsCardContentAchievements = ({
  achievements,
}: ExperienceMobileDetailsCardContentAchievementsProps) => (
  <List className="mb-6">
    {achievements.map((achievement, index) => (
      <List.Item key={index}>{achievement}</List.Item>
    ))}
  </List>
);
