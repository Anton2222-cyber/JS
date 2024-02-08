"use strict";
//! 1. Создать функцию коструктор User, который должен хранить следующую инф. о пользователе:
//! полное имя, возраст, пол, электронную почту, страну проживания,оклад, должность, отдел;
//! Создать массив юзеров(10 штук).
function User(fullName, age, gender, email, country, salary, post, department) {
  this.fullName = fullName;
  this.age = age;
  this.gender = gender;
  this.email = email;
  this.country = country;
  this.salary = salary;
  this.post = post;
  this.department = department;
}

const users = [
  new User('Ivanov Ivan Ivanovych', 18, 'man', 'ivanovychivan@gmail.com', 'Ukraine', 20000, 'developer', 'Codding'),
  new User('Lashch Anton Vadymovych', 22, 'man', 'antonlashch@icloud.com', 'Ukraine', 20000, 'developer', 'Codding'),
  new User('Panasiuk Bogdan Viktorovych', 24, 'man', 'panasiuk@gmail.com', 'Great Britan', 27000, 'developer', 'Codding'),
  new User('Lashch Vadym Oleksandrovych', 35, 'man', 'lashch@gmail.com', 'Ukraine', 20000, 'developer', 'Codding'),
  new User('Zhylko Mykola Ivanovych', 25, 'man', 'mykolaivanovych@icloud.com', 'USA', 28000, 'developer', 'Codding'),
  new User('Shvaiko Liubov Ivanivna', 30, 'woman', 'liubovivanivna@icloud.com', 'Ukraine', 20000, 'developer', 'Codding'),
  new User('Shvaiko Sophia Ivanivna', 22, 'woman', 'shvaikosophia@icloud.com', 'Ukraine', 19000, 'developer', 'Codding'),
  new User('Ivanov Vasyl Viktorovych', 25, 'man', 'ivanovvasyl@icloud.com', 'Ukraine', 24000, 'developer', 'Codding'),
  new User('Panasiuk Masha Ivanivna', 25, 'woman', 'panasiukmasha@icloud.com', 'Ukraine', 21000, 'developer', 'Codding'),
  new User('Lashch Vladislav Ivanovych', 35, 'man', 'lashchvladislav@gmail.com', 'Ukraine', 35000, 'developer', 'Team leader'),
];

// console.log(users);

//! 2.Есть массив юзеров. Создать копию массива.
//! Если данные о юзере менять в оригинале - копия остается без изменений.
//const copy = users.map(v => new User(v.fullName, v.age, v.gender, v.email, v.country, v.salary, v.post, v.department));
//users[0].age = 2;
//console.log(copy);
//console.log(users);

//! 3. Получить пользователей у которых почта заканчивается на "@gmail.com" (Array User)
//  const users2 = users.filter(v => v.email.endsWith('@gmail.com'));
//  console.log(users2);

//! 4. Получить электронные почты всех совершеннолетних женщин,
//! не старше 30 лет, проживающих в Украине(Array String)
// const emails = users.filter(v => v.gender === 'woman' && v.age >= 18 && v.age <= 30&& v.country === 'Ukraine').map(v=>v.email)
// console.log(emails);

//! 5.Получить все возраста совершеннолетних мужчин(Array Number)
// const ages = users.filter((v) => v.gender === 'man' && v.age >= 18).map(v=>v.age)
// console.log(ages);

//! 6.Найти самого старшего(User)
// let user = users.find(x=>x.age===users.reduce((accum, e) => accum > e.age?accum:e.age,0))
// console.log(user);

//? *Для себя реализовать пузырьковую сортировку массива чисел
//? Тут использовать циклы и ифы.
// function sort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j + 1];
//         array[j + 1] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// } 

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 100) + 1);

// }
// console.log(arr);
// console.log(sort(arr));
