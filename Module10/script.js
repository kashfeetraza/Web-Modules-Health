// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Counter animation
const counters = document.querySelectorAll(".counter");

function animateCounter(el) {
  const target = Number(el.dataset.target || 0);
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(target * t).toString();
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

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