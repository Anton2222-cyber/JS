'use strict';
//! 2.Создать секундомер. Создать кнопку, по нажатию на которую будет
//! запускаться секундомер. Повторное нажатие - останавливает.
//! Повторное нажатие продолжает работу секундомера.
//! Значение секундомера отображать в div.
//! По нажатию на кнопку также меняется текст start/stop

const btnOn = document.getElementById('on');
const subTitle = document.getElementById('time')
let count = 0;
let interval = null;
btnOn.addEventListener('click', () => {

  if(btnOn.innerText === 'start'){
    btnOn.innerText = 'stop';
    interval = setInterval(() => {
      subTitle.innerText = ++count;
    }, 1000);
  }
  else{
    btnOn.innerText = 'start';
    clearInterval(interval);
    interval = null;
  }
});