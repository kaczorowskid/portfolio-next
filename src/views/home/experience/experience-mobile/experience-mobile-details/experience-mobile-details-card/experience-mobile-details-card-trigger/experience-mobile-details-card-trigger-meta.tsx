type ExperienceMobileDetailsCardTriggerMetaProps = {
  company: string;
  period: string;
  position: string;
};

export const ExperienceMobileDetailsCardTriggerMeta = ({
  company,
  position,
  period,
}: ExperienceMobileDetailsCardTriggerMetaProps) => (
  <div className="w-full">
    <h3 className="text-2xl">{position}</h3>
    <p className="text-zinc-300">
      {company} | {period}
    </p>
  </div>
);
