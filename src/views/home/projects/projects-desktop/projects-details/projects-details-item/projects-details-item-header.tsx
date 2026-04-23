type ProjectsDetailsItemHeaderProps = {
  title: string;
};

export const ProjectsDetailsItemHeader = ({
  title,
}: ProjectsDetailsItemHeaderProps) => (
  <div className="border-y text-4xl font-bold py-6 px-2">{title}</div>
);
