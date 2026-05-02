import type { Project } from "../../../projects-details.data";
import { ProjectsDetailsItemDescription } from "./projects-details-item-description";
import { ProjectsDetailsItemHeader } from "./projects-details-item-header";
import { ProjectsDetailsItemTechnologies } from "./projects-details-item-technologies";
import { ProjectsDetailsItemWrapper } from "./projects-details-item-wrapper";

type ProjectsDetailsItemProps = {
  project: Project;
  count: number;
  setRef: (element: HTMLDivElement | null) => void;
  isHighlighted: boolean;
};

export const ProjectsDetailsItem = ({
  project: { technologies, description, title },
  count,
  setRef,
  isHighlighted,
}: ProjectsDetailsItemProps) => (
  <ProjectsDetailsItemWrapper
    isHighlighted={isHighlighted}
    setRef={setRef}
    count={count}
  >
    <ProjectsDetailsItemHeader title={title} />
    <ProjectsDetailsItemDescription description={description} />
    <ProjectsDetailsItemTechnologies technologies={technologies} />
  </ProjectsDetailsItemWrapper>
);
