// alert("Hello JavaScript!!!!!!!!!!!!!!");
// console.log("C++ + SQL + HTML + CSS + JS");
//!ТИПЫ ДАННЫХ

//!number
// let age = 18.5;
// console.log(age);
// console.log(typeof age);
// let age = 22;//такая переменная уже существует

// let a = Infinity;//-Infinity NaN
// let b = -Infinity;
// let c = NaN;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// const maxNumber = Math.pow(10, 1000);
// console.log(maxNumber);

// const res = "asdf" / 2;
// console.log(res);


//!string
// let firstName = "Ivan";
// console.log(firstName);
// console.log(typeof firstName);

// let a = 'one';
// let b = "two";
// let c = `three`;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

//!boolean
// let isMarried = true;
// console.log(isMarried);
// console.log(typeof isMarried);

//!null
// let email = null;
// console.log(email);
// console.log(typeof email);//тип данных null, object - официальная ошибка

//!undefiend
// let age = undefiend;
// console.log(age);
// console.log(typeof age);
// age = 18;
// age = 22;

//!symbol
//каждое значение является уникальным

//!bigint
// let n = 123146129837461823794691278318229834671983784196823n;
// console.log(n);
// console.log(typeof n);

//!object
// let user = {
//   firstName: "Ivan",
//   lastName: "Ivanov",
//   age: 18
// }
// console.log(user);
// console.log(typeof user);

// let n;
// n = 1;
// console.log(n);
// console.log(typeof n);
// n = true;
// console.log(n);
// console.log(typeof n);
// n = "one";
// console.log(n);
// console.log(typeof n);

// const pi = 3.14;
// pi = 4;//error

// let a = prompt("Введит число а");
// console.log(typeof a);

// let a = "2";
// let b = "2";
// console.log(a + b);

//!конкатенация
// console.log(1 + 1);
// console.log("1" + "1");
// console.log(1 + "1");
// console.log("1" + 1);
// console.log(1 + 1 + "1");
// console.log("1" + 1 + 1);
// console.log("1" + (1 + 1));

//!преобразование
//TODO создать простой калькулятор, которые плюсует два числа
// let a = prompt("Введит число а");
// let b = prompt("Введит число b");
// console.log(Number(a) + Number(b));

//!строковое преобразование
//?1способ
//  console.log(String(true));
//  console.log(String(false));
//  console.log(String(1));
//console.log(String(-1.5));
//console.log(String(null));
// console.log(String(undefined));

// let n = 123;
// n = String(n);
// console.log(typeof n);
// console.log(n);

//?2 способ
// let price = 13;
// let res = price + "$";
// console.log(res);

// let result = 13 + "";
// console.log(typeof result);
// console.log(result);

//!логическое преобразование 0 -0 NaN  "" null undefiend ---> false
//? 1 способ
// console.log(Boolean(1234));
// console.log(Boolean(0));
// console.log(Boolean(-1234));
// console.log(Boolean(Infinity));
// console.log(Boolean(NaN));

// console.log(Boolean("1"));
// console.log(Boolean("0"));
// console.log(Boolean("true"));
// console.log(Boolean("false"));
// console.log(Boolean("  "));
// console.log(Boolean(""));

// console.log(Boolean(null));
//console.log(Boolean(undefined));

//? 2 способ
// console.log(!!"ASDF");
// console.log(Boolean("ASDF"));

//!числовое преобразование
//? 1 способ
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Number(null));//0
// console.log(Number(undefined));//NaN
// console.log(Number("13"));//13
// console.log(Number("13px"));//NaN
// console.log(Number("  13  "));//13
// console.log(Number("  1 3  "));//NaN
// console.log(Number(""));//0
// console.log(Number("  "));//0
// console.log(Number("3.14"));//3.14
// console.log(Number("3,14"));//NaN
// console.log(Number("3/14"));//NaN
// console.log(Number("-14"));//-14

//? 2 способ
// console.log("3" * 2);
// console.log("3px" * 2);

// const str = "13";
// const res = +str;
// console.log(typeof res);
// console.log(res);

//!математические операторы + - * / % **
// console.log(2 + 2);
// console.log(5 / 2);
// console.log(13 % 5);
// console.log(11 % 3);


