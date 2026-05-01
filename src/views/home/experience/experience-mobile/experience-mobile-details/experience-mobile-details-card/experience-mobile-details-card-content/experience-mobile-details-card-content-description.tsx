type ExperienceMobileDetailsCardContentDescriptionProps = {
  description: string;
};

export const ExperienceMobileDetailsCardContentDescription = ({
  description,
}: ExperienceMobileDetailsCardContentDescriptionProps) => (
  <p className="text-zinc-300 mb-3 leading-relaxed">{description}</p>
);
