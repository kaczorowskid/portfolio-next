type ExperienceCardHeaderMetaProps = {
  period: string;
  location: string;
};

export const ExperienceCardHeaderMeta = ({
  period,
  location,
}: ExperienceCardHeaderMetaProps) => (
  <div>
    <p>{period}</p>
    <p className="text-zinc-300">{location}</p>
  </div>
);
