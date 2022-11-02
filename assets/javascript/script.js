const btnHamburger = document.querySelector('#btnHamburger');
const nav = document.querySelector('.header__navigation');

btnHamburger.addEventListener('click', ()=> {
    btnHamburger.classList.toggle('open');
    nav.classList.toggle('active');

});