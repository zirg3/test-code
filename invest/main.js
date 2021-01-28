import Swiper from '../lib/swiper.min.js';
export default () => {
  const progressList = document.querySelectorAll(`.progress__slider`);

  if (!progressList.length) {
    return null;
  }

  // progressList.forEach((progress) => {
  //   const progressSlider = progress.querySelector(`.swiper-container`);

  //   return new Swiper(progressSlider, {
  //     slidesPerView: 2,
  //     spaceBetween: 14,
  //     loop: true,
  //     navigation: {
  //       nextEl: `.swiper-button-next`,
  //       prevEl: `.swiper-button-prev`,
  //     },
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 2
  //       },
  //       767: {
  //         slidesPerView: 3
  //       },
  //       1023: {
  //         slidesPerView: 4
  //       }
  //     },
  //   });
  // });
  function progress1() {
    return new Swiper('.swiper-container--1', {
      slidesPerView: 2,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: `.swiper-button-next--1`,
        prevEl: `.swiper-button-prev--1`,
      },
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 3
        },
        1023: {
          slidesPerView: 4
        }
      },
    });
  }
  function progress2() {
    return new Swiper('.swiper-container--2', {
      slidesPerView: 2,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: `.swiper-button-next--2`,
        prevEl: `.swiper-button-prev--2`,
      },
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 3
        },
        1023: {
          slidesPerView: 4
        }
      },
    });
  }
  function progress3() {
    return new Swiper('.swiper-container--3', {
      slidesPerView: 2,
      spaceBetween: 14,
      loop: true,
      navigation: {
        nextEl: `.swiper-button-next--3`,
        prevEl: `.swiper-button-prev--3`,
      },
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 3
        },
        1023: {
          slidesPerView: 4
        }
      },
    });
  }

  progress1();
  progress2();
  progress3();
};