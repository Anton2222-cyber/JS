//! 1. Запросите у пользователя его имя и выведите в ответ: 
//!«Привет, его имя!».
// let firstName = prompt("Введіть ім'я");
// alert("Привіт, "+ firstName + "!");

//! 2. Запросите у пользователя год его рождения, посчитайте, 
//!сколько ему лет и выведите результат. Текущий год укажите 
//!в коде как отдельную переменную.
// let year = prompt("Введіть рік народження");
// alert("Вам "+(new Date().getFullYear() - Number(year))+" років");

//! 3. Запросите у пользователя длину стороны квадрата и выведите 
//! периметр такого квадрата. 
// let a = prompt("Введіть сторону квадрата");
// alert("Периметр: "+(a*4));

//! 4. Запросите у пользователя радиус окружности и выведите 
//! площадь такой окружности.
// let r = prompt("Введіть радіус круга");
// alert("Площа: "+(3.14*r**2)+ " кв.о.");

//! 5. Запросите у пользователя расстояние в км между двумя 
//! городами и за сколько часов он хочет добраться. Посчитайте скорость,
//! с которой необходимо двигаться, чтобы успеть вовремя.
// let l = prompt("Введіть відстань між двома містами в км");
// let t = prompt("Введіть за скільки годин бажаєте добратись");
// alert("Середня швидкість з якою можна подолати цю відстань за вказаний час: "+(l/t)+" км/год");

//! 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа
//! переводит в евро.
//! Курс валюты храните в переменной.
// let k = 0.91;
// let l = prompt("Введіть суму в доларах");
// alert(l+" USD = "+(Number(l)*k)+" EUR");

//! 7.* Пользователь указывает объем флешки в Гб. Программа 
//! должна посчитать сколько файлов размером в 820 Мб помещается
//! на флешку.
let stor = prompt("Введіть об'єм флешки в ГБ");
stor = Number(stor) * 1024;
alert("Поміститься "+ Math.trunc(stor/820)+" шт.");
