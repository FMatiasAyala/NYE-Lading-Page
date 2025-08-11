// main.js

// SWIPER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    900: { slidesPerView: 3 },
    600: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});

// ANIMACIÓN ON SCROLL
document.addEventListener("DOMContentLoaded", () => {
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    scrollObserver.observe(el);
  });
});

// NAVBAR COLOR SEGÚN SECCIÓN
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navbar.className = "navbar";
        navbar.classList.add(`${id}-theme`);
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// CRONÓMETRO PROMO
let timeInSeconds = 20 * 60; // 20 minutos
function pad(n) {
  return n < 10 ? "0" + n : n;
}
function updateTimer() {
  let min = Math.floor(timeInSeconds / 60);
  let sec = timeInSeconds % 60;
  document.getElementById("timer").innerText = pad(min) + ":" + pad(sec);
  if (timeInSeconds > 0) {
    timeInSeconds--;
    setTimeout(updateTimer, 1000);
  } else {
    document.getElementById("promo").innerText = "PROMO FINALIZADA";
    document.getElementById("timer").style.background = "#f44";
  }
}
updateTimer();

// SCROLL a EBOOKS y CONTACTO
function scrollToEbooks() {
  document.getElementById("ebooks").scrollIntoView({ behavior: "smooth" });
}
function scrollToContacto() {
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
}

// PRELOADER
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.remove();
  }, 4000);
});

// TOGGLE MENÚ
function toggleMenu() {
  document.querySelector(".navbar-menu").classList.toggle("active");
}
