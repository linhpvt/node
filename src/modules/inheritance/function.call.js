function inherits(ctor, superCtor) {
  ctor.prototype = superCtor.prototype;
}

// define an Animal function constructor with a property called `name`
function Animal() {
  this.name = 'animal';
}
Animal.prototype.say = function () {
  console.log('The Animal say', this.name);
};
// define a Cat function constructor will have Animal name property
function Cat() {
  // 1. we want to inherit all properties
  Animal.call(this);
  this.color = 'Back';
}

// 2. attach Animal's prototype to Cat's prototype
inherits(Cat, Animal);

Cat.prototype.print = function () {
  console.log(`The name: ${this.name}, Color: ${this.color}`);
};

module.exports.Cat = Cat;
module.exports.Animal = Animal;
