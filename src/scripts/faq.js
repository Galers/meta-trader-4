document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.getElementById('faq-accordion');
  accordion.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq__trigger');
    if (!btn) return;

    const expanded = btn.getAttribute('aria-expanded') === 'true';
    accordion.querySelectorAll('.faq__trigger').forEach((tr) => {
      tr.setAttribute('aria-expanded', 'false');
      document.getElementById(tr.getAttribute('aria-controls')).hidden = true;
    });

    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      document.getElementById(btn.getAttribute('aria-controls')).hidden = false;
    }
  });
});
