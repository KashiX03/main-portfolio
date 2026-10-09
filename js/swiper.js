import Swiper from "swiper";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Module scripts run after the HTML and its slide cards are parsed.
document.querySelectorAll(".swiper").forEach((slider) => {
  const isServicesSlider = slider.classList.contains("services-slider");
  new Swiper(slider, {
    modules: [A11y, Keyboard, Navigation, Pagination],
    slidesPerView: isServicesSlider ? "auto" : 1,
    spaceBetween: isServicesSlider ? 16 : 24,
    speed: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400,
    breakpoints: isServicesSlider ? {
      981: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    } : undefined,
    watchOverflow: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Keep controls scoped to this slider so multiple sliders work independently.
    navigation: {
      addIcons: !isServicesSlider,
      nextEl: slider.querySelector(".swiper-button-next"),
      prevEl: slider.querySelector(".swiper-button-prev"),
    },
    pagination: {
      el: slider.querySelector(".swiper-pagination"),
      clickable: true,
    },
  });
});
