import { PROJECTS_DETAILS_DATA } from "../../projects-details.data";
import { ProjectsDetailsItem } from "./projects-details-item";

type ProjectsDetailsProps = {
  activeIndex: number;
  setRef: ((element: HTMLDivElement | null) => void)[];
};

export const ProjectsDetails = ({
  activeIndex,
  setRef,
}: ProjectsDetailsProps) => (
  <div>
    {PROJECTS_DETAILS_DATA.map((project, index) => (
      <ProjectsDetailsItem
        key={project.title}
        count={index + 1}
        project={project}
        setRef={setRef[index]}
        isHighlighted={index <= activeIndex}
      />
    ))}
  </div>
);
