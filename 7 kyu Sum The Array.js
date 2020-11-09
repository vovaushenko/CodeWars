// https://www.codewars.com/kata/55e3f27d5dee52d8dd0000a9

Array.prototype.sum = function () {
  return this.length === 0 ? 0 : this.reduce((total, num) => total + num);
};
