'use strict'

const rabbit = document.querySelector('.rabbit');
const rabbit_position = rabbit.offsetTop;

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  // window.scrollTo({
  //   top: rabbit_position,
  //   behavior: 'smooth'
  // })

  rabbit.scrollIntoView({behavior: "smooth", block: "center"});
})

