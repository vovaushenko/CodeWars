// https://www.codewars.com/kata/52b74e0936d582d9210005ff

String.prototype.reverse = function () {
  return [...this].reverse().join('');
};
