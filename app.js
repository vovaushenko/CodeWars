// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

const maxTriSum = (arr) =>
  [...new Set(arr)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b);

console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));
