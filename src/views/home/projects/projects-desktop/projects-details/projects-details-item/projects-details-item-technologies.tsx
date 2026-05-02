import type { IconType } from "react-icons";
import { Badge } from "@/components";

type ProjectsDetailsItemTechnologiesProps = {
  technologies: {
    name: string;
    icon: IconType;
  }[];
};

export const ProjectsDetailsItemTechnologies = ({
  technologies,
}: ProjectsDetailsItemTechnologiesProps) => (
  <>
    <p className="pt-10 text-2xl">Technologies I used:</p>
    <div className="flex flex-wrap gap-2 my-10">
      {technologies.map(({ icon: Icon, name }) => (
        <Badge color="black" key={name} leftSection={<Icon />}>
          {name}
        </Badge>
      ))}
    </div>
  </>
);
