// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Animated counters (simple + smooth)
const counters = document.querySelectorAll(".counter");

function animateCounter(el) {
  const target = Number(el.dataset.target || 0);
  const isBig = target >= 1000;

  const duration = 1200; // ms
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(target * progress);

    el.textContent = isBig
      ? value.toLocaleString()
      : String(value);

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Run when visible
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!el.dataset.animated) {
          el.dataset.animated = "true";
          animateCounter(el);
        }
      }
    }
  },
  { threshold: 0.4 }
);

counters.forEach((c) => io.observe(c));