import type { IconType } from "react-icons";
import { Badge } from "@/components";

type ExperienceMobileDetailsCardContentTechnologiesProps = {
  technologies: {
    name: string;
    icon: IconType;
  }[];
};

export const ExperienceMobileDetailsCardContentTechnologies = ({
  technologies,
}: ExperienceMobileDetailsCardContentTechnologiesProps) => (
  <div className="flex gap-2 flex-wrap">
    {technologies.map(({ icon: Icon, name }) => (
      <Badge color="black" key={name} leftSection={<Icon />}>
        {name}
      </Badge>
    ))}
  </div>
);
