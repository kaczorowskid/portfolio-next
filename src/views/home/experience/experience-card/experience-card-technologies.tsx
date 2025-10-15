import { Badge } from "@/components";
import { TablerIcon } from "@tabler/icons-react";

type ExperienceCardTechnologiesProps = {
  technologies: {
    name: string;
    icon: TablerIcon;
  }[];
};

export const ExperienceCardTechnologies = ({
  technologies,
}: ExperienceCardTechnologiesProps) => (
  <div className="flex gap-2 flex-wrap">
    {technologies.map(({ icon: Icon, name }, index) => (
      <Badge color="black" key={index} leftSection={<Icon />}>
        {name}
      </Badge>
    ))}
  </div>
);
