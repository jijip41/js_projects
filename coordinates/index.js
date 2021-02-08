'use strict'

// clientX, clientY, pageX, pageY

const special = document.querySelector('.special');
const rect = special.getBoundingClientRect();
console.log(rect);
special.addEventListener('click', (e) => {
  special.innerHTML = `Client: ${e.clientX}, ${e.clientY}<br/>Page:${e.pageX}, ${e.pageY}`;
  special.style.backgroundColor = "white";
})

// scroll

const scroll_by = document.querySelector(".scroll_by");
const scroll_to = document.querySelector(".scroll_to");
const scroll_into = document.querySelector(".scroll_into");

scroll_by.addEventListener('click', () => {
  window.scrollBy({
    top: 100,
    left: 0,
    behavior: 'smooth'
  }
  )
})

scroll_to.addEventListener('click', () => {
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth'
  }
  )
})

scroll_into.addEventListener('click', () => {
  window.scroll(0, rect.top); // = special.scrollIntoView();
})


