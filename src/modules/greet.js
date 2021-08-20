function greet() {
  console.log('Hello');
}

/*
  module: a special object provided by nodeJS core
  exports: an object inside module object to help us expose the things we want to access from outside world
  in this case: we want to expose greet function to to outside world
  . Eventually, you can expose whatever you want for outside world use
*/
module.exports = greet;
