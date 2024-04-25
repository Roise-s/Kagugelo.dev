export const menuButton = document.querySelector('.menu-button');
export const hamburger = document.querySelector('.menu-button_burger')
export const nav = document.querySelector('.nav');
export const menuNav = document.querySelector('.menu-nav');
export const navItems = document.querySelectorAll('.menu-nav_item');
export let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

export function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}