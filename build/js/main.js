import { closeMenu, showMenu, onClickMenuButtonToogleMenu } from "./header-menu.js";
import { promoSlider } from "./promo-slider.js";
import { onBtnShowAddFormMOdal, onBtnCloseAddFormModal } from "./add-form-modal.js";

const body = document.querySelector('.page');

document.addEventListener("DOMContentLoaded", () => {
  body.classList.remove('no-js');
  closeMenu();
  window.innerWidth >= 768 ? showMenu() : closeMenu();
  onClickMenuButtonToogleMenu();

  promoSlider();

  onBtnShowAddFormMOdal();
  onBtnCloseAddFormModal();
});
