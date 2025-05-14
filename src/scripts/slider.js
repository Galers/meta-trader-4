document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.slider__arrow--prev');
  const nextBtn = document.querySelector('.slider__arrow--next');
  const slides = Array.from(document.querySelectorAll('.slider__item'));
  let currentIndex = 0;
  const total = slides.length;

  function updateSlider() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('testimonial--active', idx === currentIndex);
      slide.setAttribute('aria-hidden', idx !== currentIndex);
    });
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === total - 1;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < total - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  updateSlider();
});
