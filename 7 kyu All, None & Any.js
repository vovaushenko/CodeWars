// https://www.codewars.com/kata/54589f3b52756d34d6000158

Array.prototype.all = function (p) {
  return !this.map((el) => p(el)).includes(false);
};

Array.prototype.none = function (p) {
  return !this.map((el) => p(el)).includes(true);
};

Array.prototype.any = function (p) {
  return this.map((el) => p(el)).includes(true);
};
