console.log('hello');
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

document.addEventListener("DOMContentLoaded", () => {

  onDesktopShowMenu();
  onResizeWindowCloseMenu();
  onClickMenuButtonToogleMenu();

})
