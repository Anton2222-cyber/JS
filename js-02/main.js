// console.log('hello');
//!Сокрощенные операторы
// let n = 1;
// n = n + 10;
// n += 10;
// console.log(n);

//!Инкремент/декремент
// let count = 1;
// let res = count++;
// console.log(res);

// let count = 1;
// let res = ++count;
// console.log(res);

//!!Операторы сравнеия  >  <  >=  <=   ==  !=   ===  !==
// let a = 2;
// let b = "2";
// console.log(a == b);
// console.log(a === b);
// console.log(true == Boolean("false"));
// console.log(1 == true);
// console.log(1 === Number(true));

//!Сравнение строк
// let a = 'Artem';
// let b = 'artem';
// console.log(a > b);
// console.log('a'.charCodeAt());

//!Сравнивая разные типы будут приводится к number
// console.log(true > '');

//if
// let age = 16;
// if (age >= 18) {
//   console.log('Есть доступ');
// } else {
//   console.log('Нет доступ');
// }

//Цепочка операторов else-if
// let number = 2;//Введите число от 1 до 3
// if (number === 1) {
//   console.log('selected 1');
// }
// if (number === 2) {
//   console.log('selected 2');
// }
// if (number === 3) {
//   console.log('selected 3');
// } else {
//   console.log('error');
// }

// let number = 2;//Введите число от 1 до 3
// if (number === 1) {
//   console.log('selected 1');
// } else if (number === 2) {
//   console.log('selected 2');
// } else if (number === 3) {
//   console.log('selected 3');
// } else {
//   console.log('error');
// }

//!Тернарный оператор
// let result;
// let number = -5;
// if (number >= 0) {
//   result = 'positive';
// } else {
//   result = 'negative';
// }
// console.log(result);

// let number = -5;
// let result = (number >= 0) ? 'positive' : 'negative';
// console.log(result);

//!Логические операторы && || !
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);

//!Получение первого истинного значения из списка переменных или последнее ложное
// let a = null;
// let b = '';
// let c = 1;
// let d = undefined;
// const res = a || b || c || d;
// console.log(res);

// let a = null;
// let b = '';
// let c = false;
// let d = undefined;
// const res = a || b || c || d;
// console.log(res);

//!Получение первого ложного значения из списка переменных или последнее правдивое
// let a = 1;
// let b = 0;
// let c = "http";
// let d = 123;
// const res = a && b && c && d;
// console.log(res);

// const password = "qwerty";
// const userInput = "qwerty";
// console.log('start');
// if (password === userInput) {
//   console.log('запуск!');
// }else{
//   console.log(false);
// }
// console.log('end');

// const password = "qwerty";
// const userInput = "qwert";
// console.log('start');
// console.log(password === userInput && 'запуск');
// console.log('end');

//TODO Хотите сделать перерыв в игре? да/нет
// let isFinished = true;
// if(!isFinished){
//   console.log('Запуск нового уровня!');
// }

// let isFinished = true;
// if(isFinished === false){
//   console.log('Запуск нового уровня!');
// }

//!switch
// let number = "1";
// switch (number) {//===
//   case "1":
//     console.log("один строка");
//   case "2":
//     console.log("два строка");
//   case "3":
//     console.log("три строка");
//     break;
//   case 1:
//     console.log("один число");
//   case 2:
//     console.log("два число");
//   case 3:
//     console.log("три число");
//     break;
//   default:
//     console.log("error");
//     break;
// }

//!циклы  while   do while    for
// let count = 5;
// while (count--) {
//   console.log("work");
// }

// for (let i = 0; i < 3; i++) {
//   console.log('work');
// }

//!Метки
// let count = 0;
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     // console.log("i = " + i + ", j = " + j + ", count = " + ++count);
//     console.log(`i = ${i}, j = ${j}, count = ${++count}`);
//     if (count === 5) {
//       break;
//     }
//   }
// }

// let count = 0;
// outer:
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     // console.log("i = " + i + ", j = " + j + ", count = " + ++count);
//     console.log(`i = ${i}, j = ${j}, count = ${++count}`);
//     if (count === 5) {
//       break outer;
//     }
//   }
// }

//!Функции function declaration
// function print(){
//   console.log("one");
//   console.log("two");
//   console.log("three");
// }
// print();
// print();
// print();

//!Параметры функции
// function sum(a, b) {
//   console.log(`${a} + ${b} = ${a + b}`);
// }
// sum(2, 2);
// sum(2, "2");
// sum(2);
// sum();
// sum(2, 2, 2, 2);

//!Параметры по умолчанию
// function sum(a = 0, b = 0) {
//   console.log(`${a} + ${b} = ${a + b}`);
// }
// sum(2, 2);
// sum(2);

//TODO: Функция принимает число и отображает все делители этого число(в одну строку)
//TODO: Например  8 = 1 2 4 8     9 = 1 3 9
// const start = new Date().getTime();
// function findAllDelimeters(number) {
//   let result = number + " = ";
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       result += i + " ";
//     }
//   }
//   console.log(result);
// }
// findAllDelimeters(1_000_000_000);
// const end = new Date().getTime();
// console.log(end - start);//5578

// const start = new Date().getTime();
// function findAllDelimeters(number) {
//   let result = number + " = ";
//   for (let i = 1; i <= number / 2; i++) {
//     if (number % i === 0) {
//       result += i + " ";
//     }
//   }
//   result += number;
//   console.log(result);
// }
// findAllDelimeters(1_000_000_000);
// const end = new Date().getTime();
// console.log(end - start);//2764

//!Возвращаемое значение
// const a = alert("alert");
// console.log(typeof a);//undefiend
// const b = prompt("prompt");
// console.log(typeof b);//string/null
// const c = confirm("confirm");
// console.log(typeof c);//boolean

// function f(){
//   let a = 13;
// }
// const res = f();
// console.log(res);
// console.log(typeof res);

// function sum(a, b) {
//   return `${a} + ${b} = ${a + b}`;
// }
// const res = sum(2, 2);
// console.log(res);
// console.log(sum(2, 2));

// function sum(a = 0, b = 0) {
//   console.log(`${a} + ${b} = ${a + b}`);
// }
// sum(2, 2);

