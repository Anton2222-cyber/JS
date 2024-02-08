'use strict';
//! 2.Создать игру крестики-нолики. player1 vs player2

const newGame = document.getElementById('newGame');
const pole1 = document.getElementById('pole1');
const pole2 = document.getElementById('pole2');
const pole3 = document.getElementById('pole3');
const pole4 = document.getElementById('pole4');
const pole5 = document.getElementById('pole5');
const pole6 = document.getElementById('pole6');
const pole7 = document.getElementById('pole7');
const pole8 = document.getElementById('pole8');
const pole9 = document.getElementById('pole9');

const pole = [
  [pole1, pole2, pole3],
  [pole4, pole5, pole6],
  [pole7, pole8, pole9]
];
let isX = true;
let isGameOver = false;
newGame.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      pole[i][j].innerText = "";
     
    }

  }
   isGameOver = false;
});

function makeAMove() {

  if (this.innerText !== 'X' && this.innerText !== 'O'&&isGameOver===false) {
    debugger
    this.disabled = false;
    isX === true ? this.innerText = 'X' : this.innerText = 'O';
     isGameOver = win_or_not_win(isX === true ? 'X' : 'O');
    isX = !isX;
  }
}
pole1.addEventListener('click', makeAMove);
pole2.addEventListener('click', makeAMove);
pole3.addEventListener('click', makeAMove);
pole4.addEventListener('click', makeAMove);
pole5.addEventListener('click', makeAMove);
pole6.addEventListener('click', makeAMove);
pole7.addEventListener('click', makeAMove);
pole8.addEventListener('click', makeAMove);
pole9.addEventListener('click', makeAMove);


function win_or_not_win(k) {

  let sum = 0;
  //по горизонталі
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (pole[i][j].innerText === k)
        sum++;
    }
    if (sum === 3)
      return true;
    sum = 0;
  }

  //по вертикалі
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (pole[j][i].innerText === k)
        sum++;
    }
    if (sum === 3)
      return true;
    sum = 0;
  }

  //по головній діагоналі

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) {
        if (pole[i][j].innerText === k)
          sum++;
      }

    }
  }
  if (sum === 3)
    return true;
  sum = 0;
  //по бічній діагоналі
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 3 - 1 - i) {
        if (pole[i][j].innerText === k)
          sum++;
      }
    }
  }
  if (sum === 3)
    return true;
  return false;
}
