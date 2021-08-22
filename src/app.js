var Greetr = require('./modules/classes/inheritance');
var greet1 = new Greetr();
greet1.on('greet', function (data) {
  console.log('EventData arrived, ', data);
});

var greet2 = new Greetr();

// true: they both share the same prototype
console.log(greet1.__proto__ === greet2.__proto__);
greet1.greet({ a: 1 });
