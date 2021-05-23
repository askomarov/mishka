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

//  feedback ----------------------------------
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

const promoSlider = () => {
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
// end feedback ----------------------------------

//       modal------------------------------------
const btnOpenModalAddCart = document.querySelector('.feaured__btn');
const addCartModal = document.querySelector('.add-cart--modal');

const getScrollWidth = () => {
  let div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

const lockBody = (lockPad) => {
  body.classList.add('lock');
  body.style.paddingRight = `${lockPad}` + 'px';
};
const unlockBody = () => {
  body.classList.remove('lock');
  body.style.paddingRight = '';
};

const onBtnOpenShowMOdal = (lockPad) => {
  btnOpenModalAddCart.addEventListener('click', () => {
    addCartModal.setAttribute('aria-hidden', 'true');
    lockBody(lockPad);
    onBtnCloseCloseModal();
  });
};

const closeModal = () => {
  addCartModal.setAttribute('aria-hidden', 'false');
  unlockBody();
};

const addForm = document.querySelector('.form-add-cart');
const btnClose = addForm.querySelector('.form-add-cart__close');

const onBtnCloseCloseModal = () => {
  if (addForm) {
    btnClose.addEventListener('click', (evt) => {
      evt.preventDefault()
      addForm.reset();
      closeModal();
    })
  }
};
//  end modal -----------------------------------------


// //////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  body.classList.remove('no-js');
  closeMenu();
  // onDesktopShowMenu();
  window.innerWidth >= 768 ? showMenu() : closeMenu();
  // onResizeWindowCloseMenu();
  onClickMenuButtonToogleMenu();
  promoSlider();

  const bodyLockPadding = getScrollWidth();
  onBtnOpenShowMOdal(bodyLockPadding);

})
