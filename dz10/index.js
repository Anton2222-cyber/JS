'use strict';

class User {
  constructor(firstName, lastName, phone, addres, email) {
    if (phone.startsWith('+380')) {
      this._phone = phone;
    }
    if(/^\w+([\.-]?\w+)*@gmail.com+$/.test(email)){
      this._email = email;
    }
    if(/[А-Я-][а-я]+$/.test(firstName)){
      this._firstName = firstName;
    }
    if(/[А-Я-][а-я]+$/.test(lastName)){
      this._lastName = lastName;
    }
    this._addres = addres;
    
  }
  set phone(v) {
    if (v.startsWith('+380')) {
      this._phone = v;
    }
  }
  set email(v) {
    if(/^\w+([\.-]?\w+)*@gmail.com+$/.test(v)){
      this._email = v;
    }
  }
  set firstName(v) {
    if(/[А-Я-][а-я]+$/.test(v)){
      this._firstName = v;
    }
  }
  set lastName(v) {
    if(/[А-Я-][а-я]+$/.test(v)){
      this._lastName = v;
    }
  }
}
const user = new User('Василь','Лащ','+380662609970','вул. Федорова','antonlashch@gmail.com',);
console.log(user);
user.firstName = 'Коля';
console.log(user);
