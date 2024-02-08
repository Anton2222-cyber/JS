'use strict';

//! 1. Создать объект project. У него есть название, например FaceBook.
//! У него есть developer, у которого есть имя, фамилия и address,
//! а у адреса есть страна и город.
//! С помощью деструктуризации вытащить страну и город.
// const project = {
//   projectName: 'FaceBook',
//   developer: {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     address: {
//       country: 'Ukraine',
//       city: 'Dnipro'
//     }
//   }
// }

// const { developer:{address: { country }, address: { city }} } = project;
// console.log(country);
// console.log(city);

//! 2. Есть данные в таком виде:
//! Ivan;Ivanov;1990;ivanov@gmail.com
//! Вытащить почту и год рождения с помощью деструктуризации
// let user = 'Ivan;Ivanov;1990;ivanov@gmail.com';
// const [,,year,email ] = user.split(';');
// console.log(email);
// console.log(year);

//! 3.В map поместить 10 слов англо-русских. 
//! В качестве ключа английское слово, в качестве значения -
//! русское. Например: mother->мама.
//! Пользователь вводить слово на английском, программа выдает
//! результат на русском.

// const dictionary = new Map([
//   ['mother', 'мама'],
//   ['bread', 'хліб'],
//   ['chicken', 'курка'],
//   ['cat', 'кіт'],
//   ['father', 'тато'],
//   ['sister', 'сестра'],
//   ['sun', 'сонце'],
//   ['tomato', 'помідор'],
//   ['orange', 'апельсин'],
//   ['salt', 'сіль']
// ]);
// let for_find = prompt("Введіть слово для пошуку:");
// console.log(dictionary.get(for_find));

//! 4.Создать объект телефон с помощью функции конструктора,
//! у него есть бренд, модель, цена, цвет.
//! Создать три объетка телефонов.
//! Например:
//! бренд samsung
//! модель x100
//! цена 1000грн
//! цвет красный
//! При преобразования к строке нужно отобразить информацию:
//! samsung x1000 1000грн

// function Phone(brand, model, price, color) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.color = color;
// }
// Phone.prototype.toString = function phoneToString() {
//   return `${this.brand} ${this.model} ${this.price}грн`;
// };
// const phone1 = new Phone('Samsung', 'S20', 40000, 'сірий');
// const phone2 = new Phone('Iphone', 'XR', 25000, 'червоний');
// const phone3 = new Phone('Samsung', 'S20 Ultra', 50000, 'сірий');
// console.log(phone1.toString());
// console.log(phone2.toString());
// console.log(phone3.toString());

//! 5.Пользователь вводит 10 чисел. Сохраняем эти данные в Set.
//! После того как он их ввел, отобразить все числа в alert
//! в отсортированом виде в обратном порядке.
//! Проверяем, что повторные значения не сохраняются.

// const set = new Set();
// for (let i = 0; i < 10; i++) {
//   set.add(Number(prompt(`Введіть ${i+1} число:`)));
// }
// alert(Array.from(set).sort((a, b) => b - a))
