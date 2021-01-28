// https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript

Math.round = function (number) {
  return number - ~~number >= 0.5 ? ~~number + 1 : ~~number;
};

Math.ceil = function (number) {
  return number % 1 == 0 ? number : ~~number + 1;
};

Math.floor = function (number) {
  return ~~number;
};
