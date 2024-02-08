//!1. Написать функцию, которая вычисляет факториал переданного ей числа.
// function Factorial(number) { 
//   if(number === 1)
//   {
//     return 1;
//   }
//   if (number === 0) {
//     return 1;
//   }
//   return number * Factorial(--number);
// }
// console.log(Factorial(50)); 

//! 2. Написать функцию, которая принимает три отдельные 
//! цифры и превращает их в одно число. Например: цифры 
//! 1, 4, 9 превратятся в число 149.
// function ThreeToOne(a,b,c)
// {
//   return (Number(String(a)+String(b)+String(c)));
// }
//  console.log(ThreeToOne(1,4,9));
//  console.log(typeof ThreeToOne(1,4,9));

//! 3. Написать функцию, которая принимает длину и ширину 
//! прямоугольника и вычисляет его площадь. Если в функцию 
//! передали 1 параметр, то она вычисляет площадь квадрата.
// function Area(a,b)
// {
//   if(b ===undefined)
//   {
//     return a*a;
//   }
//   return a*b;
// }
// console.log(Area(3));

//! 4. Написать функцию, которая принимает время (часы, минуты, секунды)
//! и выводит его на экран в формате «чч:мм:сс».
//! 1Если при вызове функции минуты и/или секунды не были 
//! переданы, то выводить их как 00.
// function PrintTime(h,m,s)
// {
//   if(s===undefined && m === undefined)
//   {
//    console.log(h+':00:00');
//    return;
//   }
//  else if(s===undefined)
//  {
//   console.log(h+':'+m+':'+'00');
//   return;
//  }

//  console.log(h+':'+m+':'+s);
// }
// PrintTime(12);

//! 5. Написать функцию, которая принимает часы, минуты и 
//! секунды и возвращает это время в секундах.
function ConvertToSecond(h,m,s)
{
  if(m === undefined && s === undefined)
  {
    return h*3600;
  }
  else if(s===undefined)
  {
    return h*3600+m*60
  }
return s+m*60+h*3600;
}
// console.log(ConvertToSecond(1,1,1));

//! 6. Написать функцию, которая принимает количество секунд, 
//! переводит их в часы, минуты и секунды и возвращает в 
//! виде строки «чч:мм:сс».
//? 10 -> 00:00:10
//? 988 -> 00:16:28
//? 3599 -> 00:59:59
//? 4991 -> 01:23:11
//? 86399  ->  23:59:59
//? 86400  ->  00:00:00
//? 86401  ->  00:00:01
//? 10000 -> 02:46:40
//? 378304 -> 09:05:04
//? 280800 -> 06:00:00
function TimeFromSecond(n)
{
  n%=86400;
  let h = Math.trunc(n / 3600);
  n = n % 3600;
  let m = Math.trunc(n / 60);
  let s = n % 60;
  if(h<10)
  return '0'+h+':'+Math.trunc(m/10)+m%10+':'+Math.trunc(s/10)+s%10;
  return h+':'+Math.trunc(m/10)+m%10+':'+Math.trunc(s/10)+s%10;
}
//  console.log(TimeFromSecond(86401)); 

//! 7. Написать функцию, которая считает разницу между датами. 
//! Функция принимает 6 параметров, которые описывают 2 
//! даты, и возвращает результат в виде строки «чч:мм:сс». При 
//! выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, 
//! узнайте разницу в секундах, а потом разницу переведите 
//! обратно в «чч:мм:сс»
function DiferenceOfDates(h1,m1,s1,h2,m2,s2)
{
 return TimeFromSecond(ConvertToSecond(h1,m1,s1)>ConvertToSecond(h2,m2,s2)?ConvertToSecond(h1,m1,s1)-ConvertToSecond(h2,m2,s2):ConvertToSecond(h2,m2,s2)-ConvertToSecond(h1,m1,s1));
}
// console.log(DiferenceOfDates(6,0,0,9,5,4));

//! 8. Создать объект "Билет в кино". Продумать все свойства.
// const ticketMovie = {
//   movieName: 'John Wick 4',
//   hall: 4,
//   row: 3,
//   place: 6,
//   date: '04-12-2023',
//   session: '18:30',
//   qrCode: 'T121 08634990001'
// }
// console.log(ticketMovie);

//! 9. Создать функцию копирования объекта user. У юзера есть имя и фамилия.
//! Функция принимает такой объект и возвращает КОПИЮ его, не ССЫЛКУ!
// const user1 ={
//   lastName: 'Lashch',
//   firstName: 'Anton'
// }
//  function GetCopyUser(user)
//  {
//  const copyUser = {
//   lastName: user.lastName,
//   firstName: user.firstName
//  }
//  return copyUser;
//  }
//  user2= GetCopyUser(user1);
//  console.log(user2);