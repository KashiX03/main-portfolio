import "./swiper.js";

const headerShell = document.querySelector(".header-shell");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-navigation");
const mobileViewport = window.matchMedia("(max-width: 980px)");
const secondaryButton = document.querySelector(".button-secondary");

function setMenuOpen(open) {
  headerShell.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navigation.inert = mobileViewport.matches && !open;
}

function syncViewport() {
  setMenuOpen(false);
  secondaryButton.setAttribute("href", mobileViewport.matches ? "#projects" : "#services");
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (mobileViewport.matches && event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("click", (event) => {
  if (mobileViewport.matches && !headerShell.contains(event.target)) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

mobileViewport.addEventListener("change", syncViewport);
syncViewport();
