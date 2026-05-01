type ExperienceDesktopCardHeaderHeadingProps = {
  company: string;
  position: string;
};

export const ExperienceDesktopCardHeaderHeading = ({
  position,
  company,
}: ExperienceDesktopCardHeaderHeadingProps) => (
  <h3 className="text-2xl font-bold text-wrap">
    {position} | {company}
  </h3>
);
