import * as functions from './modules/functions.js';

// Checking if browsers supports .webp
functions.isWebp();

// Caroursel
const carousel = document.querySelector('.slider__carousel');

let isDragging = false;
let startX;
let startScrollLeft;

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