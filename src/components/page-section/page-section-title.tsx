type PageSectionTitleProps = {
  title: string;
};

export const PageSectionTitle = ({ title }: PageSectionTitleProps) => (
  <h2 className="text-6xl md:text-9xl font-bold">{title}</h2>
);
