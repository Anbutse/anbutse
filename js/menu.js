document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.top-bar-center');
  const projectBtn = document.querySelector('.button-white');

  let mobileBtnClone = null; // переменная для клона

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active'); 
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.textContent = isOpen ? 'Закрыть' : 'Меню';

    // создаём клон только если экран <=768 и клон ещё не существует
    if (window.innerWidth <= 768 && isOpen && !mobileBtnClone) {
      mobileBtnClone = projectBtn.cloneNode(true);
      mobileBtnClone.style.display = 'inline-flex';
      nav.appendChild(mobileBtnClone);

      mobileBtnClone.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
        hamburger.textContent = 'Меню';
      });
    }
  });

  // Закрытие меню при клике на ссылки
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
      hamburger.textContent = 'Меню';
    });
  });
});
