'use strict';
//! 1. Создать две разные кнопки(цвет, размер шрифта, цвет текста,
//!   высота и ширина). По нажатию на копку отобразить всю эту
//!   информацию в div. Например: цвет: красный...
//!   Информация о каждом свойстве выводится 
//!   с паузой в одну секунду. НЕ ДУБЛИРОАТЬ ФУНКЦИОНАЛ
//!   ДЛЯ ДВУХ КНОПОК.

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const info = document.getElementById('infoBtn');

let interval = null;
function print() {
  let i = 1;
  if (interval === null) {
    info.innerText = "";
    interval = setInterval(() => {
      switch (i) {
        case 1:
          info.innerText+='ширина: ' + this.style.width+'\n';     
          break;
        case 2:
          info.innerText+='висота: ' + this.style.height+'\n';
          break;
        case 3:
          info.innerText+='фон: ' + this.style.backgroundColor+'\n';
          break;
        case 4:
          info.innerText+='колір: ' + this.style.color+'\n';
          break;
        case 5:
          info.innerText+='розмір шрифту: ' + this.style.fontSize+'\n';
          break;
      }
      i++;
      if (i === 6) {
        clearInterval(interval);
        interval = null;
      }
    }, 1000);
  }
}


btn1.addEventListener('click', print);
btn2.addEventListener('click', print);

