import { useAboutItemContent } from "./use-about-item-content";

type AboutItemProps = {
  content: string;
  highlightedContent: string;
};

export const AboutItemContent = ({
  content,
  highlightedContent,
}: AboutItemProps) => {
  const { before, matched, after } = useAboutItemContent({
    content,
    highlightedContent,
  });

  return (
    <p className="text-xl font-bold">
      {before}
      <span className="text-green-600">{matched}</span>
      {after}
    </p>
  );
};
