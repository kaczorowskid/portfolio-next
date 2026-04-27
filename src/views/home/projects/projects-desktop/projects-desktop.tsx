"use client";

import { PROJECTS_DETAILS_DATA } from "../projects-details.data";
import { ProjectsDesktopImage } from "./projects-desktop-images";
import { ProjectsDesktopWrapper } from "./projects-desktop-wrapper";
import { ProjectsDetails } from "./projects-details";
import { useProjectsDesktop } from "./use-projects-desktop";

export const ProjectsDesktop = () => {
  const { activeIndex, setRef } = useProjectsDesktop(
    PROJECTS_DETAILS_DATA.length
  );

  return (
    <ProjectsDesktopWrapper>
      <ProjectsDesktopImage activeIndex={activeIndex} />
      <ProjectsDetails activeIndex={activeIndex} setRef={setRef} />
    </ProjectsDesktopWrapper>
  );
};
