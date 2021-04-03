// https://www.codewars.com/kata/581351c40d8f13bc450008b8

Array.prototype.first = function () {
  if (!this.length) return undefined;
  return this[0];
};
Array.prototype.last = function () {
  if (!this.length) return undefined;
  return this[this.length - 1];
};
