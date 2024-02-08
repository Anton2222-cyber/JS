'use strict';

const insider = document.getElementById('inside');

const btns = [
  document.getElementById('btnR'),
  document.getElementById('btnRR'),
  document.getElementById('btnC'),
  document.getElementById('btnCR')
];
function changeColor() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = 'white';
    btns[i].style.color = 'black';
  }
  this.style.backgroundColor = '#00d1f1';
  this.style.color = 'white';
}
function makeChange() {
  debugger
  if (this.innerText === 'ROW') {
    changeColor.bind(this)();
    insider.style.flexDirection = 'row';

  } else if (this.innerText === 'ROW-REVERSE') {
    changeColor.bind(this)();
    insider.style.flexDirection = "row-reverse";
  }

  else if (this.innerText === 'COLUMN') {
    changeColor.bind(this)();
    insider.style.flexDirection = "column";
  }
  else {
    changeColor.bind(this)();
    insider.style.flexDirection = "column-reverse";
  }
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', makeChange);
}
