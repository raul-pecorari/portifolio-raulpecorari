const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".project-card")];

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.dataset.filter;
    cards.forEach(card => {
      const visible = category === "todos" || card.dataset.category === category;
      card.style.display = visible ? "" : "none";
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
