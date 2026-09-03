/* ==========================================================================
   SCROLLREVEAL.JS
   Revela elementos con la clase ".reveal" cuando entran en el viewport,
   usando IntersectionObserver. Respeta prefers-reduced-motion.
   ========================================================================== */

(function () {
  "use strict";

  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
})();
