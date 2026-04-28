type UseAboutItemContentParams = {
  content: string;
  highlightedContent: string;
};

export const useAboutItemContent = ({
  content,
  highlightedContent,
}: UseAboutItemContentParams) => {
  const lowerContent = content.toLowerCase();
  const lowerHighlight = highlightedContent.toLowerCase();

  const index = lowerContent.indexOf(lowerHighlight);

  const before = content.slice(0, index);
  const matched = content.slice(index, index + highlightedContent.length);
  const after = content.slice(index + highlightedContent.length);

  return {
    before,
    matched,
    after,
  };
};
