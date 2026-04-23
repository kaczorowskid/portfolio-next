import { Accordion } from "@/components/ui";
import { ProjectsMobileDetailsItem } from "./projects-mobile-details-item";
import { PROJECTS_DETAILS_DATA } from "../../projects-details.data";

export const ProjectsMobileDetails = () => {
  const allTitles = PROJECTS_DETAILS_DATA.map(({ title }) => title);

  return (
    <Accordion defaultValue={allTitles} type="multiple">
      {PROJECTS_DETAILS_DATA.map((projects, index) => (
        <ProjectsMobileDetailsItem
          key={index}
          count={index + 1}
          projects={projects}
        />
      ))}
    </Accordion>
  );
};
