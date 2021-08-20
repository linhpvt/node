/*
  scope: where in code you have get access to particular variables and functions
  iife: immediately invoked function expression
*/

var firstname = 'James';
(function (lastname) {
  // function scope
  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
  console.log(this === global);
})('Doe');

// global scope
firstname = 'John';
console.log(firstname);
