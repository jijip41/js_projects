'use strict'

const box = document.querySelector("#get_size");

window.addEventListener('resize', () => { get() });

function get() {
  box.innerHTML =
    `
  window.screen: ${window.screen.width}, ${window.screen.height} <br/>
  window.outer: ${window.outerWidth}, ${window.outerHeight}<br/>
  window.inner: ${window.innerWidth}, ${window.innerHeight}<br/>
  body.client: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
  `
}


