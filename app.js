// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

const number = (busStops) =>
  busStops.map((a) => a[0] - a[1]).reduce((a, b) => a + b);

console.log(number([
  [10, 0],
  [3, 5],
  [5, 8],
]));
