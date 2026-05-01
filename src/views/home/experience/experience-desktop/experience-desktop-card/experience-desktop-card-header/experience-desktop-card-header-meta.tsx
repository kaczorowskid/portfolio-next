type ExperienceDesktopCardHeaderMetaProps = {
  period: string;
  location: string;
};

export const ExperienceDesktopCardHeaderMeta = ({
  period,
  location,
}: ExperienceDesktopCardHeaderMetaProps) => (
  <div>
    <p>{period}</p>
    <p className="text-zinc-300">{location}</p>
  </div>
);
