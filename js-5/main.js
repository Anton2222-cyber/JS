"use strict";
//!Масиви методи
// const arr = [];
// arr.push(11);
// arr.push(22);
// arr.push(33);
// arr.unshift(44);//додає на початок повертає розмір
// arr.shift();//видаляє з початку
// arr.pop();//видаляє з кінця масива, повертає сам елемент
// console.log(arr);

//!for in
// const user={
//   firstName: "Ivan",
//   lastName: "Ivanov",
//   age: 18
// }
// for(const prop in user){
//   // console.log(prop);
//   console.log(user[prop]);
// }

// const arr = [11, 22, 33, 44];
// for(const prop in arr){
//   //  console.log(prop);
//   console.log(arr[prop]);
// }

//!for of
// const user={
//   firstName: "Ivan",
//   lastName: "Ivanov",
//   age: 18
// }
// for(const prop of user){
//   // console.log(prop);
//   console.log(user[prop]);
// }

// const arr = [11, 22, 33, 44];
// for(const prop of arr){
//     console.log(prop);
// }

//!Масив може зберігати різні значення
// function f1(){
//   console.log("function 1");
// }
// const f2=()=>console.log("function 2");
// const arr = [];
// arr.push(f1,f2);
// console.log(arr);
// for(const func of arr)
// {
//   func();
// }

//!масив масивів
// const main = [
//   [1, 2, 3],
//   [7, 8, 9]
// ];
// console.log(main[1][1]);
// console.log(main[1]);
// for (const innerArr of main) {
//   // console.log(innerArr);
//   for (const v of innerArr) {
//     console.log(v);
//   }
// }
//!мвсив об'єктів
// const users = [
//   {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     age: 18
//   },
//   {
//     firstName: 'Petr',
//     lastName: 'Petrov',
//     age: 22
//   },
//   {
//     firstName: 'Olga',
//     lastName: 'Ivanova',
//     age: 17
//   }
// ];

// let user = users[0];
// for (let u of users) {
//   if (u.age > user.age) {
//     user = u;
//   }

// }
// console.log(user.firstName);

//!Функції конструктори
// function User(firstName, lastName, age){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// // const user = new User('Ivan','Ivanov',18);
// // console.log(user);
// const users =[
//   new User('Ivan','Ivanov',18),
//   new User('Petr','Petrov',22),
// ];
// console.log(users);



//! обгортки: String,Number,Boolean,Null...
// let number = 5.12545;
// const res = number.toFixed(2);
// console.log(typeof res);
// console.log(res);

// const a = 2;
// const b = 2;
// console.log(a == b);
// console.log(a === b);

// const a = new Number(2);
// const b = new Number(2);
// console.log(a == b);
// console.log(a === b);

//!Math 
// let res = Math.floor(-4.99)//в меншу сторону
// console.log(res);

// let res2 = Math.ceil(-4.1);
// console.log(res2);
// let res3 = Math.round(4.4);//до ближнього цілого
// console.log(res3);

// let res3 = Math.trunc(4.99);
// console.log(res3);

//!isFinite
//console.log(Number('12px'));
// console.log(isFinite(3 /'a'));
// console.log(isFinite('   12    '));
// console.log(isNaN(3 / 'a'));
// console.log(parseInt('12px'));

// const str = 'Hello';
// console.log(str[0]);
//!Методи масивів
// let arr = [11, 22, 33];
// for(let i = 0; i<10;i++){
//   arr.push(Math.floor(Math.random()*10)+1);
// }
// console.log(arr);

// arr.forEach(function(item, index,array){
// console.log(item);
// });

// arr.forEach(function(item, index){
//   console.log(index);
//   });

// arr.forEach(function(item){
//   console.log(item);
//   });

// arr.forEach(item=>console.log(item * 10));

// arr.forEach((v,i)=>console.log(`[${i}]=${v}`))
// for (let i = 0; i < arr.length; i++) {
//   console.log(`[${i}]=${arr[i]}`)
// }

//  let arr = [1, 2, 3, 4, 5];

// let sum=0;
// for(const v of arr){
//   sum+=v;
// }
// const av=sum/arr.length
// console.log(av);

// const avg = arr.reduce((prev,current)=>prev+current)/arr.length;
// console.log(avg);

//!Пошук
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr);
// console.log(arr.includes(7));
//TODO отримати всі однозначні значення
// const arr2 = arr.filter((v) => v < 10);
// console.log(arr2);

//TODO отримати перше парне число
// const res = arr.find((v) => v % 2 === 0);
// console.log(res);

//! map повертає новий змінений масив
//TODO отримати масив значень * 2
// const res = arr.map(v=>v*2);
// console.log(res);
// console.log(arr);
//TODO отримати новий масив чисел, значення яких
//TODO менше за 50 *2
//TODO інші залишити без змін
// const double =[];
// for( const v of arr){
//   if(v<50){
//     double.push(v*2)
//   }
//   else{
//     double.push(v)
//   }
// }
const double = arr.map(v=>v<50?v*2:v);
console.log(double);