import { useEffect, useMemo, useRef, useState } from "react";

const VISIBILITY_THRESHOLD = 0.5;

const NO_ACTIVE_INDEX = -1;

export const useProjectsDesktop = (count: number) => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(NO_ACTIVE_INDEX);

  const setRef = useMemo(
    () =>
      Array.from(
        { length: count },
        (_, index) => (element: HTMLDivElement | null) => {
          elementsRef.current[index] = element;
        }
      ),
    [count]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleIndexes = entries
          .filter((entry) => entry.intersectionRatio >= VISIBILITY_THRESHOLD)
          .map((entry) =>
            elementsRef.current.indexOf(entry.target as HTMLDivElement)
          )
          .filter((index) => index !== NO_ACTIVE_INDEX);

        if (visibleIndexes.length === 0) return;

        setActiveIndex(Math.max(...visibleIndexes));
      },
      {
        threshold: VISIBILITY_THRESHOLD,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elementsRef.current.forEach(
      (element) => element && observer.observe(element)
    );

    return () => observer.disconnect();
  }, [count]);

  return { activeIndex, setRef };
};
