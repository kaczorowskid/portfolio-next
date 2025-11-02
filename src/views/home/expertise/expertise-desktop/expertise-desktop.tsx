"use client";

import { ExpertiseDesktopImage } from "./expertise-desktop-images";
import { ExpertiseDesktopWrapper } from "./expertise-desktop-wrapper";
import { ExpertiseDetails } from "./expertise-details";
import { useExpertiseDesktop } from "./use-expertise-desktop";

export const ExpertiseDesktop = () => {
  const { currentItem, setElementRef } = useExpertiseDesktop();

  return (
    <ExpertiseDesktopWrapper>
      <ExpertiseDesktopImage currentItem={currentItem} />
      <ExpertiseDetails
        currentItem={currentItem}
        setElementRef={setElementRef}
      />
    </ExpertiseDesktopWrapper>
  );
};
