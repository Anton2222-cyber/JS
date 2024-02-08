'use strict';
//!bind
// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
// }
// function fullName() {
//   console.log(this.firstName + " " + this.lastName);
// }
// fullName();//context - 
// user.fullName = fullName;
// user.fullName();
// console.log(user);
// const newFun = fullName.bind(user);
// newFun();// context + 

//!call & aply
// const user1 = { firstName: 'Ivan', lastName: 'Ivanov' };
// const user2 = { firstName: 'Petr' };
// function fullName() {
//   console.log(this.firstName + " " + this.lastName);
// }
// fullName.call(user1);
// fullName.call(user2);
// console.log(user1);
// console.log(user2);

// const user1 = { firstName: 'Ivan', lastName: 'Ivanov' };
// const user2 = { firstName: 'Petr' };
// function fullName(message, end) {
//   console.log(message + this.firstName + " " + this.lastName + end);
// }
// fullName.call(user1, "Hello, ", "!");
// fullName.apply(user1, ["Welcome, ", "."]);

//!Стрелочная функция не имеет своего контекста,
//!она связывается с лексическим окружением, то есть функцией,
//!внутри которой определена стрелочная функция

//?определим стрелочную функции внутри объекта
// const myObj = {
//   prop: 'myObj',
//   f1() {
//     console.log(this);//this->myObj
//   },
//   f2: () => {
//     console.log(this);//this->window
//   }
// }
// myObj.f1();
// myObj.f2();

//?определим стрелочную функцию внутри обычной
// function outer() {
//   const inner = () => {
//     console.log(this);//user
//   }
//   inner();
// }
// // outer();//context = undefined
// const user = { firstName: 'first' };
// outer.call(user);

//?определим обычную функцию внутри обычной
// function outer() {
//   function inner() {
//     console.log(this);//undefined
//   }
//   inner();
// }
// // outer();//context = undefined
// const user = { firstName: 'first' };
// outer.call(user);

// function outer() {
//   function inner() {
//     console.log(this);//user
//   }
//   // inner.bind(this)();
//   inner.call(this);

// }
// // outer();//context = undefined
// const user = { firstName: 'first' };
// outer.call(user);

//!потеря контекста №1
// const user1 = {
//   firstName: 'Петр',
//   sayHello(){
//     console.log('Привет от ' + this.firstName);
//   }
// }
// const user2 = {
//   firstName: 'Bob',
//   sayHello(){
//     console.log('Hello from ' + this.firstName);
//   }
// }
// user1.sayHello();
// user2.sayHello();
// const func1 = user1.sayHello;//получили функцию sayHello отдельно от user1
// func1();
// const func2 = user2.sayHello;
// func2();

// const func1 = user1.sayHello.bind(user1);
// func1();

//!Потеря контекста №2
// const user1 = {
//   firstName: 'Петр',
//   sayHello() {
//     console.log('Привет от ' + this.firstName);
//   }
// }

// function func(callback) {
//   console.log('start');
//   callback();
//   console.log('finish');
// }
// func(user1.sayHello);
// func(user1.sayHello.bind(user1));

//! У стрелочных функций нет своего this
// const user1 = {
//   firstName: 'Bob',
//   sayHello: function () {
//     console.log('Hi from ' + this.firstName);
//   }
// }
// const user2 = {
//   firstName: 'Bob',
//   sayHello() {
//     console.log('Hi from ' + this.firstName);
//   }
// }
// const user3 = {
//   firstName: 'Bob',
//   sayHello: () => {
//     console.log('Hi from ' + this.firstName);
//   }
// }
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

//!контекст функций
// const user = {
//   firstName: 'Bob'
// }
// function outer() {
//   console.log('outer ', this);
//   function inner() {
//     console.log('inner ', this);
//   }
//   inner();
// }
// outer();
// outer.call(user);
// function outer() {
//   console.log('outer ', this);
//   const inner = () => {
//     console.log('inner ', this);
//   }
//   inner();
// }
// // outer();
// outer.call(user);

// const printer = {
//   items: [111, 222, 333],
//   print() {
//     this.items.forEach(() => console.log(this.items))
//   }
// }
// printer.print();

// const printer = {
//   items: [111, 222, 333],
//   print() {
//     this.items.forEach(function () {
//       console.log(this.items);
//     })
//   }
// }
// printer.print();

// const printer = {
//   items: [111, 222, 333],
//   print() {
//     this.items.forEach((function () {
//       console.log(this.items);
//     }).bind(this))
//   }
// }
// printer.print();

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// btn1.onclick = function () {
//   console.log(this);
//   console.log(this.style.backgroundColor);
// }
// btn2.onclick = () => {
//   console.log(this);
//   console.log(this.style.backgroundColor);
// }

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');

// function print() {
//   console.log(this.style.backgroundColor);
//   console.log(this.innerText);
// }
// // print();
// btn1.addEventListener('click', print);
// btn2.addEventListener('click', print);

// const btn1 = document.querySelector('#btn1');
// function print() {
//   setTimeout(function () {
//     console.log(this.style.backgroundColor);
//     console.log(this.innerText);
//   }, 1000);
// }
// btn1.addEventListener('click', print);

const btn1 = document.querySelector('#btn1');
function print() {
  setTimeout(() => {
    console.log(this.style.backgroundColor);
    console.log(this.innerText);
  }, 1000);
}
btn1.addEventListener('click', print);

//!дескрипторы
// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov'
// }
// // let discrFirstName = Object.getOwnPropertyDescriptor(user, 'firstName');
// // console.log(discrFirstName);
// Object.defineProperty(user, 'firstName', {
//   writable: false,
//   enumerable: false,
//   configurable: false
// });
// let discrFirstName = Object.getOwnPropertyDescriptor(user, 'firstName');
// console.log(discrFirstName);
// user.firstName = 'Bob';//ошибка
// console.log(user);
// console.log(user.firstName);

// for(let key in user){
//   console.log(key);
// }

// console.log(user);
// // delete user.firstName;//error
// delete user.lastName;
// console.log(user);
