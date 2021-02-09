// https://www.codewars.com/kata/581dc1852d68e751180000c6

Array.prototype.insert = function (id, val) {
  this.splice(id, 0, val);
  return this;
};

Object.defineProperty(Array.prototype, 'insert', { enumerable: false });
