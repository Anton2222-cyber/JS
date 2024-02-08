"use strict";
//!const vs let при работе с object
// let user1 = { firstName: 'Ivan' };
// const user2 = { firstName: 'Ivan' };
// user1.firstName = 'Petr';
// user2.firstName = 'Petr';
// console.log(user1);
// console.log(user2);
// user1 = 666;
// console.log(user1);
// user2 = 666;
// console.log(user2);

//!Вложенные объекты
// const user = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   age: 18,
//   address: {
//     city: 'Dnipro',
//     streeet: 'Dniprovska'
//   }
// }
// console.log(user);
// console.log(user.address.streeet);

//!Метод - это свойство, содержащее определение функции
//1-
// const user = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   age: 18,
//   sayHello: function(){
//     console.log('Hello World');
//   }
// }
// console.log(user);
// console.log(user.sayHello);
// user.sayHello();

//2+
// const user = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   age: 18,
//   sayHello(){
//     console.log('Hello World');
//   }
// }
// console.log(user);
// console.log(user.sayHello);
// user.sayHello();

//3+
// const user = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   age: 18,
//   sayHello: () => console.log('Hello World')
// }
// console.log(user);
// console.log(user.sayHello);
// user.sayHello();

//4
// function sayHello(){
//   console.log('Hello World!');
// }
// const user = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   age: 18,
//   sayHello
// }
// console.log(user);
// console.log(user.sayHello);
// user.sayHello();

// const age = 18;
// const user = {
//   firstName: 'Ivan',
//   age: age
// }
// console.log(user);
// const age = 18;
// const user = {
//   firstName: 'Ivan',
//   age
// }
// console.log(user.lastName);

//!this — это ссылка на некий объект, к свойствам которого можно
//!получить доступ внутри вызова функции.
// const user = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   showFullName() {
//     console.log(firstName + " " + lastName);
//   }
// }
// user.showFullName();

// console.log(price);

// const firstName = 'Petr';
// const lastName = 'Petrov';
// const user = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   showFullName() {
//     console.log(firstName + " " + lastName);
//   }
// }
// user.showFullName();

// const firstName = 'Petr';
// const lastName = 'Petrov';
// const user = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   showFullName() {
//     console.log(this.firstName + " " + this.lastName);
//   }
// }
// user.showFullName();

//!this не является фиксированным
// function showFullName() {
//   console.log(`first name: ${this.firstName}, last name: ${this.lastName}`);
// }
// const user1 = {
//   firstName: 'Ivav',
//   lastName: 'Ivanov',
//   showFullName
// }
// const user2 = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
// }
// const user3 = {
//   lastName: 'Stepan',
// }
// user2.showFullName = showFullName;
// user3.showFullName = showFullName;
// user1.showFullName();
// user2.showFullName();
// user3.showFullName();

// showFullName();
// this.showFullName();

// console.log(this);

// let f = function() {
//   console.log(`first name: ${this.firstName}, last name: ${this.lastName}`);
// }
// f();
// console.log(window);

//!различия стрелочной функции от других
//!у стрелочной функции нет своего this
//!strict mode

// let test = -1;
// function funcDeclaration() {
//   let test = 1;
//   // console.log(this.test);
//   console.log(this);
// }
// let funcExpression = function () {
//   let test = 2;
//   // console.log(this.test);
//   console.log(this);
// }
// let funcArrow = () => {
//   let test = 3;
//   // console.log(this.test);
//   console.log(this);
// }
// funcDeclaration();
// funcExpression();
// funcArrow();

// age = 13;
// console.log(age);

// let user1 = {
//   firstName: 'Petr',
//   showFirstName: function () {
//     console.log(this.firstName);
//   }
// }
// let user2 = {
//   firstName: 'Ivan',
//   showFirstName() {
//     console.log(this.firstName);
//   }
// }
// let user3 = {
//   firstName: 'Stepan',
//   showFirstName: () => console.log(this.firstName)
// }
// user1.showFirstName();
// user2.showFirstName();
// user3.showFirstName();

//!Массив - особый тип объекта
// let arr1 = new Array();
// let arr2 = [];
// let arr3 = [10, 12, 10, 11, 10, 12];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(typeof arr1);
// console.log(typeof arr2);
// console.log(typeof arr3);

// let arr = [10, 12, 10, 11, 10, 13];
// console.log(arr[0]);
// for (let i = 0; i < 6; i++) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr[arr.length - 1]);

// arr[20] = 100;//плохая практика
// console.log(arr);

// let values = [111, "Hello", true];
// console.log(values);

// let products = [
//   { name: "Сковорода", price: 399 },
//   { name: "Ром", price: 1459 }
// ]
// console.log(products);
// console.log(products[0].price);

//!структуры данных
//!очередь
let numbers = [];
// numbers.push(11);//добавляет в конец
// numbers.push(22);
// numbers.push(33);
// numbers.push(44);
// console.log(numbers.push(55));
// console.log(numbers);
// console.log(numbers.shift());
// console.log(numbers);
