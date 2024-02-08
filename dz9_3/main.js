'use strict';
//! 3.Подготовить свойство PI(3.14...) в своем математическом
//! объекте, таким образом, чтоб его нельзя было изменить и удалить.
const myMath = {
  PI: 3.14159265358979323846
}
Object.defineProperty(myMath, 'PI', {
  writable: false,
  enumerable: true,
  configurable: false
});
//myMath.PI = 12;
//delete myMath.PI;
console.log(myMath);