import { ProjectsDetailsItem } from "./projects-details-item";
import { PROJECTS_DETAILS_DATA } from "../../projects-details.data";

type ProjectsDetailsProps = {
  currentItem: number[];
  setElementRef: (element: HTMLDivElement, index: number) => void;
};

export const ProjectsDetails = ({
  currentItem,
  setElementRef,
}: ProjectsDetailsProps) => (
  <div>
    {PROJECTS_DETAILS_DATA.map((projects, index) => (
      <ProjectsDetailsItem
        key={index}
        count={index + 1}
        projects={projects}
        setElementRef={(el) => setElementRef(el, index)}
        isHiglighted={currentItem.includes(index + 1)}
      />
    ))}
  </div>
);
