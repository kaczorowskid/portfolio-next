import { useEffect, useRef, useState } from "react";

const THRESHOLD = 0.5;

export const useExpertise = () => {
  const elementRef = useRef<HTMLDivElement[]>([]);

  const [currentItem, setCurrentItem] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.intersectionRatio >= THRESHOLD)
          .map((e) => Number(e.target.getAttribute("data-index")))
          .sort((a, b) => a - b);

        if (visible.length === 0) return;

        setCurrentItem(() => {
          if (visible.length === 0) return [];

          const max = Math.max(...visible);
          return Array.from({ length: max + 1 }, (_, i) => i);
        });
      },
      {
        threshold: THRESHOLD,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elementRef.current.forEach(
      (element) => element && observer.observe(element)
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const setElementRef = (element: HTMLDivElement, index: number) => {
    if (element) elementRef.current[index] = element;
  };

  return {
    setElementRef,
    currentItem,
  };
};
