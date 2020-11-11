// https://www.codewars.com/kata/5aff237c578a14752d0035ae

const predictAge = (...arr) => {
  let result = Math.sqrt(arr.map((el) => el * el).reduce((a, b) => a + b)) / 2;
  return Math.floor(result);
};

predictAge([65, 60, 75, 55, 60, 63, 64, 45]);
