import type { IconType } from "react-icons";

type ProjectsMobileDetailsItemContentImageLinkProps = {
  href: string;
  icon: IconType;
  project: string;
  type: "github" | "live";
};

export const ProjectsMobileDetailsItemContentImageLink = ({
  href,
  icon: Icon,
  project,
  type,
}: ProjectsMobileDetailsItemContentImageLinkProps) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    data-umami-event="project-event"
    data-umami-event-project={project}
    data-umami-event-type={type}
  >
    <Icon className="size-6" />
  </a>
);
