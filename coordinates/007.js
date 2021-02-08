'use strict'

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const text = document.querySelector('.text');

const target_width = target.clientWidth / 2;
const target_height = target.clientHeight / 2;


window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  text.innerHTML = `${x}, ${y}`;
  horizontal.style.top = y + `px`;
  vertical.style.left = x + `px`;
  target.style.left = x - target_width + `px`;
  target.style.top = y - target_height + `px`;
  text.style.top = y + 10 + `px`;
  text.style.left = x + 25 + `px`;
})

