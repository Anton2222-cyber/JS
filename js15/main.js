//!JSON
// const user = {
//   firstName: "Ivan",
//   lastName: 'Ivanov',
//   age: 18,
//   isMale: true,
//   email: null,
//   pager: undefined,
//   phones: [
//     `+38066-555-55-55`,
//     `+38066-666-66-66`
//   ],
//   address: {
//     city: "Dnipro",
//     street: "Tarasa Shevchenko",
//     home: "121"
//   }
// }
// const jsonUser = JSON.stringify(user);//Сериализация 
// console.log(jsonUser);
// console.log(typeof jsonUser);
// const copy = JSON.parse(jsonUser);//Десериализация 
// console.log(copy);
// copy.address.home = "666";
// console.log(user.address.home);

// const user = {
//   firstName: "Ivan",
//   lastName: 'Ivanov',
//   age: 18,
//   isMale: true,
//   email: null,
//   pager: undefined,
//   phones: [
//     `+38066-555-55-55`,
//     `+38066-666-66-66`
//   ],
//   address: {
//     city: "Dnipro",
//     street: "Tarasa Shevchenko",
//     home: "121"
//   }
// }
// const copy = { ...user };
// copy.firstName = "Petr";//+
// console.log(user.firstName);
// copy.address.home = "666";//-
// console.log(user.address.home);

//!error
// try{
//   //код
// }catch(err){
//   //код обробки помилки
// }

//err.name & err.message

// console.log('start');
// const json = "{Hello World!}"
// try {
//   console.log('1');
//   const user = JSON.parse(json);
//   console.log('2');
// } catch (err) {
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// }
// console.log('finish');

//throw <об'єкт помилки>

// const json = '{"age": 33}';
// try {
//   const user = JSON.parse(json);
//   if (user.name === undefined) {
//     throw new SyntaxError("field name not found");
//   }
//   console.log(user);
//   console.log(user.age);
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// }

// function func() {
//   try {
//     console.log('start');
//     return 1;
//     console.log('end');
//   } catch (err) {
//     return 2;
//   } finally {
//     return 3;
//   }
//   return 4;
// }
// console.log(func());

// function func() {
//   try {
//     console.log('start');
//     JSON.parse("Hello World!");
//     console.log('end');
//   } catch (err) {
//     console.log('catch');
//     return 2;
//   } finally {
//     return 3;
//   }
//   return 4;
// }
// console.log(func());

//!instanceof
// const arr = [1, 5, 6, 7];
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// const user = new User('Ivan', 'Ivanov');
// console.log(user instanceof Array);
// console.log(user instanceof Object);
// console.log(user instanceof User);

//!fetch
// console.log('Hello World!');
// const promise = fetch('./data.json');
// console.log(promise);//pending
// const btnClick = document.getElementById('btnClick');
// btnClick.addEventListener('click', () => {
//   console.log(promise);
// })

// const promise = fetch('./data.json');
// promise.then((resp) => console.log(resp));

// console.log('start');
// const promise = fetch('./data.json');//робыть запыт
// console.log('first: ', promise);
// promise.then((resp) => {
//   console.log('first: ', promise);
//   const newPromise = resp.json();//из потока данных создает объект
//   console.log('second: ', newPromise);

//   newPromise.then(user => {
//     console.log('second: ', newPromise);
//     console.log(user);
//   })
// });
// console.log('finish');

//асинхронность, eventloop, promise - читать!

// const promise = fetch('./data.json');//робыть запыт
// promise
//   .then(resp => resp.json())
//   .then(user => console.log(user))
// console.log('finish');
debugger
console.log('start');
const promise = fetch('./data.json');//робыть запыт
promise
  .then(resp => resp.json())//+
  .then(user => console.log(user))//+
  .catch(error => console.log(error))//-
console.log('finish');

// console.log('start');
// const promise = fetch('./data.json');//робыть запыт
// promise
//   .then(resp => resp.json())//+
//   .then(user => console.log(user))//+
//   .catch(error => console.log(error.name, error.message))//-
// console.log('finish');

// console.log('start');
// const promise = fetch('htt:./data.json');//ошибка!
// promise
//   .then(resp => resp.json(), (e) => console.log('first promise'))//-
//   .then(user => console.log(user), (e) => console.log('second promise'))
//   .catch(error => console.log('MAIN'))//-
// console.log('finish');

// console.log('start');
// const promise = fetch('./daa.json');//ошибка!
// promise
//   .then(resp => {//успех
//     console.log("resp: ", resp);
//     return resp.json();
//   }, (e) => console.log('first promise'))//+ - не успех
//   .then(
//     user => console.log("user:", user),//успех
//      (e) => console.log('second promise'))//не успех
//   .catch(error => console.log('MAIN'))//-
// console.log('finish');
