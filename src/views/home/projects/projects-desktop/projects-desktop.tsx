"use client";

import { ProjectsDesktopImage } from "./projects-desktop-images";
import { ProjectsDesktopWrapper } from "./projects-desktop-wrapper";
import { ProjectsDetails } from "./projects-details";
import { useProjectsDesktop } from "./use-projects-desktop";

export const ProjectsDesktop = () => {
  const { currentItem, setElementRef } = useProjectsDesktop();

  return (
    <ProjectsDesktopWrapper>
      <ProjectsDesktopImage currentItem={currentItem} />
      <ProjectsDetails
        currentItem={currentItem}
        setElementRef={setElementRef}
      />
    </ProjectsDesktopWrapper>
  );
};
