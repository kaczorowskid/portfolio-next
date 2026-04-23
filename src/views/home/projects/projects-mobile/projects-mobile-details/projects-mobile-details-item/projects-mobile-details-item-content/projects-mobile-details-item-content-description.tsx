type ProjectsMobileDetailsItemContentDescriptionProps = {
  description: string;
};

export const ProjectsMobileDetailsItemContentDescription = ({
  description,
}: ProjectsMobileDetailsItemContentDescriptionProps) => (
  <p className="mt-10 text-2xl">{description}</p>
);
