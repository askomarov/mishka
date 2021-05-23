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

const onClickMenuButtonToogleMenu = () => {
  menuButton.addEventListener('click', () => {
    if (header.classList.contains('header--menu-close')) {
      showMenu();
    } else {
      closeMenu();
    }
  })
};

export { closeMenu, showMenu, onClickMenuButtonToogleMenu };
