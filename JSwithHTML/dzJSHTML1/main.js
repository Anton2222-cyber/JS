'use strict';
//! 1.По нажатию на кнопку начинает работать таймер от 5 до 1.
//! На экране должны отображаться значения таймера(5,4,3,2,1).
//! После того как таймер остановился - экран покраснел.
//! Повторно заустить таймер можно только после того, как
//! он закончился. При повторном запуске счет начинает сначала и 
//! экран снова белый.

const btnStart = document.getElementById('btnStart');
const subTitle = document.getElementById('time')
let count = 6;
let interval = null;

btnStart.addEventListener('click', () => {

  if (interval === null) {
    count = 6;
    subTitle.innerText = --count;
    document.body.style.backgroundColor = 'white';
    interval = setInterval(() => {
      if (Number(subTitle.innerText) > 1)
        subTitle.innerText = --count;
      else {
        clearInterval(interval);
        document.body.style.backgroundColor = 'red';
        interval = null;
      }
    }, 1000);
  }
})