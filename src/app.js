var Cat = require('./modules/inheritance/function.call').Cat;
var Animal = require('./modules/inheritance/function.call').Animal;
var dog = new Animal();
dog.say();

var kitty = new Cat();
kitty.print();
kitty.name = 'Magic';
kitty.say();
