// ANIMACIÓN ON SCROLL
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // solo una vez
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".plan90-hero-video");
  const soundBtn = document.getElementById("toggle-sound");
  // volumen inicial y sonido toggle
  if (video) {
    video.volume = 0.3;
  }
  if (soundBtn && video) {
    soundBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      soundBtn.textContent = video.muted ? "🔇" : "🔊";
    });
  }
});

// PRELOADER
window.addEventListener("load", function () {
  document.body.classList.add("loaded");

  const SHOW_DELAY_MS = 3000;
  const hint = document.getElementById("scrollHint");
  try {
    sessionStorage.removeItem("hintOculto");
  } catch {}

  setTimeout(() => {
    if (hint) hint.classList.add("show");
  }, SHOW_DELAY_MS);
});

// TOGGLE MENÚ
function toggleMenu() {
  document.querySelector(".navbar-menu").classList.toggle("active");
}

// INICIALIZACIÓN SWIPER (Casos de Éxito)
document.addEventListener("DOMContentLoaded", () => {
  const casesSwiper = new Swiper('.cases-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
  });
});
