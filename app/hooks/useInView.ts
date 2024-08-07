import { useState, useEffect, useRef, MutableRefObject } from "react";

const useInView = (
  options: IntersectionObserverInit
): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

export default useInView;
