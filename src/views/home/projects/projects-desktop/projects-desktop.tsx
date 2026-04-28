"use client";

import { PageSection } from "@/components";
import { PROJECTS_DETAILS_DATA } from "../projects-details.data";
import { ProjectsDesktopImage } from "./projects-desktop-images";
import { ProjectsDetails } from "./projects-details";
import { useProjectsDesktop } from "./use-projects-desktop";

export const ProjectsDesktop = () => {
  const { activeIndex, setRef } = useProjectsDesktop(
    PROJECTS_DETAILS_DATA.length,
  );

  return (
    <PageSection id="projects-section" variant="black">
      <PageSection.Title>projects</PageSection.Title>
      <PageSection.Inset>
        <PageSection.Content className="relative grid grid-cols-2 min-h-screen">
          <ProjectsDesktopImage activeIndex={activeIndex} />
          <ProjectsDetails activeIndex={activeIndex} setRef={setRef} />
        </PageSection.Content>
      </PageSection.Inset>
    </PageSection>
  );
};
