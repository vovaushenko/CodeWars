// https://www.codewars.com/kata/5a63948acadebff56f000018

const maxProduct = (arr, num) =>
  arr
    .sort((a, b) => b - a)
    .slice(0, num)
    .reduce((a, b) => a * b, 1);
// arr
//   .sort((a, b) => b - a)
//   .slice(0, num)
//   .reduce((total, val) => total + val);

maxProduct([4, 3, 5], 2);
