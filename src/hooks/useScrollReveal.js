import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Observes every .reveal element currently in the DOM and adds the
 * .in class when it scrolls into view (mirrors the original vanilla
 * IntersectionObserver behavior). Re-runs whenever the route changes.
 */
export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = document.querySelectorAll(".reveal:not(.in)");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [location.pathname]);
}
