import { cn } from "@/utils";

type Color = "red" | "orange" | "green";

type SkillsItemHeaderControlsBulletProps = {
  color: Color;
};

const mapColorToTailwindClass = (color: Color) => {
  switch (color) {
    case "red":
      return "bg-[red]";
    case "orange":
      return "bg-[orange]";
    case "green":
      return "bg-[green]";
    default:
      return "bg-[red]";
  }
};

export const SkillsItemHeaderControlsBullet = ({
  color,
}: SkillsItemHeaderControlsBulletProps) => (
  <div className={cn("size-3 rounded-full", mapColorToTailwindClass(color))} />
);
