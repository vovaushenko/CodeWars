// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

const sumEvenNumbers = (arr) =>
  arr.filter((a) => a % 2 === 0).reduce((a, total) => total + a);

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));
