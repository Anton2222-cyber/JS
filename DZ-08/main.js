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
  new User('Ivanov Ivan Ivanovych', 17, 'man', 'ivanovychivan@gmail.com', 'Ukraine', 20000, 'developer', 'Codding'),
  new User('Lashch Anton Vadymovych', 22, 'man', 'antonlashch@icloud.com', 'Ukraine', 20000, 'developer', 'Codding'),
  new User('Panasiuk Bogdan Viktorovych', 24, 'man', 'panasiuk@gmail.com', 'Great Britan', 27000, 'developer', 'Codding'),
  new User('Lashch Vadym Oleksandrovych', 35, 'man', 'lashch@gmail.com', 'Ukraine', 20000, 'developer', 'Codding'),
  new User('Zhylko Mykola Ivanovych', 25, 'man', 'mykolaivanovych@icloud.com', 'USA', 28000, 'developer', 'Codding'),
  new User('Shvaiko Liubov Ivanivna', 30, 'woman', 'liubovivanivna@icloud.com', 'Ukraine', 20000, 'developer', 'Codding'),
  new User('Shvaiko Sophia Ivanivna', 22, 'woman', 'shvaikosophia@icloud.com', 'Ukraine', 19000, 'developer', 'Codding'),
  new User('Ivanov Vasyl Viktorovych', 25, 'man', 'ivanovvasyl@icloud.com', 'Ukraine', 24000, 'developer', 'Codding'),
  new User('Panasiuk Masha Ivanivna', 15, 'woman', 'panasiukmasha@icloud.com', 'Ukraine', 21000, 'developer', 'Codding'),
  new User('Lashch Vladislav Ivanovych', 35, 'man', 'lashchvladislav@gmail.com', 'Ukraine', 35000, 'developer', 'Team leader'),
];

// console.log(users);

//! 2.Есть массив юзеров. Создать копию массива.
//! Если данные о юзере менять в оригинале - копия остается без изменений.
// const copy = users.map(v => new User(v.fullName, v.age, v.gender, v.email, v.country, v.salary, v.post, v.department));
// users[0].age = 2;
// console.log(copy);
// console.log(users);

//! 3. Есть ли среди мужчин несовершеннолетний(Boolean)
// console.log(users.some(e => e.age < 18 && e.gender === 'man'));

//! 4. Получить средний возраст всех мужчин(Number)
// console.log(users.reduce((sum, e) => sum + e.age, 0) / users.length);

//! 5. Получить средний возраст среди несовершеннолетних(Number)
// let usersTmp = users.filter(x => x.age < 18);
// console.log(usersTmp.reduce((sum, e) => sum + e.age, 0) / usersTmp.length);
//?or
// console.log(users.filter(x => x.age < 18).reduce((sum, e) => sum + e.age, 0) / users.filter(x => x.age < 18).length);

//! 6. Получить средний оклад на определенный отдел(Number)
// let usersTmp = users.filter(x => x.department === 'Codding');
// console.log((usersTmp.reduce((sum, e) => sum + e.salary, 0) / usersTmp.length).toFixed(2));

//! 7. Получить отсортированные имена(Array String)
// let usersFullNames = users.sort((a, b) => a.fullName.localeCompare(b.fullName)).map(x => x.fullName);
// console.log(usersFullNames);

// ! 8 ** Найти числа в массиве, которые повторяются
// ! получить их без дубликатов. Использовать
// ! только циклы, ифы и массивы(НИКАКИХ СТОРОННИХ МЕТОДОВ!)
// ! const myArray = [6, 4, 4, 4, 5, 5, 1, 2, 3, 6];        //result new arr: 6 4 5

// const myArray = [6, 4, 4, 4, 5, 5, 1, 2, 3, 6];
// const res = [];
// for (let i = 0; i < myArray.length; i++) {
//   let count = 0;
//   for (let j = 0; j < myArray.length; j++) {
//     if (myArray[i] === myArray[j]) {
//       count++;
//     }

//   }
//   if (count >= 2) {
//     let b = true;
//     for (let k = 0; k < res.length; k++) {
//       if (myArray[i] === res[k]) {
//         b = false
//       }
//     }
//     if (b) {
//       res.push(myArray[i]);
//     }

//   }

// }
// console.log(res);