type ExpertiseMobileDetailsItemContentDescriptionProps = {
  description: string;
};

export const ExpertiseMobileDetailsItemContentDescription = ({
  description,
}: ExpertiseMobileDetailsItemContentDescriptionProps) => (
  <p className="mt-10 text-2xl">{description}</p>
);
