type ExpertiseDetailsItemDescriptionProps = {
  description: string;
};

export const ExpertiseDetailsItemDescription = ({
  description,
}: ExpertiseDetailsItemDescriptionProps) => (
  <p className="mt-10 text-2xl">{description}</p>
);
