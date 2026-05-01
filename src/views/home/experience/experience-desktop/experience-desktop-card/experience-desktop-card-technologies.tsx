import { Badge } from "@/components";
import { IconType } from "react-icons";

type ExperienceDesktopCardTechnologiesProps = {
  technologies: {
    name: string;
    icon: IconType;
  }[];
};

export const ExperienceDesktopCardTechnologies = ({
  technologies,
}: ExperienceDesktopCardTechnologiesProps) => (
  <div className="flex gap-2 flex-wrap">
    {technologies.map(({ icon: Icon, name }, index) => (
      <Badge color="black" key={index} leftSection={<Icon />}>
        {name}
      </Badge>
    ))}
  </div>
);
