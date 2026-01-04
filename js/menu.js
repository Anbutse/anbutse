/* =========================
   TOPBAR DESKTOP
   ========================= */
.top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background-color: #FFFFFF;
    z-index: 999;
}

.top-bar .container {
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}

.top-bar-left {
    display: flex;
    align-items: center;
    gap: 8px;
}

.top-bar-left svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
}

.top-bar-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.nav-page {
    position: relative;
}

.nav-page .nav-link {
    padding: 6px 12px;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    background: none;
    position: relative;
    z-index: 1;
    transition: color 0.2s ease;
}

.nav-page .nav-link::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background-color: transparent;
    z-index: -1;
    transition: background-color 0.2s ease;
}

.nav-page .nav-link:hover::after {
    background-color: #F2F2F2;
}

/* DESKTOP HOVER SUBMENU */
.nav-page .nav-submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #FFFFFF;
    box-shadow: 0 8px 16px rgba(0,0,0,0.08);
    border-radius: 12px;
    padding: 8px 0;
    min-width: 160px;
    flex-direction: column;
    gap: 0;
    z-index: 10;
}

.nav-page:hover .nav-submenu {
    display: flex;
}

.nav-page .nav-submenu .nav-link {
    padding: 8px 16px;
}

/* RIGHT SIDE */
.top-bar-right {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* =========================
   MOBILE MENU
   ========================= */
body.menu-open {
    overflow: hidden;
}

.menu-overlay {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
    z-index: 998;
}

.menu-overlay.active {
    opacity: 1;
    pointer-events: auto;
}

.menu-panel {
    max-width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
    padding: 0 20px 20px 20px;
    border-radius: 0 0 16px 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transform: scale(0.96);
    opacity: 0;
    transition: transform 0.25s ease, opacity 0.25s ease;
}

.menu-overlay.active .menu-panel {
    transform: scale(1);
    opacity: 1;
}

.menu-content {
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 0px;
    background-color: #FAFAFA;
    border-radius: 12px;
    gap: 0;
}

/* MOBILE NAV LINKS */
.menu-content .nav-page {
    display: flex;
    flex-direction: column;
}

.menu-content .nav-page .nav-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    cursor: pointer;
    background: transparent;
    border-radius: 12px;
    transition: background-color 0.2s ease;
}

.menu-content .nav-page .nav-link:hover {
    background-color: #F2F2F2;
}

.menu-content .nav-page .toggle-icon {
    margin-left: 8px;
    font-weight: bold;
}

/* SUBMENU MOBILE */
.menu-content .nav-page .nav-submenu {
    display: none;
    flex-direction: column;
    padding-left: 24px; /* увеличенный отступ */
    gap: 0;
}

.menu-content .nav-page.open .nav-submenu {
    display: flex;
}

.menu-content .nav-page .nav-submenu .nav-link {
    padding: 8px 24px;
}

/* BUTTON */
.menu-content .button-white {
    display: block;
    width: 100%;
    text-align: left;
    padding: 12px 24px;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.menu-content .button-white:hover {
    background-color: #F2F2F2;
}

/* =========================
   MEDIA QUERIES
   ========================= */
@media (max-width: 1024px) {
    .logo-text {
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    .top-bar-center {
        display: none;
    }
}
