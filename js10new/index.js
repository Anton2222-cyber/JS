'use strict';
//!любой объкт создается с помощью функции констуктора или класса
// const v1 = { firstName: 'Petr' };//new Object
// const v1_2 = { firstName: 'Sidr' };//new Object
// const v2 = [1, 2, 3];//new Array
// const v3 = function () { console.log('v3') };//new Function
// const v4 = () => { console.log('v4') };//new Function
// function v5() { console.log('v5') };//new Function
// class v6 { };//new Function
// const v7 = 1;//new Number
// const v7_2 = 2;//new Number
// const v8 = 'one';//new String
// const v9 = true;//new Boolean

//!__proto__ vs prototype
// const shape = { background: 'white', border: 'black' };
// console.log(shape.prototype);
// console.log(shape.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);
// console.log(shape.__proto__.__proto__ === null);

// const arr = [];
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__ === null);

// function Shape() {

// }
// const shape = new Shape();
// console.log(shape.__proto__ === Shape.prototype);
// console.log(Shape.__proto__ === Function.prototype);
// console.log(Shape.prototype.__proto__ === Object.prototype);
//console.log(shape.__proto__.__proto__ === Object.prototype);
// console.log(shape.__proto__.__proto__.__proto__ === null);

//меняем __proto__
// const shape = { background: 'white', border: 'black' };
// const rectangle = { width: 20, height: 40 };
// console.log(rectangle.__proto__ === Object.prototype);
// Object.prototype.printShape = function () {
//   console.log("I'm SHAPE!!!");
// }
// console.log(rectangle.toString());
// rectangle.printShape();
// shape.printShape();
// const arr = [1, 2, 3];
// arr.printShape();

// const shape = { background: 'white', border: 'black' };
// const rectangle = { width: 20, height: 40 };
// rectangle.__proto__ = shape;
// // console.log(rectangle);
// // console.log(rectangle.border);
// const circle = { radius: 15 };
// circle.__proto__ = shape;
// // console.log(circle);
// console.log(circle.border);//black
// circle.border = 'red';
// // console.log(circle);
// console.log(circle.border);//red
// console.log(rectangle.border);//black
// console.log(circle.__proto__ === shape);
//!не удобно устанавливать каждому объекту __proto__

// function Shape(background, border) {
//   this.background = background;
//   this.border = border;
// }
// Shape.prototype.info = () => console.log("I'm shape");
// const rectangle1 = new Shape('red', 'green');
// const rectangle2 = new Shape('blue');
// rectangle1.info();
// rectangle2.info();

// function Shape(background, border) {
//   this.background = background;
//   this.border = border;
// }
// // console.log(Shape);
// // console.log(Shape.prototype);
// Shape.prototype = { constructor: Shape, info: () => console.log("SHAPE") };
// const shape = new Shape('red', 'blue');
// console.log(shape);
// shape.info();

// const shape = { background: 'white', border: 'black' };
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }
// // console.log(Rectangle.prototype.constructor === Rectangle);
// Rectangle.prototype = shape;
// const rectangle = new Rectangle(3, 6);
// // console.log(rectangle);
// // console.log(rectangle.background);
// // console.log(rectangle.border);
// console.log(rectangle.__proto__ === shape);
// console.log(rectangle.__proto__.__proto__ === Object.prototype);

//!цепочка прототипов
// class A {
//   printA() {
//     console.log('Functional A!');
//   }
// }
// class B extends A {
//   printB() {
//     console.log('Functional B!');
//   }
// }
// class C extends B {
//   printC() {
//     console.log('Functional C!');
//   }
// }
// const c = new C();
// c.printA();
// c.printB();
// c.printC();
// const a = new A();
// a.printA();
// console.log(c.__proto__ === C.prototype);
// console.log(c.__proto__.__proto__ === B.prototype);
// console.log(c.__proto__.__proto__.__proto__ === A.prototype);
// console.log(c.__proto__.__proto__.__proto__.__proto__ === Object.prototype);

//!классы extends
// class Shape {
//   constructor(borderColor = 'black', backgroundColor = 'white') {
//     this.borderColor = borderColor;
//     this.backgroundColor = backgroundColor;
//   }
//   printColor() {
//     console.log(`borderColor=${this.borderColor}`);
//     console.log(`backgroundColor=${this.backgroundColor}`);
//   }
//   calcArea() {
//     console.log('area = 0');
//   }
// }
// class Rectangle extends Shape {
//   #width
//   #height
//   constructor(borderColor, backgroundColor, width = 0, height = 0) {
//     super(borderColor, backgroundColor);//вызов родительского констуктора
//     this.#width = width;
//     this.#height = height;
//   }
//   calcArea() {
//     console.log(`area = ${this.#width * this.#height}`);
//   }
// }
// const rectangle1 = new Rectangle();
// console.log(rectangle1);
// const rectangle2 = new Rectangle('red', 'blue', 3, 6);
// console.log(rectangle2);
// // rectangle1.printColor();
// // rectangle2.printColor();
// rectangle1.calcArea();
// rectangle2.calcArea();
// console.log(rectangle2);

//!static
// function Func() {
//   this.sayHello = () => console.log('Hello World');
// }
// Func.test = () => console.log('TEST!!!');
// // const f = new Func();
// // f.sayHello();
// Func.test();

// class Character {
//   static counter = 0;
//   constructor(name, life) {
//     this.id = ++Character.counter;
//     this.name = name;
//     this.life = life;
//   }
//   lossLife(damage) {
//     this.life -= damage;
//   }
//   info() {
//     console.log(`${this.name} ${this.life} hp`);
//   }
//   static favorite(hero1, hero2) {
//     return hero1.life >= hero2.life ? hero1 : hero2;
//   }
// }
// // Character.test = 666;
// // console.log(Character.test);

// const character1 = new Character('Killer', 150);
// const character2 = new Character('Nagibator', 200);
// character1.info();
// console.log(character1);
// console.log(character2);
// console.log(Character.favorite(character1, character2));

//TODO практика. Создать свой массив на основе object.
function MyArray() {
  this.length = 0;
}
MyArray.prototype.push = function (...value) {
  for (const v of value) {
    this[this.length] = v;
    this.length++;
  }
  return this.length;
}
MyArray.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
MyArray.prototype.filter = function (callback) {
  const newArr = new MyArray();
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

const arr = new Array();
arr.push(11, 22, 33);
arr.forEach((value, index, arr) => console.log(value, index, arr));
const newArr = arr.filter((value) => value % 2 === 0);
console.log(newArr);
// console.log(arr);

const myArr = new MyArray();
myArr.push(11, 22, 33);
myArr.forEach((value, index, arr) => console.log(value, index, arr));
const newMyArr = arr.filter((value) => value % 2 === 0);
console.log(newMyArr);
// console.log(myArr);

