document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact__form');
  const notification = document.querySelector('.contact__notification');
  const closeBtn = document.querySelector('.contact__notification-btn');

  function showNotification() {
    notification.classList.add('contact__notification--visible');
    notification.removeAttribute('hidden');

    setTimeout(() => {
      hideNotification();
    }, 5000);
  }

  function hideNotification() {
    notification.classList.remove('contact__notification--visible');
    setTimeout(() => {
      notification.setAttribute('hidden', '');
    }, 400);
  }

  closeBtn.addEventListener('click', hideNotification);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;
    const fields = form.querySelectorAll('.contact__field');

    fields.forEach((field) => {
      const input =
        field.querySelector('input') || field.querySelector('textarea');
      const error = field.querySelector('.contact__error');

      if (!input.value.trim()) {
        error.classList.add('contact__error--visible');
        input.classList.add('input--error');
        isValid = false;
      } else {
        error.classList.remove('contact__error--visible');
        input.classList.remove('input--error');
      }
    });

    if (!isValid) return;

    form.reset();
    showNotification();
  });
});
