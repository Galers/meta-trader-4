const navLinks = document.querySelectorAll('.header__link');
const overlay = document.querySelector('[data-overlay]');
const burger = document.querySelector('[data-burger]');

function closeMenu() {
  overlay.classList.remove('is-active');
  burger.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
}

function handleResize() {
  if (window.innerWidth >= 1440) {
    closeMenu();
  }
}

function setActiveLinkOnClick() {
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.forEach((l) => l.classList.remove('active'));

      this.classList.add('active');

      closeMenu();
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setActiveLinkOnClick();
  handleResize();
});

window.addEventListener('resize', handleResize);

burger.addEventListener('click', () => {
  overlay.classList.toggle('is-active');
  burger.classList.toggle('is-active');
  document.body.classList.toggle('no-scroll');
});
