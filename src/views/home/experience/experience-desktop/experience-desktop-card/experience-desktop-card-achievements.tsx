import { List } from "@/components";

type ExperienceDesktopCardAchievementsProps = {
  achievements: string[];
};

export const ExperienceDesktopCardAchievements = ({
  achievements,
}: ExperienceDesktopCardAchievementsProps) => (
  <List className="mb-6">
    {achievements.map((achievement, index) => (
      <List.Item key={index}>{achievement}</List.Item>
    ))}
  </List>
);
