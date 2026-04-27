import { IconType } from "react-icons";
import { ProjectsDetailsItemHeader } from "./projects-details-item-header";
import { ProjectsDetailsItemWrapper } from "./projects-details-item-wrapper";
import { ProjectsDetailsItemDescription } from "./projects-details-item-description";
import { ProjectsDetailsItemTechnologies } from "./projects-details-item-technologies";

type ProjectsDetailsItemProps = {
  projects: {
    title: string;
    description: string;
    technologies: {
      name: string;
      icon: IconType;
    }[];
  };
  count: number;
  setElementRef: (el: HTMLDivElement) => void;
  isHiglighted: boolean;
};

export const ProjectsDetailsItem = ({
  projects: { technologies, description, title },
  count,
  setElementRef,
  isHiglighted,
}: ProjectsDetailsItemProps) => (
  <ProjectsDetailsItemWrapper
    isHiglighted={isHiglighted}
    setElementRef={setElementRef}
    count={count}
  >
    <ProjectsDetailsItemHeader title={title} />
    <ProjectsDetailsItemDescription description={description} />
    <ProjectsDetailsItemTechnologies technologies={technologies} />
  </ProjectsDetailsItemWrapper>
);
