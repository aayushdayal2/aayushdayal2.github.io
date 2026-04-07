const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll(".panel, .feature-card, .portrait-card, .media-card, .project-summary")
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
