type ExperienceCardDescriptionProps = {
  description: string;
};

export const ExperienceCardDescription = ({
  description,
}: ExperienceCardDescriptionProps) => (
  <p className="text-green-600 mb-6 leading-relaxed text-base">{description}</p>
);
