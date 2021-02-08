'use strict'

const special = document.querySelector('.special');
const rect = special.getBoundingClientRect();
console.log(rect);
special.addEventListener('click', (e) => {
  special.innerHTML = `Client: ${e.clientX}, ${e.clientY}<br/>Page:${e.pageX}, ${e.pageY}`;
  special.style.backgroundColor = "white";
})


