const langBtn = document.getElementById('langBtn');
const langList = document.getElementById('langList');
const langItems = document.querySelectorAll('.lang-switcher__item');

langBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  langList.classList.toggle('active');
});

langItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedLang = item.dataset.lang;
    langBtn.querySelector('.lang-switcher__text').textContent =
      selectedLang.toUpperCase();
    localStorage.setItem('lang', selectedLang);
    langItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');
    langList.classList.remove('active');
  });
});

document.addEventListener('click', (event) => {
  const isClickInside =
    langBtn.contains(event.target) || langList.contains(event.target);
  if (!isClickInside) {
    langList.classList.remove('active');
  }
});

const savedLang = localStorage.getItem('lang') || 'en';
document
  .querySelector(`.lang-switcher__item[data-lang="${savedLang}"]`)
  ?.click();
