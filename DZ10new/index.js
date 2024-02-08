'use strict';


//! 1.Реализовать методы в классном массиве: pop, map, every, some
//! **reduce.
function MyArray() {
  this.length = 0;
}
MyArray.prototype.push = function (...value) {
  for (const v of value) {
    this[this.length] = v;
    this.length++;
  }
  return this.length;
}
MyArray.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
MyArray.prototype.filter = function (callback) {
  const newArr = new MyArray();
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}
MyArray.prototype.pop = function () {
  let v = this[--this.length];
  delete this[this.length];
  return v;
}
MyArray.prototype.map = function (callback) {
  const newArr = new MyArray();
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}
MyArray.prototype.every = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false
    }
  }
  return true;
}
MyArray.prototype.some = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true
    }
  }
  return false;
}
MyArray.prototype.reduce = function (callback, initial) {
  let v;
  let startIndex;
  if (initial === undefined) {
    v = this[0];
    startIndex = 1;
  } else {
    v = initial;
    startIndex = 0;
  }

  for (let i = startIndex; i < this.length; i++) {
    v = callback(v, this[i], i, this);

  }
  return v;
}

// const arr = new Array();
// arr.push(11, 22, 33);
//arr.forEach((value, index, arr) => console.log(value, index, arr));
//const newArr = arr.filter((value) => value % 2 === 0);
//console.log(newArr);
//arr.pop();
//const arr2 = arr.map(v => v * 2);
//console.log(arr.every(v=>v>2));
//console.log(arr.some(v=>v>2));
//console.log(arr.reduce((accum, e) => accum + e, 0)); 
// let res = arr.reduce((accum, e) => {
//   console.log("accum: " + accum + ", e: " + e);
//   return e * 10;
// }, -3);
// const myArr = new MyArray();
// myArr.push(11, 22, 33);
//myArr.forEach((value, index, arr) => console.log(value, index, arr));
//const newMyArr = arr.filter((value) => value % 2 === 0);
//console.log(newMyArr);
//myArr.pop();
//const arr3 = myArr.map(v => v * 2);
//console.log(myArr.every(v=>v>22));
//console.log(myArr.some(v=>v>22));
//console.log(myArr.reduce((accum, e) => accum + e, 0)); 
// let res2 = myArr.reduce((accum, e) => {
//   console.log("accum: " + accum + ", e: " + e);
//   return e * 10;
// }, -3);
//! 2.Переписать код используя синтаксис class.
class MyArray2 {
  length = 0

  push = function (...value) {
    for (const v of value) {
      this[this.length] = v;
      this.length++;
    }
    return this.length;
  }
  forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  filter = function (callback) {
    const newArr = new MyArray2();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  }
  pop = function () {
    let v = this[--this.length];
    delete this[this.length];
    return v;
  }
  map = function (callback) {
    const newArr = new MyArray2();
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this));
    }
    return newArr;
  }
  every = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false
      }
    }
    return true;
  }
  some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true
      }
    }
    return false;
  }
  reduce = function (callback, initial) {
    let v;
    let startIndex;
    if (initial === undefined) {
      v = this[0];
      startIndex = 1;
    } else {
      v = initial;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      v = callback(v, this[i], i, this);

    }
    return v;
  }
}

//const myArr = new MyArray2();
//myArr.push(11, 22, 33);
//myArr.forEach((value, index, arr) => console.log(value, index, arr));
//const newMyArr = myArr.filter((value) => value % 2 === 0);
//console.log(newMyArr);
//myArr.pop();
//const arr3 = myArr.map(v => v * 2);
//console.log(myArr.every(v=>v>22));
//console.log(myArr.some(v=>v>22));
//console.log(myArr.reduce((accum, e) => accum + e, 0));
//console.log(myArr);