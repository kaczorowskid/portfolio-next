type ExperienceCardHeaderHeadingProps = {
  title: string;
  position: string;
};

export const ExperienceCardHeaderHeading = ({
  position,
  title,
}: ExperienceCardHeaderHeadingProps) => (
  <p className="text-2xl font-bold text-wrap">
    {position} | {title}
  </p>
);
