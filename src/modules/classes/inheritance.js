var EventEmitter = require('events').EventEmitter;

class Greetr extends EventEmitter {
  constructor() {
    // work completely like EventEmitter.call(this) + inherits
    super();
  }

  // become prototype
  greet(data) {
    console.log('EventData, ', data);
    // this function comes from super class (EventEmitter)
    this.emit('greet', data);
  }
}

module.exports = Greetr;
