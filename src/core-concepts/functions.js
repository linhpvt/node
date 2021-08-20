// function statement
function sayGreeting() {
  console.log('Hello Linh');
}

// function expression, function is created on the fly and assigned to a variable
var sayHello = function () {
  console.log('Hell');
};

// functions are first-class. they are passed in other function as paramters
function saySomething(fn) {
  fn();
}

saySomething(sayHello);

saySomething(sayGreeting);

// anonymous function: function without name = function expression
// function is created on the fly and being passed as an argument to another function
saySomething(function () {
  console.log('Hello on the fly');
});
