type AboutItemProps = {
  content: string;
  highlightedContent: string;
};

export const AboutItemContent = ({
  content,
  highlightedContent,
}: AboutItemProps) => {
  const lowerContent = content.toLowerCase();
  const lowerHighlight = highlightedContent.toLowerCase();

  const index = lowerContent.indexOf(lowerHighlight);

  const before = content.slice(0, index);
  const matched = content.slice(index, index + highlightedContent.length);
  const after = content.slice(index + highlightedContent.length);

  return (
    <p className="text-xl font-bold">
      {before}
      <span className="text-green-600">{matched}</span>
      {after}
    </p>
  );
};
