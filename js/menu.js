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
        overlay.classList.contains('active') ? closeMenu() : openMenu();
    });
    overlay.querySelectorAll('.button-white').forEach(btn => {
        btn.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });
    overlay.querySelectorAll('.nav-page[data-has-submenu]').forEach(page => {
        const toggle = page.querySelector('.toggle-icon');

        if (!toggle) return;

        toggle.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();

            page.classList.toggle('open');
        });
    });
});
