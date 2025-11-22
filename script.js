// Simple fade-in animation
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
});

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      card.style.transition = "0.6s";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
