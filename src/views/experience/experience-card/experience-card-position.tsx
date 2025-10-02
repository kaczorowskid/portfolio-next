type ExperienceCardPositionProps = {
  position: string;
};

export const ExperienceCardPosition = ({
  position,
}: ExperienceCardPositionProps) => <p className="text-lg mb-1">{position}</p>;
