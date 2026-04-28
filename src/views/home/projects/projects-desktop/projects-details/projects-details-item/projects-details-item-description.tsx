type ProjectsDetailsItemDescriptionProps = {
  description: string;
};

export const ProjectsDetailsItemDescription = ({
  description,
}: ProjectsDetailsItemDescriptionProps) => (
  <p className="mt-10 text-2xl">{description}</p>
);
