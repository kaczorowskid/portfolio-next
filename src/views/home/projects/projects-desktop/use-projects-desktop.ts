import { useEffect, useMemo, useRef, useState } from "react";

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
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = elementsRef.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== NO_ACTIVE_INDEX) {
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    elementsRef.current.forEach(
      (element) => element && observer.observe(element)
    );

    return () => observer.disconnect();
  }, [count]);

  return { activeIndex, setRef };
};
