jQuery(".menu-toggle button").on("click", function () {
    jQuery(".menu-wrap").toggleClass("active");
  });

  window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-wrap");
    
    if (window.scrollY > 50) { // 50px scroll hone ke baad sticky ho jayega
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });



  // const testimonialsSlider = new Swiper('.testimonials-slider', {
  //   loop: true,
  //   loopAdditionalSlides: 5,
  //   slidesPerView: "auto",
  //   speed: 8000,
  //   spaceBetween: 32,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  // });



const testimonialsSlider = new Swiper('.testimonials-slider', {
  slidesPerView: 'auto',
  spaceBetween: 32,
  loop: true,
  loopedSlides: 20, // Increase if needed
  speed: 6000, // Controls how slow the slide moves
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  grabCursor: true,
  allowTouchMove: false,
  centeredSlides: false, // optional
  watchSlidesProgress: true,
});



  function setActiveStep(index) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });
  };

  const items = document.querySelectorAll('.logo-item');
  const underline = document.getElementById('underline');

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      document.querySelector('.logo-item.active').classList.remove('active');
      item.classList.add('active');

      const offsetLeft = item.offsetLeft;
      underline.style.left = offsetLeft + 'px';
      underline.style.width = item.offsetWidth + 'px';
    });
  });
  // Set initial underline position
  window.onload = () => {
    const activeItem = document.querySelector('.logo-item.active');
    underline.style.left = activeItem.offsetLeft + 'px';
    underline.style.width = activeItem.offsetWidth + 'px';
  };
  