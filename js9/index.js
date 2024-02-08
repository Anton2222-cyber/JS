'use strict';


// const user = {
//   firstName: 'Petr',
//   lastName: 'Petrov',

// }
// function fullName() {
//   console.log(`firstName=${this.firstName}, lastName=${this.lastName}`);
// }
// // user.fullName=fullName;
// // user.fullName();
// // fullName();
// const newfunc = fullName.bind(user);
// user.lastName='Lashch';
// newfunc();

//!call & aply
// const user1 = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov'
// }
// const user2 = {
//   firstName: 'Petr',
// }
// function fullName(message) {
//   console.log(message+" " + this.firstName+" "+this.lastName);
// }
// // fullName.call(user1);
// // fullName.call(user2);
// fullName.call(user1,'Hello');
// fullName.apply(user1,['Hello']);



const myObj={
  prop: 'myObj',
  f1(){
    console.log(this);
  },
  f2:()=>{
    console.log(this);
  }
}
myObj.f1();
myObj.f2();