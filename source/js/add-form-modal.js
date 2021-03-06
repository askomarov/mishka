import { getScrollWidth } from './get-scroll-width.js';

const body = document.querySelector('.page');
const btnOpenModalAddCart = document.querySelector('.feaured__btn');
const addCartModal = document.querySelector('.add-cart--modal');
const addForm = document.querySelector('.form-add-cart');


const lockBody = (lockPad) => {
  body.classList.add('lock');
  body.style.paddingRight = `${lockPad}` + 'px';
};
const unlockBody = () => {
  body.classList.remove('lock');
  body.style.paddingRight = '';
};

const closeModal = () => {
  addCartModal.setAttribute('aria-hidden', 'false');
  unlockBody();
};

const openModal = () => {
  addCartModal.setAttribute('aria-hidden', 'true');
  let bodyLockPadding = getScrollWidth();
  const btnClose = addForm.querySelector('.form-add-cart__close');
  lockBody(bodyLockPadding);
  onBtnCloseAddFormModal(btnClose);
}

const onBtnShowAddFormMOdal = () => {
  btnOpenModalAddCart.addEventListener('click', openModal);
};

const onBtnCloseAddFormModal = (btnClose) => {
  if (addForm) {
    btnClose.addEventListener('click', (evt) => {
      evt.preventDefault()
      addForm.reset();
      closeModal();
    })
  }
};

export { onBtnShowAddFormMOdal };
