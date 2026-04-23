type ExperienceCardDescriptionProps = {
  description: string;
};

export const ExperienceCardDescription = ({
  description,
}: ExperienceCardDescriptionProps) => (
  <p className="text-zinc-300 mb-6 leading-relaxed text-xl">{description}</p>
);
