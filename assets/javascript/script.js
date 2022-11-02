const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {

    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        setTimeout(() => {
            overlay.classList.remove('hide');
          }, 300)
    }
    else {
        btnHamburger.classList.add('open');
        setTimeout(() => {
            overlay.classList.add('hide');
          }, 500)
    }
});