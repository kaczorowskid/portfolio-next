import { List } from "@/components";

type ExperienceCardAchievementsProps = {
  achievements: string[];
};

export const ExperienceCardAchievements = ({
  achievements,
}: ExperienceCardAchievementsProps) => (
  <div className="mb-6">
    <List>
      {achievements.map((achievement, index) => (
        <List.Item key={index}>{achievement}</List.Item>
      ))}
    </List>
  </div>
);
