"use strict";
//!Массивы методы
// const arr = [];
// arr.push(11);//добавляет в конец массива, возвращает размер
// arr.push(22);
// arr.push(33);;
//const size = arr.unshift(44);//добавляет в начало массива, возвращает размер
//arr.pop();//удаляет с конца массива, возвращает сам элемент
//arr.shift();//удаляет с начала массива, возвращает сам элемент
//console.log(arr);
// console.log(size);

//!for in
// const user = {
//   firstName: "Ivan",
//   lastName: "Ivanov",
//   age: 18
// }
// for(const prop in user){
// console.log(prop);
//   console.log(user[prop]);
// }

// const arr = [11, 22, 33, 44];
// arr.test = "Hello";//плохая практика
// for (const prop in arr) {//плохая практика
//   console.log(prop);
// console.log(arr[prop]);
// }
// arr.length = 10;
// console.log(arr);

//!for of
// const user = {
//   firstName: "Ivan",
//   lastName: "Ivanov",
//   age: 18
// }
// for (const prop of user) {
//   console.log(prop);
// }

// const arr = [11, 22, 33, 44];
// for (const prop of arr) {
//   console.log(prop);
// }

//!Массив может хранить разные значения
// function f1() {
//   console.log('function 1');
// }
// const f2 = () => console.log('function 2');
// const arr = [];
// arr.push(f1, f2);
// console.log(arr);
// for (const func of arr) {
//   func();
// }

//!Массив массивов
// const main = [
//   [1, 2, 3],
//   [7, 8, 9]
// ];
// console.log(main[1][1]);
// console.log(main[1]);
// for (const innerArr of main) {
//   for (const v of innerArr) {
//     console.log(v);
//   }
// }

//!Массив объектов
// const users = [
//   {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     age: 18
//   },
//   {
//     firstName: 'Petr',
//     lastName: 'Petrov',
//     age: 22
//   },
//   {
//     firstName: 'Olga',
//     lastName: 'Ivanova',
//     age: 17
//   }
// ];
// let user = users[0];
// for (let u of users) {
//   if (u.age > user.age) {
//     user = u;
//   }
// }
// console.log(user.firstName);

//!Функции конструкторы
// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// const user = new User('Ivan', 'Ivanov', 18);
// console.log(user);
// const users = [
//   new User('Ivan', 'Ivanov', 18),
//   new User('Petr', 'Petrov', 20)
// ]
// console.log(users);

// const arr = new Array();
// const obj = new Object();
// console.log(arr);
// console.log(obj);

//!обвертки: String, Number, Boolean, Null...
// const number = 5.12345;
// const res = number.toFixed(2);
// console.log(typeof res);
// console.log(res);

// const a = 2;
// const b = 2;
// console.log(a == b);
// console.log(a === b);

// const a = new Number(2);
// const b = new Number(2);
// console.log(a == b);
// console.log(a === b);

//!Math
// let res1 = Math.floor(-4.99)//в меньшую сторону
// console.log(res1);
// let res2 = Math.ceil(-4.1);//в  большую сторона
// console.log(res2);
// let res3 = Math.round(-4.5);//до ближайшего целого
// console.log(res3);
// let res3 = Math.trunc(4.99);
// console.log(res3);

//!isFinite
// console.log(Number('12px'));
// console.log(isFinite(3 / 'a'));
// console.log(isFinite('   12   '));
// console.log(isNaN(3 / 'a'));
// console.log(parseInt('12px'));

// const str = 'Hello';
// console.log(str[0]);

//!Методы массивов
// let arr = [11, 22, 33];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 10) + 1)
// }
// console.log(arr);

// arr.forEach(function (item, index, array) {
//   console.log(item);
// });

// arr.forEach(function (item, index) {
//   console.log(index + ":  " + item);
// });

// arr.forEach(function (item) {
//   console.log(item);
// });

// arr.forEach(item => console.log(item * 10));

// arr.forEach((v, i) => console.log(`[${i}]=${v}`))

// for (let i = 0; i < arr.length; i++) {
//   console.log(`[${i}]=${arr[i]}`);
// }

// const arr = [1, 2, 3, 4, 5];
// const avg = arr.reduce((prev, current) => prev + current) / arr.length;
// console.log(avg);

//!Поиск
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1)
}
console.log(arr);
// console.log(arr.includes(7));
//TODO получить все однозначные значения
// const res = arr.filter((v) => v < 10);
// console.log(res);
// const res = [];
// for (const v of arr) {
//   if (v < 10) {
//     res.push(v);
//   }
// }

//TODO поулчить четное число
// const res = arr.find(v => v % 2 === 0);
// console.log(res);

//! map возвращает новый измененный массив
//TODO получить массив значений * 2
// const res = arr.map(v => v * 2);
// console.log(res);
// console.log(arr);

//TODO получить новый массив чисел,
//TODO значения массива, которые меньше 50 увеличить в два раза
//TODO остальные оставить без изменений
// const double = [];
// for (const v of arr) {
//   if (v < 50) {
//     double.push(v * 2);
//   } else {
//     double.push(v);
//   }
// }
// console.log(double);
const double = arr.map(v => v < 50 ? v * 2 : v);
console.log(double);