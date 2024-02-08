//! 1. Создать объект project. У него есть название, например FaceBook.
//! У него есть developer, у которого есть имя, фамилия и address,
//! а у адреса есть страна и город.

const project = {
  projectName: 'FaceBook',
  developer: {
    firstName: 'Ivav',
    lastName: 'Ivanov',
    address: {
      country: 'Ukraine',
      city: 'Dnipro'
    }
  }
}

//! 2. Написать функцию, которая будет принимать в параметры объект и 
//! название свойтва, проверять на наличие этого свойства в объекте и 
//! возвращать true или false. Использовать оператор in

function IsPropertyHere(object_, property) {
  return property in object_
}
// console.log(IsPropertyHere(project, 'developer'));

//! 3.* Создать объект игрок. У него есть никнейм и метод shoot.
//! Метод shoot в параметры принимает объект оружие. 
//! Создать два варианта оружия: пистолет, автомат.
//! У оружия есть свойство патроны и метод выстрел(тоже shoot). У пистолета это пив-пав,
//! у автомата: тра-та-та в консоль. Во время выстрела у оружия отнимается
//! пули. После каждого выстрела отображается количество оставшихся патронов.
//! Вызвать у игрока метод shoot два раза с пистолетом
//! и потом три раза с автоматом. 

const player = {
  nickName: 'DarkBoss',
  Shoot: function (weapon) {
    weapon.Shoot();
  }
}

const pistol = {
  ammunition: 12,
  Shoot: function () {
    if (this.ammunition > 0) {
      console.log('пив-пав');
      this.ammunition -= 2;
      console.log('Залишилось ' + this.ammunition + ' патронів');
    }
    else {
      console.log("Кінчились патрони");
    }

  }
}

const gun = {
  ammunition: 30,
  Shoot: function () {
    if (this.ammunition > 0) {
      console.log('тра-та-та');
      this.ammunition -= 3;
      console.log('Залишилось ' + this.ammunition + ' патронів');
    }
    else {
      console.log("Кінчились патрони");
    }

  }
}
// player.Shoot(pistol);
// player.Shoot(pistol);
// player.Shoot(gun);
// player.Shoot(gun);
// player.Shoot(gun);

//! 4. В одномерном массиве, заполненном случайными числами,
//! определить минимальный и максимальный элементы.
//! Нужно поискать как создать случайные числа
//! https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
// function Max(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// function Min(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// let arr = [];
// arr.length = 20;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = getRandomInt(1, 100);
// }

// console.log(arr);
// console.log(Max(arr));
// console.log(Min(arr));

//! 5.
//! В одномерном массиве, заполненном случайными числами,
//! найти сумму элементов в диапазоне указанном пользователем.
function GetSumByDiapason(arr, a, b) {
  let sum = 0;
  for (let i = a; i < b; i++) {
    sum += arr[i];
  }
  return sum;
}

// let arr = [];
// arr.length = 20;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = getRandomInt(1, 100);
// }
// console.log(arr);
// let a = Number(prompt('Введіть діапазон, від якого шукати'));
// let b = Number(prompt('Введіть діапазон, до якого шукати'));
// if (b < a || b < 0 || a < 0 || b > arr.length || a > arr.length) {
//   console.log('error');
// }

// else {
//   console.log(GetSumByDiapason(arr, a, b));
// }

//! 6.
//! Дана температура воздуха за каждый день января.
//! Определить:
//! а) среднюю температуру за месяц;
//! б) сколько раз температура воздуха опускалась нижеуказанной метки.

function AvgTemperature(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function CountTemeratureByNum(a) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]<a)
    count++;
  }
  return count;
}

// let arr = [];
// arr.length = 31;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = getRandomInt(-20, -1);
// }
// console.log(arr);
// console.log(AvgTemperature(arr) + ' середня температура за місяць');
// console.log(CountTemeratureByNum(-18) + ' раз температура повітря знижувалась до нище вказаної мітки');

//! 7.* Трехмерный массив создать.
//! В массиве хранится информация о количестве жильцов
//! каждой квартиры пятиэтажного дома (4 подъезда, на
//! каждом этаже по 2 квартиры).
//! а) по выбранному номеру квартиры определить количество
//! жильцов, а также их соседей проживающих на одном этаже;
//! номер квартиры указывать индексами. 
//! P.s. у квариры три индекса(подъезд, этаж и квартира)
//! б) определить суммарное количество жильцов для
//! каждого подъезда;
//! в) определить номера квартир, где живут многодетные
//! семьи. Условно будем считать таковыми, у которых
//! количество членов семьи превышает пять человек.
//! номер квартиры указывать индексами. 
//! P.s. у квариры три индекса(подъезд, этаж и квартира)

function GetNumberPeopleByNumberFlat(arr,a,b,c)
{
      for(let k = 0; k<2; k++){
       console.log('Квартира №'+a+b+k +' проживає '+arr[a][b][k]+ ' жителів');
      }   
 
}
function SumPeopleApproach(arr,a,b,c)
{
  
  for(let i = 0; i<a; i++){
    let sum = 0;
    for(let j = 0; j<b; j++){
      for(let k = 0; k<c; k++){
    sum+=arr[i][j][k];
      }
    }
    console.log((i+1)+" під'їзд: "+sum+" жителів");
  }
}
function NumFlatWithLargeFamily(arr,a,b,c)
{
  
  for(let i = 0; i<a; i++){
    for(let j = 0; j<b; j++){
      for(let k = 0; k<c; k++){
        if(arr[i][j][k]>5)
        console.log('Квартира №'+i+j+k);
      }
    }
    
  }
}

let arr = [
	[
		[6,3],
		[2,1],
    [1,3],
		[2,1],
    [6,5],
		
	],
	[
		[3,1],
		[4,4],
    [3,1],
		[4,3],
    [3,3],
	],
	[
		[4,1],
		[7,5],
    [3,7],
		[4,3],
    [3,1],
	],
  [
		[1,1],
		[2,3],
    [3,2],
		[4,1],
    [3,2],
	],
];
GetNumberPeopleByNumberFlat(arr,0,0,0);
SumPeopleApproach(arr,4,5,2);
NumFlatWithLargeFamily(arr,4,5,2);
