import { Icon } from "@tabler/icons-react";

type ProjectsDesktopImageLinkProps = {
  href: string;
  icon: Icon;
};

export const ProjectsDesktopImageLink = ({
  href,
  icon: Icon,
}: ProjectsDesktopImageLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    <Icon className="size-8" />
  </a>
);
