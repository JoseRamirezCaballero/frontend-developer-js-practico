const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    // Yo lo hice asi, version nuv
    // return desktopMenu.classList.contains('inactive') ?  desktopMenu.classList.remove('inactive') : desktopMenu.classList.add('inactive') 
    // Version buena
    desktopMenu.classList.toggle('inactive')
}

const burguerIconMenu = document.querySelector('#burguerIconMenu')
const mobileMenu = document.querySelector('.mobile-menu')

burguerIconMenu.addEventListener("click", toggleDesktopMobile)

function toggleDesktopMobile(){
    mobileMenu.classList.toggle('inactive')
}