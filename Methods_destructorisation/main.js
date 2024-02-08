//!Методи масивів
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 10));
// }
// console.log(arr);
// let res1 = arr.some((e) => e > 8)
// console.log(res1);

// let res1 = arr.every((e) => e > 0)
// console.log(res1);


// const arr = [1, 2, 3];
// console.log(arr);
// let res = arr.reduce((accum, e)=>{
//   console.log("accum: "+accum+", e: "+e );
//   return e;
// },0)

// let res = arr.reduce((accum, e) => accum + e, 0)
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
// arr.sort((a, b) => b - a);
// console.log(arr);

// function User(firsName, lastName, age) {
//   this.firsName = firsName;
//   this.lastName = lastName;
//   this.age = age;
// }
// const users =[
//   new User('Ivan','Ivanov',18),
//   new User('Petr','Petrov',23),
//   new User('Stepan','Stepanov',11),
//   new User('Olga','Ivanova',16),
// ];
// console.log(users);
// const copy = users.slice();
// copy.sort((a,b)=>a.age-b.age);
// console.log(copy);
// copy[0].firsName='Bob';
// console.log(users);
// console.log(copy);

//!Ланцюжок викликів методів
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 10));
// }
// console.log(arr);
//TODO отримати всі елементи менші за 5 і помножити на 3
//TODO серед них знайти перше парне

// const res = arr
//   .filter(e => e < 5)
//   .map(e => e * 3)
//   .find(e => e % 2 === 0);
// console.log(res);

//!Порівняння рядків
// const a = 'qwerty';
// const b = 'qwerty';
// console.log(a == b);
// console.log(a === b);
// console.log('A'.charCodeAt());

// const a = 'Artem';
// const b = 'anton';
// console.log(a > b);

// const a = 'anton';
// const b = 'Artem';
// console.log(a.localeCompare(b));

//  const arr = ['aaa', 'ccc', 'ddd', 'bbb'];
// // arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
//  arr.sort((a, b) => a.localeCompare(b));
// console.log(arr);

//!типи даних влистивостей
// const obj1 ={
//   666: "one",
// }
// const obj2 ={
//   "666": "two",
// }
// console.log(obj1[666]);
// console.log(obj2["666"]);

// const obj = {
//   666: "one",
//   "666": "two",
//   true: 'three'
// }
// console.log(obj);

// const obj = new Map();
// obj.set(666,'one');
// obj.set("666","two");
// console.log(obj);
// console.log(obj.get(666));
// console.log(obj.get("666"));

// const obj1 = {val1:1, val2: 2};
// const obj2 = {val1:11};
// const mainObj={};
// mainObj[obj1]=111;
// mainObj[obj2]=222;
// console.log(mainObj);

// console.log(String(obj1));
// console.log(String(obj2));

//!set
// const set = new Set();
// set.add(55);
// set.add(17);
// set.add(55);
// set.add(17);
// console.log(set);

//!конвертування об'єктів
// const user ={
//   firstName: 'Petr',
//   lastName: 'Petrov',
//   toString(){
//     return "Hello JS"
//   }
// }
// console.log(String(user));
// console.log(Number(user));
// console.log(Boolean(user));