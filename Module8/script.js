// mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// counters (animate when visible)
const counters = document.querySelectorAll(".counter");

function animateCounter(el) {
  const target = Number(el.dataset.target || 0);
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(target * p).toString();
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
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