type ExperienceDesktopCardDescriptionProps = {
  description: string;
};

export const ExperienceDesktopCardDescription = ({
  description,
}: ExperienceDesktopCardDescriptionProps) => (
  <p className="text-zinc-300 mb-6 leading-relaxed text-xl">{description}</p>
);
