console.log('hello');
const body = document.querySelector('.page');
const header = document.querySelector('.header');
const menuButton = header.querySelector('.menu-button');

const closeMenu = () => {
  header.classList.add('header--menu-close');
  header.classList.remove('header--menu-open');
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "открыть меню");
};

const showMenu = () => {
  header.classList.remove('header--menu-close');
  header.classList.add('header--menu-open');
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "закрыть меню");
};

const onDesktopShowMenu = () => {
  window.innerWidth > 768 ? showMenu() : closeMenu();
};

const onClickMenuButtonToogleMenu = () => {
  menuButton.addEventListener('click', () => {

    if (header.classList.contains('header--menu-close')) {
      showMenu();
    } else {
      closeMenu();
    }

  })
};

const onResizeWindowCloseMenu = () => {
  window.addEventListener("resize", () => {
    onDesktopShowMenu();
  }
  )
};

let buttons = document.querySelectorAll(".slider-buttons__btn");
const btnPrev = document.querySelector('.slider-buttons__btn--prev');
const btnNext = document.querySelector('.slider-buttons__btn--next');
let slides = document.querySelectorAll(".slider-list__item");

const checkBtnPrev = (slideActive) => {
  if (slideActive.previousElementSibling !== null) {
    btnPrev.removeAttribute("disabled");
  } else {
    btnPrev.setAttribute("disabled", "disabled")
  }
};

const checkBtnNext = (slideActive) => {
  if (slideActive.nextElementSibling !== null) {
    btnNext.removeAttribute("disabled");
  } else {
    btnNext.setAttribute("disabled", "disabled")
  }
};

const changeActiveSlider = () => {
  slideActive = document.querySelector(".slider-list__item--active");
  checkBtnPrev(slideActive);
  checkBtnNext(slideActive);
};

const promoSlider = function () {
  let slideActive = document.querySelector(".slider-list__item--active");
  checkBtnPrev(slideActive);
  checkBtnNext(slideActive);

  const buttons = document.querySelectorAll(".slider-buttons__btn");

  buttons.forEach(btn => (
    btn.addEventListener('click', (evt) => {
      let slideActive = document.querySelector(".slider-list__item--active");

      if (evt.target.classList.contains('slider-buttons__btn--prev')) {
        if (slideActive.previousElementSibling !== null) {
          slideActive.previousElementSibling.classList.add('slider-list__item--active');
          slideActive.classList.remove('slider-list__item--active');
          changeActiveSlider();
        }
      }
      if (evt.target.classList.contains('slider-buttons__btn--next')) {

        if (slideActive.nextElementSibling !== null) {
          slideActive.nextElementSibling.classList.add('slider-list__item--active');
          slideActive.classList.remove('slider-list__item--active');
          changeActiveSlider();
        }
      }
    })
  ))
};


// //////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  body.classList.remove('no-js');
  closeMenu();
  // onDesktopShowMenu();
  window.innerWidth >= 768 ? showMenu() : closeMenu();
  // onResizeWindowCloseMenu();
  onClickMenuButtonToogleMenu();
  promoSlider();
})
