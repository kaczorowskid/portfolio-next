import { List } from "@/components";

type ExperienceCardAchievementsProps = {
  achievements: string[];
};

export const ExperienceCardAchievements = ({
  achievements,
}: ExperienceCardAchievementsProps) => (
  <List className="mb-6">
    {achievements.map((achievement, index) => (
      <List.Item key={index}>{achievement}</List.Item>
    ))}
  </List>
);
