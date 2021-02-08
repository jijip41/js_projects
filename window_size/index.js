'use strict'


window.onresize = get;

function get() {
  let screenW = window.screen.width;
  document.querySelector('.screen').textContent = `window.screen: ${screenW}, ${window.screen.height}`;

  document.querySelector('.outer').textContent = `window.outer: ${window.outerWidth}, ${window.outerHeight}`;

  document.querySelector('.inner').textContent = `window.inner: ${window.innerWidth}, ${window.innerHeight}`;

  document.querySelector('.client').textContent = `body.client: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
}


