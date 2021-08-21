var globalModuleVariable = 0;

function Person(firstname, lastname) {
  // shared by all instances of Person
  globalModuleVariable++;

  this.firstname = firstname;
  this.lastname = lastname;
}
Person.prototype = {
  sayHello: function () {
    console.log(`Hello ${this.firstname}`);
  },
  printFullName: function () {
    console.log(`${this.firstname} ${this.lastname}`);
  },

  printNumberOfInstances: function () {
    console.log(`Number of Person: ${globalModuleVariable}`);
  },
};

module.exports = Person;
