import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate section heading underline
            const heading = entry.target.querySelector(".section-heading");
            if (heading) heading.classList.add("animated");
            // Animate timeline line
            const line = entry.target.querySelector(".timeline-line");
            if (line) line.classList.add("drawn");
          }
        });
      },
      { threshold }
    );

    // Observe the element itself and all .reveal children
    observer.observe(el);
    const children = el.querySelectorAll(".reveal");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
