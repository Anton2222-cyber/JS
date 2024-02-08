'use strict';

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// btn1.onclick = function () {
//   const style = getComputedStyle(this, null);
//   console.log(style.getPropertyValue('background-color'));
//   console.log(style.getPropertyValue('width'));

// }

// btn2.onclick = function () {
//   const style = getComputedStyle(this, null);
//   console.log(style.getPropertyValue('background-color'));
//   console.log(style.getPropertyValue('width'));
// }

//!свойства-аксесоры
// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   },
//   setFullName(fullName){
//     [this.firstName, this.lastName] = fullName.split(' ');
//   }
// }
// console.log(user);
// console.log(user.getFullName());
// user.setFullName('Sidor Sidorov');
// console.log(user);

// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
//   set fullName(fullName){
//     [this.firstName, this.lastName] = fullName.split(' ');
//   }
// }
// console.log(user);
// console.log(user.fullName);
// user.fullName = 'Sidor Sidorov';
// console.log(user);

//!Классы в js - разновидность функций.
// function User(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.printFullName = function(){
//     console.log('Hello from ' + this.firstName);
//   }
// }
// const user1 = new User('Ivan','Ivanov');
// const user2 = new User('Petr','Petrov');
// console.log(user1);
// console.log(user2);
// console.log(user1.printFullName === user2.printFullName);

// function User(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// User.prototype.sayHello = function(){
//   console.log('Hello from ' + this.firstName);
// }
// const user1 = new User('Ivan','Ivanov');
// const user2 = new User('Petr','Petrov');
// console.log(user1);
// console.log(user2);
// user1.sayHello();
// user2.sayHello();

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   printFullName(){
//     console.log(this.firstName + " " + this.lastName);
//   }
// }
// const user1 = new User('Ivan','Ivanov');
// const user2 = new User('Petr','Petrov');
// console.log(user1);
// console.log(user2);
// user1.printFullName();
// user2.printFullName();
// console.log(user1.printFullName);
// console.log(user2.printFullName);
// console.log(user1.printFullName === user2.printFullName);j

//!классы vs функции конструкторы
//1.вызываем только через new
//2.дескриптор enumerable для всех методов false
//3.внутри класса всегда 'use strict'

// class User {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }
//   printFullName() {
//     console.log(this.firstName + " " + this.lastName);
//   }

//   set firstName(v) {
//     this._firstName = v;
//   }
//   set lastName(v) {
//     this._lastName = v;
//   }
//   get firstName() {
//     return this._firstName;
//   }
//   get lastName() {
//     return this._lastName;
//   }
// }

// const user = new User('Ivan','Ivanov');
// console.log(user);
// user._lastName = 'Petrov';//плохая практика
// console.log(user._firstName);//плохая практика
// console.log(user._lastName);//плохая практика
// console.log(user.firstName);
// user.lastName = 'Petrov';
// console.log(user.lastName);
// console.log(user);

// class User {
//   #firstName;
//   #lastName;
//   constructor(firstName, lastName) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//   }
//   printFullName() {
//     console.log(this.#firstName + " " + this.#lastName);
//   }

//   set firstName(v) {
//     this.#firstName = v;
//   }
//   set lastName(v) {
//     this.#lastName = v;
//   }
//   get firstName() {
//     return this.#firstName;
//   }
//   get lastName() {
//     return this.#lastName;
//   }
// }
// const user = new User('Ivan', 'Ivanov');
// console.log(user);
// // console.log(user.#firstName);
// // #firstName = 'Petr';
// console.log(user.firstName);
// user.lastName = 'Petrov';
// console.log(user);

//!Прототипы - это механизм, с помощью которого объекты
//!JavaScript неследуют свойства друг от друга
// const user = {firstName: 'Ivan'};
// console.log(user);
// console.log(user.toString());

//!любой объкт создается с помощью функции констуктора или класса
// const obj1 = {};
// const obj2 = new Object();
// console.log(obj1);
// console.log(obj2);
// const sum = new Function('a', 'b', 'return a + b');
// console.log(typeof sum);
// console.log(sum(3, 3));

//!проблема дубликации кода
// function User(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.printFullName = function(){
//     console.log('Hello from ' + this.firstName);
//   }
// }
// const user1 = new User('Ivan','Ivanov');
// const user2 = new User('Petr','Petrov');
// console.log(user1.printFullName === user2.printFullName);
// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// User.prototype.printFullName = function () {
//   console.log('Hello from ' + this.firstName);
// };
// const user1 = new User('Ivan', 'Ivanov');
// const user2 = new User('Petr', 'Petrov');
// console.log(user1.printFullName === user2.printFullName);

//! __proto__ vs prototype
//!ссылки
// const a = { value: 1 };
// const b = a;
// const c = { value: a };
// console.log(a.value);
// b.value = 2;
// console.log(a.value);
// c.value.value = 3;
// console.log(a.value);
// console.log(a === b);//true
// console.log(a === c);//false
// console.log(c.value === a);//true
// console.log(c.value === b);//true

// const main = {};
// const obj1 = { v: main };
// const obj2 = { v: main };
// console.log(obj1.v === obj2.v);//true
// console.log(obj1.__proto__ === obj2.__proto__);//true
// console.log(obj1.__proto__);
// const arr1 = [];
// const arr2 = [];
// console.log(arr1.__proto__ === arr2.__proto__);
// console.log(arr1.__proto__);

//!любой объкт создается с помощью функции констуктора или класса
const v1 = { firstName: 'Petr' };//new Object
const v1_2 = { firstName: 'Sidr' };//new Object
const v2 = [1, 2, 3];//new Array
const v3 = function () { console.log('v3') };//new Function
const v4 = () => { console.log('v4') };//new Function
function v5() { console.log('v5') };//new Function
class v6 { };//new Function
const v7 = 1;//new Number
const v7_2 = 2;//new Number
const v8 = 'one';//new String
const v9 = true;//new Boolean

//!Почти у всего есть __proto__
// console.log(v1.__proto__);
// console.log(v1_2.__proto__);
// console.log(v2.__proto__);
// console.log(v3.__proto__);
// console.log(v4.__proto__);
// console.log(v5.__proto__);
// console.log(v6.__proto__);
// console.log(v7.__proto__);
// console.log(v7_2.__proto__);
// console.log(v8.__proto__);
// console.log(v9.__proto__);

// console.log(v1.__proto__ === v1_2.__proto__);
//__proto__ - ссылка на prototype

//!только function или class имеет prototype!!!!!

// class User {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }
// const user1 = new User('Petr');
// const user2 = new User('Sidr');
// console.log(user1.__proto__);
// console.log(user2.__proto__);
// console.log(user1.prototype);
// console.log(user2.prototype);
// console.log(user1.__proto__ === user2.__proto__);
// console.log(user1.__proto__ === User.prototype);
// console.log(user2.__proto__ === User.prototype);

//!Как понять куда смотрит __proto__???
//!А с помощью которой функции констукртора/класса был создан объект?
// const a = 1;
// console.log(a.__proto__ === Number.prototype);

// const st = 'Hello';
// console.log(st.__proto__ === String.prototype);

// function sum(a, b) {
//   console.log(a + b);
// }
// console.log(sum.__proto__ === Function.prototype);

// const numbers = [1, 2, 3];
// console.log(numbers.__proto__ === Array.prototype);

// const user = { firstName: 'Petr' };
// console.log(user.__proto__ === Object.prototype);

// class User {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
// }
// console.log(User.__proto__ === Function.prototype);
// const u = new User('Ivan');
// console.log(u.__proto__ === User.prototype);