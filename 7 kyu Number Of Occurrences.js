// https://www.codewars.com/kata/52829c5fe08baf7edc00122b

Array.prototype.numberOfOccurrences = function (el) {
  return this.filter((num) => num === el).length;
};
