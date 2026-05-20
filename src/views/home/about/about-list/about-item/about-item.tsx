import { AboutItemContent } from "./about-item-content";
import { AboutItemWrapper } from "./about-item-wrapper";

type AboutItemProps = {
  item: {
    content: string;
    highlightedContent: string;
    hasLine: boolean;
  };
};

export const AboutItem = ({
  item: { content, hasLine, highlightedContent },
}: AboutItemProps) => (
  <AboutItemWrapper hasLine={hasLine}>
    <AboutItemContent
      content={content}
      highlightedContent={highlightedContent}
    />
  </AboutItemWrapper>
);
