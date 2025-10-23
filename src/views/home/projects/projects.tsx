import { getSortedPostsData } from "@/lib";
import { ProjectsItem } from "./projects-item";
import { ProjectsWrapper } from "./projects-wrapper";

export const Projects = () => {
  const projects = getSortedPostsData();

  return (
    <ProjectsWrapper>
      {projects.map((portfolio, index) => (
        <ProjectsItem key={index} portfolio={portfolio} />
      ))}
    </ProjectsWrapper>
  );
};
