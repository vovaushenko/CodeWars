// https://www.codewars.com/kata/53fc954904a45eda6b00097f

Array.prototype.even = function () {
  return this.filter(
    (a) => typeof a === 'number' && a % 1 === 0 && a % 2 === 0
  );
};

Array.prototype.odd = function () {
  return this.filter(
    (a) => typeof a === 'number' && a % 1 === 0 && a % 2 !== 0
  );
};

Array.prototype.under = function (x) {
  return this.filter((a) => typeof a === 'number' && a % 1 === 0 && a < x);
};

Array.prototype.over = function (x) {
  return this.filter((a) => typeof a === 'number' && a % 1 === 0 && a > x);
};

Array.prototype.inRange = function (min, max) {
  return this.filter(
    (a) => typeof a === 'number' && a % 1 === 0 && a >= min && a <= max
  );
};