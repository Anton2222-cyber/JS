//!return завершает работу функции
// function f(number) {
//   console.log("first");
//   if (number === 1) {
//     return;
//   }
//   console.log("second")
//   if (number === 2) {
//     return;
//   }
//   console.log("thrid");
//   if (number === 3) {
//     return;
//   }
// }
// f(2);
// console.log(f);

//!function expression
// let fun = function (message) {
//   console.log("<<<_" + message + "_>>>");
// }
// console.log(typeof fun);
// console.log(fun);
// fun("Hello");

// function original(message){
//   console.log("<<<_" + message + "_>>>");
// }
// let copy = original;
// original("test");
// copy("test");
// let result = original("hello");
// console.log(result);

//!function declaration vs function expression
// console.log(age);
// let age = 18;

// f1();
// function f1() {
//   console.log('declaration');
// }

// f2();
// let f2 = function () {
//   console.log('expression');
// }

//!debugger
// console.log('start');
// debugger
// let count = 1;
// for (let i = 0; i < 5; i++) {
//   console.log("count = " + count);
//   count *= 2;
// }
// console.log('finish');


//!callstack
// const f3 = function () {
//   console.log('3');
// }
// const f2 = function () {
//   f3();
//   console.log('2');
// }
// const f1 = function () {
//   f2();
//   console.log('1');
// }
// debugger
// f1();
// console.log('finish');

// let count = 1;
// const f2 = function () {
//   console.log("f2:" + count++);
//   f1();
//   console.log('f2 finish');
// }
// const f1 = function () {
//   console.log("f1:" + count++);
//   f2();
//   console.log('f1 finish');
// }
// debugger
// f1();
// console.log('finish');

//!рекурсия
// function f(count) {
//   console.log(count--);
//   if (count === 0) {
//     return;
//   }
//   f(count);
// }
// f(5)

//!arrow function
// let hello1 = function () {
//   console.log('Hello World');
// }
// let hello2 = () => console.log('Hello World');
// hello1();
// hello2();

// let print1 = function (message) {
//   console.log('<<<_' + message + '_>>>');
// }
// let print2 = (message) => console.log('<<<_' + message + '_>>>');
// let print2 = message => console.log('<<<_' + message + '_>>>');
// print1('KING');
// print2('KING');

// let sum1 = function (a, b) {
//   const result = `${a} + ${b} = ${a + b}`;
//   return result;
// }
// let sum2 = (a, b) => {
//   const result = `${a} + ${b} = ${a + b}`;
//   return result;
// }
// console.log(sum1(2, 2));
// console.log(sum2(2, 2));

// let sum1 = function (a, b) {
//   return `${a} + ${b} = ${a + b}`;
// }
// let sum2 = (a, b) => `${a} + ${b} = ${a + b}`;
// console.log(sum1(2, 2));
// console.log(sum2(2, 2));

//!Callback - это функция, передання в другую функцию в качестве аргумента
//!которая затем вызывается по завершению какого-либо действия.

//!Функция высшего порядка - это самая обычная функция, которая
//!оперирует другими функциями: принимает их как входные параметры
//!или возвращает в качестве выходных.

// function higherOrderFunction(callback) {
//   console.log('start');
//   callback();
//   console.log('finish');
// }
// function f1() {
//   console.log('work f1');
// }
// const f2 = function () {
//   console.log('work f2');
// }
// const f3 = () => console.log('work f3');
// higherOrderFunction(f1);
// higherOrderFunction(f2);
// higherOrderFunction(f3);
// higherOrderFunction(function () {
//   console.log('work f4');
// });
// higherOrderFunction(() => console.log('work f4'));

// function calc1(a, b) {
//   console.log(a + b);
// }

// function calc2(execute) {
//   const a = 5;
//   const b = 2;
//   execute(a, b);
// }

// function calc3(a, b, execute) {
//   execute(a, b);
// }

//!object
// let user1 = new Object();//конструктор объекта
// let user2 = {};//литерал объекта
// console.log(typeof user1);
// console.log(typeof user2);
// console.log(user1);
// console.log(user2);

// let user1 = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
//   'phone': '+38-066-666-66-66',
//   age: 18,
//   isMarried: true,
//   'pen name': 'Bob'
// }
// console.log(user1);

// let user2 = {
//   firstName: 'Ivan',
//   phone: '+38-077-770-77-77',
// }
// console.log(user2);
// console.log(user2.email);//нет такого свойства

// console.log(user1.firstName + " " + user1.lastName);
// console.log(user1['phone']);//-
// console.log(user1.phone);//+
// console.log(user1['pen name']);
// user1.phone = '+380-111-11-11';
// console.log(user1);

// function print(user) {
//   console.log(`FIRST NAME: ${user.firstName}, LAST NAME: ${user.lastName}`);
// }
// print(user1);
// print(user2);

//!Имя свойства может хранится в переменной
// const user = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov'
// }
// console.log(user);
// user.email = 'ivan@gmail.com';
// console.log(user);
// let key = 'isMarried';
// let value = true;
// user[key] = value;//вычисляемое свойство
// console.log(user);

// let data = 22;//male/female or целое число
// let user = {};
// let property;
// if (data === 'male' || data === 'female') {
//   property = 'gender';
// } else if (Number.isInteger(data)) {
//   property = 'age';
// }
// user[property] = data;
// console.log(user);

//!примитивы vs object
// let original = 'Petr';
// let copy = original;
// copy = 'Ivan';
// console.log(original);

// let original = 666;
// let copy = original;
// copy = 13;
// console.log(original);

// let original = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov'
// }
// let copy = original;
// copy.firstName = 'Petr';
// copy.lastName = 'Petrov';
// console.log(original);

// function changeNumber(number) {
//   ++number;
// }
// let number = 1;
// changeNumber(number);
// console.log(number);

// function changeAge(user) {
//   user.age++;
// }
// const user = { age: 18 };
// changeAge(user);
// console.log(user);




