import { Accordion } from "@/components/ui";
import { PROJECTS_DETAILS_DATA } from "../../projects-details.data";
import { ProjectsMobileDetailsItem } from "./projects-mobile-details-item";

export const ProjectsMobileDetails = () => {
  const allTitles = PROJECTS_DETAILS_DATA.map(({ title }) => title);

  return (
    <Accordion defaultValue={allTitles} type="multiple">
      {PROJECTS_DETAILS_DATA.map((project, index) => (
        <ProjectsMobileDetailsItem
          key={project.title}
          count={index + 1}
          project={project}
        />
      ))}
    </Accordion>
  );
};
