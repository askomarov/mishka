import { closeMenu, showMenu, onClickMenuButtonToogleMenu } from "./header-menu.js";
import { feedbackSlider } from "./feedback-slider.js";
import { onBtnShowAddFormMOdal } from "./add-form-modal.js";

const body = document.querySelector('.page');
const feedbackSection = document.querySelector('.feedback');
const addCartModal = document.querySelector('.add-cart--modal');

document.addEventListener("DOMContentLoaded", () => {
  body.classList.remove('no-js');
  closeMenu();
  window.innerWidth >= 768 ? showMenu() : closeMenu();
  onClickMenuButtonToogleMenu();

  if (feedbackSection) {
    feedbackSlider();
  }
  if (addCartModal) {
    onBtnShowAddFormMOdal();
  }
});
