import { useEffect, useRef, useState } from "react";

export const usePortfolioItemHeader = () => {
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      setDescriptionHeight(descriptionRef.current.clientHeight);
    }
  }, []);

  return {
    descriptionHeight,
    descriptionRef,
  };
};
