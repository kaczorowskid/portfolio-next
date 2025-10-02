type ExperienceCardLocationProps = {
  location: string;
};

export const ExperienceCardLocation = ({
  location,
}: ExperienceCardLocationProps) => (
  <p className="text-sm text-gray-400 mb-6">{location}</p>
);
