import * as functions from './modules/functions.js';

// Checking if browsers supports .webp
functions.isWebp();

// Caroursel
const carousel = document.querySelector('.slider__carousel');
const arrows = document.querySelectorAll('.slider__btn');

const firstCardWidth = carousel.querySelector('.slider__card').offsetWidth;

let isDragging = false;
let startX;
let startScrollLeft;

arrows.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth
  })
})

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');

  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
}

const handleMousmove = (e) => {
  if (!isDragging) return;
  // Updates postion of the carousel based on the mouse move
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', handleMousmove);
carousel.addEventListener('mouseup', dragStop);