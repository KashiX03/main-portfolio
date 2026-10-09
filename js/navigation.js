const navLinks = [...document.querySelectorAll(".site-navigation .nav-link")];
const sections = navLinks
  .map((link) => document.getElementById(link.hash.slice(1)))
  .filter(Boolean);
const header = document.querySelector(".site-header");
let framePending = false;
let clickedSection = null;
let clickTimeout;

function setActiveSection(id) {
  navLinks.forEach((link) => {
    const active = link.hash === `#${id}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function updateActiveSection() {
  framePending = false;
  if (clickedSection) return;

  const viewingLine = header.getBoundingClientRect().bottom + 24;
  let activeSection = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= viewingLine) activeSection = section;
  });

  // Keep the final section active when its short content reaches the page bottom.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    activeSection = sections.at(-1);
  }
  if (activeSection) setActiveSection(activeSection.id);
}

function scheduleUpdate() {
  if (framePending) return;
  framePending = true;
  window.requestAnimationFrame(updateActiveSection);
}

function releaseClickedSection() {
  clickedSection = null;
  window.clearTimeout(clickTimeout);
  scheduleUpdate();
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const section = sections.find((item) => link.hash === `#${item.id}`);
  if (!section) return;

  // Native anchor scrolling uses the CSS sticky-header offset and reduced-motion preference.
  clickedSection = section;
  setActiveSection(section.id);
  window.clearTimeout(clickTimeout);
  clickTimeout = window.setTimeout(releaseClickedSection, 1500);
});

window.addEventListener("scroll", scheduleUpdate, { passive: true });
window.addEventListener("resize", scheduleUpdate);
window.addEventListener("scrollend", releaseClickedSection);
window.addEventListener("wheel", releaseClickedSection, { passive: true });
window.addEventListener("touchstart", releaseClickedSection, { passive: true });
document.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
    releaseClickedSection();
  }
});
window.addEventListener("load", scheduleUpdate);
scheduleUpdate();
