//! 3.Создать слайдер. Есть картинка и две кнопки(вперед, назад).
//! Картинки лежат в отдельной папке. Подготовить массив, в котором
//! будут лежать пути картинок в виде обычных строк.
//! По нажатию на кнопку достаем из массива путь к картинке
//! и устанавливаем его. 
//! *Добавить плавный переход слайдов.
'use strict';
const pictures = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg',
  'images/10.jpg',
  'images/11.jpg',
];


let count = 0;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

let leftImg = document.getElementById('leftImg');
leftImg.style.transition = "all 2s";
let middleImg = document.getElementById('middleImg');
middleImg.style.transition = "all 2s";
let rightImg = document.getElementById('rightImg');
rightImg.style.transition = "all 2s";
let tmpSwap;


next.addEventListener('click', () => {
  middleImg.style.transition = "all 2s";
  rightImg.style.transition = "all 2s";
  if (count === 10) {
    middleImg.src = pictures[0];
    count = 0;
    rightImg.src = pictures[1];
  } else {
    // middleImg.src = pictures[++count];
    debugger
    
    leftImg.style.zIndex = "-1";
    leftImg.style.src = '';
    rightImg.style.zIndex = '100';
    middleImg.style.right = '1200px';
    rightImg.style.right = '0px';

    middleImg.style.zIndex = '100';


    //leftImg.style.transition = '0';
    leftImg.style.right = '-1200px';
    //  leftImg.style.opacity = "1";
    leftImg.style.transition = 'all 2s';

    rightImg.style.zIndex = '0';
    middleImg.style.zIndex = '0';
    // leftImg.style.zIndex = '0';

    tmpSwap = middleImg;
    middleImg = rightImg;
    rightImg = tmpSwap;

    tmpSwap = rightImg;
    rightImg = leftImg;
    leftImg = tmpSwap;
    leftImg.src = pictures[count];
    middleImg.src = pictures[++count];
    // rightImg.style.transition = '0';
    // rightImg.style.visibility = 'hidden';

    // rightImg.src = "";
    // rightImg.style.opacity = '0';
    // rightImg.style.right = '-1200px';
    // leftImg.src = pictures[count];
    // rightImg.src = pictures[++count];
    // rightImg.style.opacity = '1';





  }

});

prev.addEventListener('click', () => {
  if (count === 0) {
    middleImg.src = pictures[10];
    count = 10;
    // leftImg.src = pictures[9];
  }
  else {
    middleImg.src = pictures[--count];
  }

});



