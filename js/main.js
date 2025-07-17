// menu logic start
let header = document.getElementById("header");
let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");
let body = document.body;

menuBtn.onclick = () => {
  header.classList.toggle("active");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};

// modal info
let infoModal = document.getElementById("info");
let infoBtn = document.getElementById("infoBtn");
let modalClose = document.getElementById("modalClose");
infoBtn.onclick = () => {
  infoModal.classList.toggle("active");
};
modalClose.onclick = () => {
  infoModal.classList.remove("active");
};

window.addEventListener("click", (e) => {
  if (e.target == menu) {
    header.classList.remove("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
  if (e.target === infoModal) {
    infoModal.classList.remove("active");
  }
});


// menu logic end
document.addEventListener("DOMContentLoaded", function () {
  const introContainer = document.querySelector(".intro__items-inner");

  // Check if mobile device (you can adjust this breakpoint)
  function isMobile() {
    return window.matchMedia("(max-width: 840px)").matches;
  }

  // Initialize Swiper only on mobile
  function initSwiper() {
    if (
      isMobile() &&
      !introContainer.classList.contains("swiper-initialized")
    ) {
      // Add swiper wrapper classes
      introContainer.classList.add("swiper");
      const items = Array.from(introContainer.children);

      // Create swiper wrapper
      const wrapper = document.createElement("div");
      wrapper.classList.add("swiper-wrapper");

      // Wrap each item in swiper-slide
      items.forEach((item) => {
        item.classList.add("swiper-slide");
        wrapper.appendChild(item);
      });

      introContainer.innerHTML = "";
      introContainer.appendChild(wrapper);

      // Initialize Swiper
      const swiper = new Swiper(introContainer, {
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          540: {
            slidesPerView: 2,
          },
        },
      });
    } else if (
      !isMobile() &&
      introContainer.classList.contains("swiper-initialized")
    ) {
      // Destroy Swiper and restore original markup when resizing to desktop
      const swiperInstance = introContainer.swiper;
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }

      // Remove swiper classes and restore original structure
      const slides = Array.from(
        introContainer.querySelectorAll(".swiper-slide")
      );
      introContainer.classList.remove("swiper");
      introContainer.innerHTML = "";
      slides.forEach((slide) => {
        slide.classList.remove("swiper-slide");
        introContainer.appendChild(slide);
      });
    }
  }

  // Initialize on load
  initSwiper();

  // Reinitialize on window resize
  window.addEventListener("resize", initSwiper);
});
