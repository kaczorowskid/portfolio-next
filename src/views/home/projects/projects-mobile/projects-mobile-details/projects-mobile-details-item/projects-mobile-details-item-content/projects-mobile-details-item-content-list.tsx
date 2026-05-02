import type { IconType } from "react-icons";
import { Badge } from "@/components";

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
      {technologies.map(({ icon: Icon, name }) => (
        <Badge color="black" key={name} leftSection={<Icon />}>
          {name}
        </Badge>
      ))}
    </div>
  </>
);
