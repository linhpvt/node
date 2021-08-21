/*
  We are implemeting emitter as function constructor. So you can create how many Emitter object as you want
  Techiques: combining the use of object, first-class object, array
*/

function Emitter() {
  var _event = {
    events: {},
  };
  this.on = this.on.bind(_event);
  this.off = this.off.bind(_event);
  this.emit = this.emit.bind(_event);
  return this;
}

Emitter.prototype.on = function (eventName, listener) {
  this.events[eventName] = this.events[eventName] || [];
  this.events[eventName].push(listener);
};

Emitter.prototype.emit = function (eventName, data) {
  this.events[eventName] = this.events[eventName] || [];
  this.events[eventName].forEach((listener) => {
    listener(data);
  });
};

Emitter.prototype.off = function (eventName, listener) {
  this.events[eventName] = this.events[eventName] || [];
  var index = this.events[eventName].indexOf(listener);
  if (index >= 0) {
    this.events[eventName].splice(index, 1);
  }
};

module.exports = Emitter;
