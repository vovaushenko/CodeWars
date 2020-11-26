// https://www.codewars.com/kata/567de72e8b3621b3c300000b

String.prototype.isLetter = function () {
  if (this.length !== 1) return false;
  return /^[a-zA-Z]+$/.test(this);
};
