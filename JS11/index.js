'use strict';

const circle = document.getElementById('circle');

circle.addEventListener('click', () => {

  circle.style.marginTop = Math.floor(Math.random() * 300) + 1+'px';
  circle.style.marginLeft = Math.floor(Math.random() * 300) + 1+'px';
});