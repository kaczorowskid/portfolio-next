import { ExpertiseDetailsItem } from "./expertise-details-item/expertise-details-item";
import { EXPERTISE_DETAILS_DATA } from "./expertise-details.data";

type ExpertiseDetailsProps = {
  currentItem: number[];
  setElementRef: (element: HTMLDivElement, index: number) => void;
};

export const ExpertiseDetails = ({
  currentItem,
  setElementRef,
}: ExpertiseDetailsProps) => (
  <div>
    {EXPERTISE_DETAILS_DATA.map((expertise, index) => (
      <ExpertiseDetailsItem
        key={index}
        count={index + 1}
        expertise={expertise}
        setElementRef={(el) => setElementRef(el, index)}
        isHiglighted={currentItem.includes(index + 1)}
      />
    ))}
  </div>
);
