'use strict';
/*
  class in ES6 just gives you the syntax sugar. it works completely same with
  function constructor under the hood. class in ES6 is not similar with other languages such as java, C#, etc
*/

// ES6
class Person {
  // this syntax equals to Person function constructor
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // all functions declared here will be in prototype of Person constructor function
  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
}

// ES5
/*
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
Person.prototype.greet = function () {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
};
*/

var peter = new Person('Peter', 'Doe');
var mary = new Person('Mary', 'Doe');

peter.greet();
mary.greet();
console.log(peter.__proto__ === mary.__proto__);
