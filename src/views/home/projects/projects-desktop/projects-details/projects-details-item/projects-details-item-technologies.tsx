import { Badge } from "@/components";
import { IconType } from "react-icons";

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
      {technologies.map(({ icon: Icon, name }, index) => (
        <Badge color="black" key={index} leftSection={<Icon />}>
          {name}
        </Badge>
      ))}
    </div>
  </>
);
