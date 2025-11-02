type ExpertiseDetailsItemHeaderProps = {
  title: string;
};

export const ExpertiseDetailsItemHeader = ({
  title,
}: ExpertiseDetailsItemHeaderProps) => (
  <div className="border-y text-4xl font-bold py-6 px-2">{title}</div>
);
