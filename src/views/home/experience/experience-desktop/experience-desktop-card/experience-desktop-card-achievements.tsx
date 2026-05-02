import { List } from "@/components";

type ExperienceDesktopCardAchievementsProps = {
  achievements: string[];
};

export const ExperienceDesktopCardAchievements = ({
  achievements,
}: ExperienceDesktopCardAchievementsProps) => (
  <List className="mb-6">
    {achievements.map((achievement) => (
      <List.Item key={achievement}>{achievement}</List.Item>
    ))}
  </List>
);
