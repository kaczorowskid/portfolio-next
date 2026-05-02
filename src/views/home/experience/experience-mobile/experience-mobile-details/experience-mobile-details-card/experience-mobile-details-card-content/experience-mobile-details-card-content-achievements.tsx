import { List } from "@/components";

type ExperienceMobileDetailsCardContentAchievementsProps = {
  achievements: string[];
};

export const ExperienceMobileDetailsCardContentAchievements = ({
  achievements,
}: ExperienceMobileDetailsCardContentAchievementsProps) => (
  <List className="mb-6">
    {achievements.map((achievement) => (
      <List.Item key={achievement}>{achievement}</List.Item>
    ))}
  </List>
);
