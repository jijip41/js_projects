'use strict'

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const text = document.querySelector('.text');


window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  text.innerHTML = `${x}, ${y}`;
  horizontal.style.top =`${y}px`;
  vertical.style.left =`${x}px`;
  target.style.left =`${x} px`;
  target.style.top =`${y} px`;
  text.style.top = `${y} px`;
  text.style.left = `${x} px`;
})

