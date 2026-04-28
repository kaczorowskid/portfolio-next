import { ProjectsDesktop } from "./projects-desktop/projects-desktop";
import { ProjectsMobile } from "./projects-mobile";

export const Projects = () => (
  <>
    <div className="hidden lg:block">
      <ProjectsDesktop />
    </div>
    <div className="block lg:hidden">
      <ProjectsMobile />
    </div>
  </>
);
