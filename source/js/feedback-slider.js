const btnPrev = document.querySelector('.slider-buttons__btn--prev');
const btnNext = document.querySelector('.slider-buttons__btn--next');
let slideActive = document.querySelector(".slider-list__item--active");

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

const feedbackSlider = () => {
  slideActive = document.querySelector(".slider-list__item--active");
  checkBtnPrev(slideActive);
  checkBtnNext(slideActive);

  const buttons = document.querySelectorAll(".slider-buttons__btn");

  buttons.forEach(btn => (
    btn.addEventListener('click', (evt) => {
      slideActive = document.querySelector(".slider-list__item--active");

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

export { feedbackSlider };
