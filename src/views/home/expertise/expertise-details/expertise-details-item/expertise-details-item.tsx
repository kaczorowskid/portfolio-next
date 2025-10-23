import { ExpertiseDetailsItemHeader } from "./expertise-details-item-header";
import { ExpertiseDetailsItemList } from "./expertise-details-item-list";
import { ExpertiseDetailsItemWrapper } from "./expertise-details-item-wrapper";
import { ExpertiseDetailsItemDescription } from "./expertise-details-item-description";

type ExpertiseDetailsItemProps = {
  expertise: {
    title: string;
    description: string;
    bullets: string[];
  };
  count: number;
  setElementRef: (el: HTMLDivElement) => void;
  isHiglighted: boolean;
};

export const ExpertiseDetailsItem = ({
  expertise: { bullets, description, title },
  count,
  setElementRef,
  isHiglighted,
}: ExpertiseDetailsItemProps) => (
  <ExpertiseDetailsItemWrapper
    isHiglighted={isHiglighted}
    setElementRef={setElementRef}
    count={count}
  >
    <ExpertiseDetailsItemHeader title={title} />
    <ExpertiseDetailsItemDescription description={description} />
    <ExpertiseDetailsItemList bullets={bullets} />
  </ExpertiseDetailsItemWrapper>
);
