/**
 * Assign parent's prototype to child's prototype
 * @param {Func} ctor the child function constructor 
 * @param {Func} superCtor the parent function constructor
 * @returns undefined.
 */
function inherits(ctor, superCtor) {
  if (!superCtor.prototype){
    return;
  }
  ctor.prototype = superCtor.prototype;
}

// parent
function Animal(name) {
  
}
Animal.prototype.say = function() {
  console.log('The animal sound', this.sound || 'DEFAULT SOUND')
}

function Cat(name) {
  // private properties
  this.name = name;
}

// inherits
inherits(Cat, Animal);
Cat.prototype.printName() = function() {
  console.log('Cat name, ', this.name)
}

module.exports.Cat = Cat;
module.exports.Animal = Animal;

