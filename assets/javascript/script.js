const btnHamburger = document.querySelector('#btnHamburger');
const nav = document.querySelector('.header__navigation');
const navLink = document.querySelectorAll('.menu__link');

btnHamburger.addEventListener('click', () => {
    btnHamburger.classList.toggle('open');
    nav.classList.toggle('active');
});

navLink.forEach(item => item.addEventListener('click', () => {
    btnHamburger.classList.remove('open');
    nav.classList.remove('active');
}));


let header=document.querySelector('.header');

window.addEventListener('scroll', (e) => {
    let scroll_top=document.body.getBoundingClientRect().top * -1;

    if (scroll_top >= 80) {
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
});


let slidePosition = 0;
let slides = document.getElementsByClassName('slider__item');
let totalSlides = slides.length;

document.getElementById('slider__button--next').addEventListener("click", function() {
  moveToNextSlide();
});

document.getElementById('slider__button--prev').addEventListener("click", function() {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('slider__item--visible');
  }

  slides[slidePosition].classList.add('slider__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
};