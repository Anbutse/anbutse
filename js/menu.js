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

    /* Закрытие при клике по кнопкам и ссылкам */
    overlay.querySelectorAll('.menu-content .button-white').forEach(el => {
        el.addEventListener('click', closeMenu);
    });

    /* Закрытие по Esc */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });

    /* Раскрытие подразделов в мобильном меню */
    const navPages = overlay.querySelectorAll('.menu-content .nav-page');

    navPages.forEach(page => {
        const link = page.querySelector('.nav-link');
        const toggleIcon = link.querySelector('.toggle-icon');
        const submenu = page.querySelector('.nav-submenu');

        // обработка клика по стрелке
        toggleIcon.addEventListener('click', e => {
            e.stopPropagation(); // чтобы не срабатывал клик по ссылке страницы
            const isOpen = page.classList.contains('open');
            page.classList.toggle('open', !isOpen);
            toggleIcon.textContent = isOpen ? '∨' : '>';
        });

        // клик по названию страницы (сам текст ссылки)
        link.addEventListener('click', e => {
            const target = e.target;
            if (target !== toggleIcon) {
                // при клике на текст ссылки переходим на страницу
                const href = link.getAttribute('href');
                if (href && href !== '#') window.location.href = href;
                closeMenu();
            }
        });
    });
});
