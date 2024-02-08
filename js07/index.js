'use strict';
//!остаточные параметры при деструктуризации массива
// const userInfo = 'Petr Petrov 1990 IT';
// const[firstName, lastName, ...args] = userInfo.split(' ');
// console.log(firstName);
// console.log(lastName);
// console.log(args);

// const [one, two, ...all] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(all);

//!остаточные параметры в параметрах функции
// console.log(Math.max(3, 7, 5, 8, 2));

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(2, 2);
// sum(2, 2, 2)

// function sum() {
//   // console.log(arguments);
//   // console.log(arguments.length);
//   let res = 0;
//   for (const value of arguments) {
//     res += value;
//   }
//   console.log(res);
// }
// sum(1, 2, 3);
// sum(1, 2);
// sum(1, 1, 1, 1, 1);

// function sum(...params) {
//   const res = params.reduce((accum, v) => accum + v);
//   console.log(res);
// }

// sum(1, 1);
// sum(1, 1, 1);
// sum(5, 5, 5, 5, 5);
// sum(...[3, 3, 3]);//sum(3,3,3)  //оператор расширения

// function print(firstName, lastName, ...info) {
//   console.log(firstName + " " + lastName);
//   console.log(info);
// }
// print('Petr', 'Petrov', 1990, 'IT');
// print('Ivan Ivanov 1990 IT');
// print('Ivan Ivanov 1990 IT'.split(' '))
// const info = 'Ivan Ivanov 1990 IT';
// print(...info.split(' '));// print('Ivan', 'Ivanov', '1990', 'IT');

//!spread оператор(оператор расширения)
// const user = { firstName: 'Ivan', lastName: 'Ivanov' };
// const copy = {
//   firstName: user.firstName,
//   lastName: user.lastName
// };

// const copy = { ...user };
// console.log(user);//Ivan
// console.log(copy);//Ivan
// copy.firstName = 'Petr';
// console.log(user);//Ivan
// console.log(copy);//Petr

//!дата и время
// const today = new Date();
// console.log(today);

// new Date(year, month, day, hours, minutes, seconds, ms);
// const birthday = new Date(1990, 10, 23, 9, 35, 0, 0);
// console.log(birthday);
// console.log(birthday.getFullYear());
// console.log(birthday.getMonth());
// console.log(birthday.getDate());

// let start = new Date();
// let arr = [];
// for (let i = 0; i < 100_000; i++) {
//   // arr.push(i);
//   arr.unshift(i);
// }
// let end = new Date();
// console.log(end - start);

// const today = new Date();
// console.log(today);//субота

// var value1 = 1;
// let value2 = 1;
// console.log(value1);
// console.log(value2);
// value1 = 2;
// value2 = 2;
// console.log(value1);
// console.log(value2);
// console.log(typeof value1);
// console.log(typeof value2);

// if(true){
//   var value = 1;
// }
// if(true){
//   var value = 2;
// }
// console.log(value);

// function f(){
//   var value = 1;
// }
// f();
// console.log(value);

// var v = 1;
// var v = 2;
// console.log(v);

// let obj = {};
// obj.age = 1;
// obj.age = 2;
// console.log(obj);

//!глобальный объект
// alert("Hello 1");
// window.alert("Hello 2");
// let myVariable1 = 1;
// var myVariable2 = 2;
// console.log(window);
// console.log(window.myVariable1);
// console.log(window.myVariable2);

//Замыкание — это комбинация функции и лексического окружения,
//в котором эта функция была определена. MND -
//Замыкание (closure) представляют собой конструкцию, когда функция,
//созданная в одной области видимости,
//запоминает свое лексическое окружение даже в том случае,
//когда она выполняется вне своей области видимости. Metanit - 
//Замыкание - это функция, которая запоминает свои внешние переменные 
//и может получать к ним доступ. Learn JS +

//Лексическое окружение — это хранилище для данных в памяти и механизм для извлечения
//этих данных при обращении. Хелкост - 
//Лексическое окружение – это специальный внутренний объект
//В JavaScript у каждой выполняемой функции, блока кода и скрипта 
//есть связанный с ними внутренний (скрытый) объект,
// называемый лексическим окружением LexicalEnvironment.

//Объект лексического окружения состоит из двух частей:
//Environment Record – объект, в котором как свойства хранятся все локальные переменные
//(а также некоторая другая информация, такая как значение this).
//Ссылка на внешнее лексическое окружение – то есть то,
//которое соответствует коду снаружи (снаружи от текущих фигурных скобок).

// let test = 1;
// function big(){
//   let test = 2;
//   function middle(){
//     //let test = 3;
//     function small(){
//       // let test = 4;
//       console.log(test);
//     }
//     small();
//   }
//   middle();
// }
// big();

// function outer(){
//   let x = 0;
//   function inner(){
//     x++;
//     console.log(x);
//   }
//   return inner;
// }
// let func1 = outer();
// let func2 = outer();
// func1();//1
// func1();//2
// func1();//3
// func2();//1

//1
// let message = 'Hello WOrld';
// let value = 666;
// let outerFunc = () => {
//   let value = 777;
//   let innerFunc = () => {
//     console.log(value);
//   }
//   innerFunc();
//   console.log(message);
// }
// outerFunc();//777 Hello World

//2
// let outerFunc = () => {
//   let value = 777;
//   let innerFunc = () => {
//     console.log(value);
//   }
//   innerFunc();
//   console.log(message);
// }
// outerFunc();//777 error
// let message = 'Hello World';
// let value = 666;

//3
// let outerFunc = () => {
//   let value = 777;
//   let innerFunc = () => {
//     console.log(value);
//   }
//   innerFunc();
//   console.log(message);
// }
// let message = 'Hello World';
// let value = 666;
// outerFunc();//777 hello world

//!лексическое окружение создается во время вызова функции
// //LE - LexicalEnviromant
// // global LE = {outer: null};
// let message = 'Hello WOrld';
// // global LE = {outer: null, message: 'Hello World'};
// let value = 666;
// // global LE = {outer: null, message: 'Hello World', value = 666};
// let outerFunc = () => {
//   //local LE = {outer: global LE}
//   let value = 777;
//     //local LE = {outer: global LE, value: 777}
//   let innerFunc = () => {
//     //inner local LE = {outer: local LE }
//     console.log(value);
//   }
//   innerFunc();
//   console.log(message);
// }
// outerFunc();//777 Hello World