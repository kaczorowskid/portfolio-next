"use client";

import { ProjectsItemHeader } from "./projects-item-header";
import { ProjectsItemImage } from "./projects-item-image";
import { ProjectsItemWrapper } from "./projects-item-wrapper";

type ProjectsItemProps = {
  portfolio: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    color: string;
  };
};

export const ProjectsItem = ({
  portfolio: { color, description, image, subtitle, title },
}: ProjectsItemProps) => (
  <ProjectsItemWrapper color={color}>
    <ProjectsItemHeader
      title={title}
      subtitle={subtitle}
      description={description}
    />
    <ProjectsItemImage image={image} />
  </ProjectsItemWrapper>
);
