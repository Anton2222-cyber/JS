//!Методы массивов
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 10));
// }
// console.log(arr);

// let res1 = arr.some((e) => e > 8);
// console.log(res1);
// let res1 = arr.every((e) => e > 0);
// console.log(res1);

// const arr = [11, 22, 33];
// console.log(arr);
// let res = arr.reduce((accum, e) => {
//   console.log("accum: " + accum + ", e: " + e);
//   return e * 10;
// }, -3);
// const res = arr.reduce((accum, e) => accum + e, 0);
// console.log(res);

// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 100));
// }
// console.log(arr);
// arr.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }
//   return 0;
// });
// arr.sort((a, b) => a - b);
// console.log(arr);

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// const users = [
//   new User('Ivan', 'Ivanov', 18),
//   new User('Petr', 'Petrov', 22),
//   new User('Stepan', 'Stepanov', 24),
//   new User('Olga', 'Ivanova', 16)
// ]
// console.log(users);
// const copy = users.slice();
// copy.sort((a, b) => a.age - b.age);
// console.log(copy);

// copy[0].firstName = "Bob";
// console.log(users);
// console.log(copy);

//!Цепочка вызовов методов
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 10));
// }
// console.log(arr);
// //TODO получить все элементы меньше 5 и умножить их на 3
// const res = arr
//   .filter(e => e < 5)
//   .map(e => e * 3);
// console.log(res);

//TODO получить все элементы меньше 5 и умножить их на 3
//TODO среди них найти первое четное число
// const res = arr
//   .filter(e => e < 5)
//   .map(e => e * 3)
//   .find(e => e % 2 === 0);
// console.log(res);

//!Сравнение строк
// const a = "qwerty";
// const b = "qwerty";
// console.log(a == b);
// console.log(a === b);
// console.log("w".charCodeAt());

// const a = "Artem";
// const b = "anton";
// console.log(a > b);//false
// console.log("A".charCodeAt());
// console.log("a".charCodeAt());

// const a = "anton";
// const b = "Artem";
// console.log(a.localeCompare(b));

//const arr = ["aaa", "ccc", "ddd", "bbb"];
// arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
//arr.sort((a, b) => a.localeCompare(b));
//console.log(arr);

//!Тип данных свойства объект
// const obj1 = {
//   666: "one",
// }
// const obj2 = {
//   "666": "two",
// }
// console.log(obj1[666]);
// console.log(obj2["666"]);

// const obj = {
//   666: "one",
//   // "666": "two",
//   true: "three"
// }
// console.log(obj);

//!Map
// const obj = new Map();
// obj.set(666, "one");
// obj.set("666", "two");
// console.log(obj);
// console.log(obj.get(666));
// console.log(obj.get("666"));

// const obj1 = { val1: 1, val2: 2 };
// const obj2 = { val1: 11 };
// const mainObj = {};
// mainObj[obj1] = 111;
// mainObj[obj2] = 222;
// console.log(mainObj);
// console.log(mainObj['[object Object]']);
// console.log(String(obj1));
// console.log(String(obj2));

// const user = { firstName: 'Petr', lastName: 'Petrov' };
// console.log(String(user));

// const obj1 = { val1: 1, val2: 2 };
// const obj2 = { val1: 11 };
// const mainObj = new Map();
// mainObj.set(obj1, 111);
// mainObj.set(obj2, 222);
// console.log(mainObj);

// const products = new Map([
//   ['milk', 20],
//   ['bread', 10],
//   ['chicken', 200]
// ])
// console.log(products);
// console.log(products.get('milk'));
// console.log(products.has('bread'));
// console.log(products.size);
// products.clear();
// console.log(products.size);
// for (let key of products.keys()) {
//   console.log(key);
// }
// for (let value of products.values()) {
//   console.log(value);
// }

//!Set
// const set = new Set();
// set.add(55);
// set.add(17);
// set.add(55);
// set.add(17);
// console.log(set);

//TODO найти числа в массиве, которые повторяются
//TODO получить их без дубликатов
// const myArray = [6, 4, 4, 4, 5, 5, 1, 2, 3, 6]; //6 4 5
// const newArr = new Set(myArray.filter((e, i) => myArray.indexOf(e) !== i));
// console.log(newArr);

//!Преобразование объектов
// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov'
// }
// console.log(String(user));
// console.log(Number(user));
// console.log(Boolean(user));

// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
//   age: 18,
//   toString() {
//     return `firstName=${this.firstName}, lastName=${this.lastName}`
//   },
//   valueOf() {
//     return this.age;
//   }
// }
// console.log(String(user));
// console.log(Number(user));
// console.log(Boolean(user));

// const user1 = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
//   age: 18,
//   valueOf() {
//     return this.age;
//   }
// }
// const user2 = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   age: 20,
//   valueOf() {
//     return this.age;
//   }
// }
// console.log(Number(user1));
// console.log(Number(user2));
// console.log(NaN > NaN);

// console.log(user1 < user2);
// console.log(user1 > user2);
// console.log(user1 == user2);

//!Деструктуризация массивов
// let fullName = 'Petr Petrov';

// const arrWords = fullName.split(' ');
// console.log(arrWords);
// const firstName = arrWords[0];
// const lastName = arrWords[1];
// console.log(firstName);
// console.log(lastName);
// console.log(arrWords[0]);
// console.log(arrWords[1]);

// const [firstName, lastName] = fullName.split(' ');
// console.log(firstName);
// console.log(lastName);

// const info = 'Petr Petrov 1990 IT';
// const [firstName, , , speciality] = info.split(' ');
// console.log(firstName);
// console.log(speciality);

// const user = {
//   firstName: 'Petr',
//   lastname: 'Petrov',
//   age: 18
// }
// const [firstName, lastName] = user;//error
// console.log(firstName);
// console.log(lastName);

//!Деструктуризация объекта
// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov',
//   age: 18
// }
// const { firstName, lastName } = user;
// console.log(firstName);
// console.log(lastName);

//const { firstName: f, lastName: l } = user;
// console.log(f);
// console.log(l);

const user = {
  firstName: 'Petr',
  lastName: 'Petrov',
  age: 18,
  address: {
    street: 'Ivanova',
    home: '18',
    room: '222'
  }
}
// const lastName = user.lastName;
// const home = user.address.home;
const { firstName, address: { home } } = user;
console.log(firstName);
console.log(home);


