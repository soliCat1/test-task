var swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 10,
  loop: false,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 20
      },
      375: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
      1280: {
          slidesPerView: 4,
          spaceBetween: 24
      }
  },
});