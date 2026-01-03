document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.menu-overlay');

  if (!hamburger || !overlay) return;

const openMenu = () => {
  overlay.classList.add('active');
  document.body.classList.add('menu-open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.textContent = 'Закрыть';
};

const closeMenu = () => {
  overlay.classList.remove('active');
  document.body.classList.remove('menu-open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.textContent = 'Меню';
};

  hamburger.addEventListener('click', () => {
    const isOpen = overlay.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  });

  /* закрытие при клике по ссылкам */
  overlay.querySelectorAll('.nav-link, .button-white').forEach(el => {
    el.addEventListener('click', closeMenu);
  });

  /* закрытие по клику на фон */
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      closeMenu();
    }
  });

  /* закрытие по Esc */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
});
