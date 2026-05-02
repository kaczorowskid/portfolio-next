import type { IconType } from "react-icons";

type ProjectsDesktopImageLinkProps = {
  href: string;
  icon: IconType;
  project: string;
  type: "github" | "live";
};

export const ProjectsDesktopImageLink = ({
  href,
  icon: Icon,
  project,
  type,
}: ProjectsDesktopImageLinkProps) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    data-umami-event="project-event"
    data-umami-event-project={project}
    data-umami-event-type={type}
  >
    <Icon className="size-8" />
  </a>
);
