//! 1.* Запросить 2 числа и найти только наибольший общий
//! делитель.
  // firstNumber= prompt("Введіть перше число");
  // secondNumber= prompt("Введіть друге число");
  // let maxdel = (firstNumber>secondNumber)?secondNumber:firstNumber;
  // let result = 1;
  // for (let i = 1; i <= maxdel / 2; i++) {
  //   if (firstNumber % i === 0 && secondNumber % i === 0) {
  //     result =i;
  //   }
  // }
  // if (firstNumber % maxdel === 0 && secondNumber % maxdel === 0) {
  //   result =maxdel;
  // }
  // console.log(result + " ->найбільший спільний дільник");

  //! 2.** Определить количество цифр в введенном числе
  // let number= prompt("Введіть число");
  // let count=0;
  // while(number!=0)
  // {
  //     count++;
  //   number=Math.trunc(number/=10);
  // }
  // console.log(count + "->кількість цифр");

//!   3. Вывести таблицу умножения для всех чисел от 2 до 9.
//! Каждое число необходимо умножить на числа от 1 до 10(вложеный цикл).
//! Результат в консоль выводить.
// for (let i = 2; i <= 9; i++) 
// {
//   let res ="";
//   for (let j = 1; j <= 10; j++)
//    {
//     res+= i+"*"+j+"="+(i*j)+" ";
//   }
//   console.log(res);
// }

//! 4. Прямоугольник из звездочек в консоле. Размер зависит от ввода пользователя
//! Например:
//! высота: 2
//! ширина: 3
//! Результат:
//! * * *
//! * * *
// let height= prompt("Введіть висоту");
// let width= prompt("Введіть ширину");
// let str="";
// for(let i = 0; i<height;i++)
// {
//   for(let j = 0; j<width;j++)
//   {
//     str+="* ";
//   }
//   str+="\n";
// }
// console.log(str);

//! 5. Написать функцию, которая принимает 2 числа и возвращает -1,
//! если первое меньше, чем второе; 1 – если первое 
//! больше, чем второе; и 0 – если числа равны.
// function myMax(a, b) {
//   if(a===b){
//     return 0;
//   }
//   return (a<b)?-1:1;
//   }
//   const res = myMax(3, 2);
// console.log(res);

// ! 6. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// ! Совершенное число – это 
// ! число, равное сумме всех своих собственных делителей кроме найбольшего.
// ! В качестве результата функция возвращает true или false
// ! Примеры совершенных чисел:
// ! 6  = 1 + 2 + 3
// ! 28 = 1 2 4 7 14
// ! 496 = 1, 2, 4, 8, 16, 31, 62, 124, 248
function isIdeal(num)
{
  let result = 0;
  for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        result +=i;
      }
    }
    return (result===num)?true:false;
}
// console.log(isIdeal(496));

//! 7. Написать функцию, которая принимает минимальное и 
//! максимальное значения для диапазона, и выводит только 
//! те числа из диапазона, которые являются совершенными. 
//! Используйте написанную ранее функцию, чтобы узнавать, 
//! совершенное число или нет.
//! Например 3 и 500:
//! 6
//! 28
//! 496
function printIdeal(min, max)
{
  for(;min<=max;min++)
  {
    if(isIdeal(min))
    {
      console.log(min);
    }
  }
}
printIdeal(3, 500)