const btnHamburger = document.querySelector('#btnHamburger');
const nav = document.querySelector('.header__navigation');
const navLink = document.querySelectorAll('.menu__link');

btnHamburger.addEventListener('click', ()=> {
    btnHamburger.classList.toggle('open');
    nav.classList.toggle('active');

});

navLink.forEach(item => item.addEventListener('click', () => {
    btnHamburger.classList.remove('open');
    nav.classList.remove('active');
}))