
// const arr = [];
// arr.length = 10;

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = prompt(`Введіть рядок ${i+1}`)
// }

// const res = [];
// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }

//   }
//   if (count >= 2) {
//     let b = true;
//     for (let k = 0; k < res.length; k++) {
//       if (arr[i] === res[k]) {
//         b = false
//       }
//     }
//     if (b) {
//       res.push(arr[i]);
//     }

//   }

// }
// let sortarr = res.sort((a, b) => a.localeCompare(b));
// alert(sortarr);
'use strict';
//!Залишкові параметри
// const userInfo = 'Petr Petrov 1990 IT';
// const[firstName, lastName, ...args]=userInfo.split(' ');
// console.log(lastName);
// console.log(lastName);
// console.log(args);

// const [one, two, ...all] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(all);

//! залишкові параметри в функціях
// console.log(Math.max(3, 7, 5));

// function sum() {
//   let res = 0;
//   for (const value of arguments) {
//     res += value;
//   }
//   console.log(res);
// }
// sum(2, 2);
// sum(2, 2,3,3);

// function sum(...params) {
//   const res = params.reduce((accum, v) => accum + v);
//   console.log(res);
// }
// sum(2, 2);
// sum(2, 2, 3, 3);
// sum(...[3, 3, 3]);

// function print(firstName, lastName, ...info) {
// console.log(firstName + " "+lastName);
// console.log(info);
// }
// print('Petr','Petrov',1990,'IT');
// print('Petr','Petrov');
//  print('Petr Petrov 1990 IT'.split(' '));

// const info = 'Petr Petrov 1990 IT';
// print(...info.split(' '))

//const user = { firstName: 'Ivan', lastName: 'Ivanov' };
// const copy = {
//   firstName: user.firstName,
//   lastName: user.lastName
// }
// const copy = {...user}
// console.log(copy);
// console.log(user);
// copy.firstName = 'Petr';
// console.log(copy);
// console.log(user);

//!Дата та час
// const today = new Date();
// console.log(today);

// const birthday = new Date(1990,10,23,9,35,0,0);
// console.log(birthday);
// console.log(birthday.getFullYear());
// console.log(birthday.getMonth());
// console.log(birthday.getDay());

// let start = new Date();
// let arr = [];
// for (let i = 0; i < 100_000; i++) {
//    arr.push(i);
//   // arr.unshift(i);
// }
// let end = new Date();
// console.log((end - start));

// var value1 = 1;
// let value2 = 2;
// console.log(value1);
// console.log(value2);
// value1 = 2;
// value2 = 2;
// console.log(value1);
// console.log(value2);


// if(true){
//   let value = 1;
//   //var value = 1;
// }
// console.log(value);

