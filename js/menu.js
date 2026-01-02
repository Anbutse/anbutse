document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.top-bar-center');

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active'); // переключаем меню
    hamburger.setAttribute('aria-expanded', isOpen);

    // меняем текст кнопки
    hamburger.textContent = isOpen ? 'Закрыть' : 'Меню';
  });

  // необязательно: закрывать меню при клике на ссылку
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
      hamburger.textContent = 'Меню';
    });
  });
});
