import { IconType } from "react-icons";

type ProjectsDesktopImageLinkProps = {
  href: string;
  icon: IconType;
};

export const ProjectsDesktopImageLink = ({
  href,
  icon: Icon,
}: ProjectsDesktopImageLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    <Icon className="size-8" />
  </a>
);
