// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// Search modal
const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("closeSearch");

function openSearch() {
  searchModal.classList.remove("hidden");
  setTimeout(() => searchInput?.focus(), 0);
}
function closeSearchModal() {
  searchModal.classList.add("hidden");
}

document.getElementById("searchBtn")?.addEventListener("click", openSearch);
document.getElementById("searchBtnMobile")?.addEventListener("click", openSearch);
closeSearch?.addEventListener("click", closeSearchModal);

// close when clicking backdrop
searchModal?.addEventListener("click", (e) => {
  if (e.target === searchModal.firstElementChild) closeSearchModal();
});

// close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSearchModal();
});