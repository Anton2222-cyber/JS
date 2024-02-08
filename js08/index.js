'use strict';
//DOM
// console.log(document);
// const elem = document.getElementById('hello');
// console.log(elem);
// const text = elem.innerText;
// console.log(text);

// document.write("<span>test</span>");

// let nodes = document.body.childNodes;
// console.log(nodes);

// let children = document.body.children;
// console.log(children);

//TODO текст у заголовка меняется при каждом нажатии:
//TODO желтый или голубой
// const title = document.getElementById('hello');
// title.onclick = () => {
//   console.log('eeeeeeee!');
//   title.style.color = title.style.color === 'yellow' ? 'blue' : 'yellow'
// }

//setTimeout & setInterval
// const timout = setTimeout(() => console.log('Hello World'), 5000);
// const title = document.getElementById('hello');
// title.onclick = () => {
//   clearTimeout(timout);
// }

// const interval = setInterval(() => console.log('Hello World'), 1000);// const timout = setTimeout(() => console.log('Hello World'), 5000);
// const title = document.getElementById('hello');
// title.onclick = () => {
//   clearInterval(interval);
// }

// const btn = document.getElementById("btnColor");
// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'red';
// });
// btn.addEventListener('click', () => {
//   setInterval(() => console.log('Hello World'), 1000);
// });


// const btnStart = document.getElementById("btnColor");
// const btnStop = document.getElementById("btnStop");
// let interval = null;
// btnStart.addEventListener('click', () => {
//   interval = setInterval(() => {
//     console.log('Hello World!');
//   }, 2000)
// });
// btnStop.addEventListener('click', () => {
//   clearInterval(interval);
// })

// const btnStart = document.getElementById("btnColor");
// const btnStop = document.getElementById("btnStop");
// let interval = null;
// btnStart.addEventListener('click', () => {
//   if (interval === null) {
//     interval = setInterval(() => {
//       console.log('Hello World!');
//     }, 1000)
//   }
// });
// btnStop.addEventListener('click', () => {
//   clearInterval(interval);
//   interval = null;
// })

// const btnCount = document.getElementById('btnCount');
// const subTitle = document.getElementById('subTitle');
// let count = 0;
// btnCount.addEventListener('click', () => {
//   subTitle.innerText = ++count;
// })


//!финт с функцией
// function create(){
//   return function(){
//     console.log('Hello World');
//   }
// }
// const func = create();
// func();
// create()();

// function create() {
//   return function (message) {
//     console.log("message: " + message);
//   }
// }
// create()("KING");

//!Самовызывающая функция
// (function sayHell() {
//   console.log('Hello World!!!');
// })();

// function create() {
//   console.log('first');
//   return function () {
//     console.log('second');
//   }
// }
// create();
// create()();

// (function create() {
//   console.log('first');
//   return function () {
//     console.log('second');
//   }
// })()();

// (function func() {
//   console.log('func');
//   return func;
// })()()()()();

//!функция в JavaScript - это объект!!!
// function f() {
//   console.log('Hello World');
//   f.count++;
// }
// f();
// console.log(typeof f);
// f.count = 10;
// f();
// console.log(f);
// console.log(f.count);

// f.count = 0;
// f();
// f();
// f();
// f();
// console.log(f.count);

// f.first = () => console.log('one');
// f.second = () => console.log('two');
// console.log(f.first);
// console.log(f.second);

// f();
// f.first();
// f.second();

// function func(message, param) {
//   console.log(message);
// }
// console.log(func.name);
// console.log(func.length);

//!this у объектов
// const user1 = { firstName: 'Petr', lastName: 'Petrov' };
// const user2 = { firstName: 'Oleg' };
// const user3 = { lastName: 'Ivanov' };
// function fullName() {
//   console.log(this.firstName + ' ' + this.lastName);
// }
// user1.fullName();
// user1.printFullName = fullName;
// user1.printFullName();

// user2.printFullName = fullName;
// user2.printFullName();

// console.log(this);
// console.log(window);
// console.log(this === window);

// const v1 = 1;
// const v2 = 2;
// console.log(v1, v2, 'hello');

// function hello() {
//   console.log('Hello,', this);
// }
// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
//   sayHello: hello
// }
// user.hello();
// user.sayHello();
// hello();
// const cat = {
//   name: 'Mursik'
// }
// cat.print = hello;
// cat.print();

// window.hello();
// hello();

// function outer() {
//   function inner() {
//     console.log(this);
//   }
//   inner();
// }
// outer();

//метод bind() создает НОВУЮ функцию, которая при вызове
//устанавливает в качестве контекста выполнения this
//предоставленное значние

// function hello() {
//   console.log('Hello,', this);
// }
// const product = { price: 100 };
// const user = {
//   firstName: 'Petr',
//   lastName: "Petrov",
//   sayHello: hello.bind(product)
//   // sayHello: function () {
//   //   console.log('Hello, ', product);
//   // }
// }
// user.sayHello();

const user = {
  firstName: 'Petr',
  lastName: 'Petrov',
  printFullName() {
    console.log(`firstName=${this.firstName}, lastName=${this.lastName}`);
  }
}
// user.printFullName();
const superUser = {
  firstName: 'SuperFirstName',
  lastName: 'SuperLastName'
}
// superUser.printFullName = user.printFullName;
// superUser.printFullName();//SuperFirstName SuperLastName
user.printFullName.bind(superUser)();