import { Badge } from "@/components";
import { IconType } from "react-icons";

type ProjectsMobileDetailsItemContentListProps = {
  technologies: {
    name: string;
    icon: IconType;
  }[];
};

export const ProjectsMobileDetailsItemContentList = ({
  technologies,
}: ProjectsMobileDetailsItemContentListProps) => (
  <>
    <p className="pt-10 text-xl">Technologies I used:</p>
    <div className="flex flex-wrap gap-2 my-10">
      {technologies.map(({ icon: Icon, name }, index) => (
        <Badge color="black" key={index} leftSection={<Icon />}>
          {name}
        </Badge>
      ))}
    </div>
  </>
);
