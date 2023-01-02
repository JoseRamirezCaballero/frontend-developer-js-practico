const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIconMenu = document.querySelector('#burguerIconMenu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    // Yo lo hice asi, version nuv
    // return desktopMenu.classList.contains('inactive') ?  desktopMenu.classList.remove('inactive') : desktopMenu.classList.add('inactive') 
    // Version buena
    desktopMenu.classList.toggle('inactive')
    // aside.classList.add('inactive')
}

burguerIconMenu.addEventListener("click", toggleMobileMenu)
function toggleMobileMenu(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside)
function toggleCarritoAside(){
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
}

