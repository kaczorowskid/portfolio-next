import { SkillsItemHeaderControlsBullet } from "./skills-item-header-controls-bullet";

const BULLET_COLORS = ["red", "orange", "green"] as const;

export const SkillsItemHeaderControls = () => (
  <div className="flex items-center gap-2">
    {BULLET_COLORS.map((bulletColor, index) => (
      <SkillsItemHeaderControlsBullet key={index} color={bulletColor} />
    ))}
  </div>
);
