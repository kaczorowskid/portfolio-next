"use client";

import { ExpertiseDetails } from "./expertise-details";
import { ExpertiseImage } from "./expertise-images";
import { ExpertiseWrapper } from "./expertise-wrapper";
import { useExpertise } from "./use-expertise";

export const Expertise = () => {
  const { currentItem, setElementRef } = useExpertise();

  return (
    <ExpertiseWrapper>
      <ExpertiseImage currentItem={currentItem} />
      <ExpertiseDetails
        currentItem={currentItem}
        setElementRef={setElementRef}
      />
    </ExpertiseWrapper>
  );
};
