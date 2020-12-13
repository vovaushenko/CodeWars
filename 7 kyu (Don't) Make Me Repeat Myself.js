// https://www.codewars.com/kata/5241de3d8d333fefe30006a1

String.prototype.repeat = function (count) {
  return Array.from({ length: count }, () => this).join('');
};
