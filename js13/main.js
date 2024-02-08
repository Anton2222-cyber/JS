//!синхронность

// console.log(1);
// console.log(2);
// console.log(3);

// function func(){
//   console.log('work');
// }
// func();
// func();
// func();

//!reactor
//http://design-pattern.ru/patterns/reactor.html

//!!js однопоточный
// const btnClick = document.getElementById('btnClick');
// btnClick.addEventListener('click', () => {
//   while(true){
//     console.log('WORK');
//   }
// })

//!eventloop и асинхронность
//http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ29uZScpOw0Kc2V0VGltZW91dChmdW5jdGlvbiAoKSB7DQogIGNvbnNvbGUubG9nKCd0d28nKTsNCn0sIDApOw0KY29uc29sZS5sb2coJ3RocmVlJyk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// console.log('start');
// $.on('button', 'click', function onClick() {
//   console.log('boom');
// })
// for(let i = 0; i < 10; i++){
//   console.log('work');
// }
// console.log('finish');

// console.log('start');
// setTimeout(function one() {
//   console.log(1);
// }, 10000)
// setTimeout(function one() {
//   console.log(2);
// }, 10000)
// setTimeout(function one() {
//   console.log(3);
// }, 10000)
// console.log('finish');

// console.log('one');
// setTimeout(function () {
//   console.log('two');
// }, 0);
// console.log('three');


// console.log('one');
// setTimeout(function () {
//   console.log('1');
//   console.log('2');
//   console.log('3');
// }, 0);
// console.log('two');

//https://www.jsv9000.app/

//!callback hell
// setTimeout(() => {//сделать задачу асинхронно
//   console.log('Запрос на существование пользвателя');//асинхронна
//   setTimeout(() => {//сделать задачу асинхронно
//     console.log('Проверка у полученного пользвателя пароля и почты');
//     setTimeout(() => {//сделать задачу асинхронно
//       console.log('Впустить пользователя');
//     }, 100);
//   }, 100);
// }, 100);

//!Promise
// console.log(1);
// const promise = new Promise((resolve, reject) => {
//   console.log(2);//это синхронный код
// });
// console.log(3);
// console.log(promise);


// console.log(1);
// const promise = new Promise((resolve, reject) => {
//   console.log(2);
//   resolve();
// });
// console.log(3);
// console.log(promise);

// console.log(1);
// const promise = new Promise((resolve, reject) => {
//   console.log(2);
//   reject();
// });
// console.log(3);
// console.log(promise);

// const promise = new Promise((resolve, reject) => {
//   //асинхронный код запрос на сервер(мы получим ответ или нет)
//   resolve('Есть данные!');
//   reject(-1);
// });
// console.log(promise);

// function random(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }
// const promise = new Promise((resolve, reject) => {
//   setInterval(() => {//асинхронная задача
//     random(0, 1) ? resolve('Есть данные!') : reject(-1);
//   }, 5000);
// });
// console.log(promise);


// function random(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }
// function queryToServer() {//асинхронная задача
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       random(0, 1) ? resolve('Hello World!') : reject(-1);
//     }, 5000);
//   });
// }
///дайте промис
// const promise = queryToServer();
// const btnClick = document.getElementById('btnClick');
// btnClick.addEventListener('click', () => {
//   console.log(promise);
// });

// const promise = queryToServer();
// promise.then(response => console.log('делаем работу с данными -> ', response),
//   error => console.log('анализируем ошибку -> ', error));

// const promise = queryToServer();
// promise
//   .then(response => console.log('делаем работу с данными -> ', response))
//   .catch(error => console.log('анализируем ошибку -> ', error));
