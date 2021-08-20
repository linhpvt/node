/*
  in javascript, function can be used to create object, this function is called
  function constructor.
  
  we have to use new keyword operator in front of function constructor to create a new object.

  function constructor doesn't return any thing to create object, otherwise the return value will be assigned to variable instead of object.

  The things happen under the hood with function constructor:
  1. an empty object is created and assigned to `this`
  2. setup properties and methods for the created object by using `this`
  3. setup prototype for new object.

  For example: Person.prototype = { object holds methods }
*/

function Person(firstname, lastname) {
  /*
    this = {};
  */
  this.firstname = firstname;
  this.lastname = lastname;
}
/*
  1. function is first-class object
  2. all objects are being created by Person function constructor will share the same prototype. it's called prototypal inheritance
*/
Person.prototype = {
  greet: function () {
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
  },
};

var child = new Person('Dau', 'Pham');
var parent = new Person('Linh', 'Pham');

child.greet();
parent.greet();

// both object is sharing the same prototype
console.log(parent.__proto__ === child.__proto__);

// BORROWING FUNCITON.
var newObj = {
  firstname: 'Borrow',
  lastname: 'Function',
};

// we use greet function from child object to show greeting on newObject
child.greet.call(newObj);
