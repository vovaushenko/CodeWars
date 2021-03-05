// https://www.codewars.com/kata/58880c6e79a0a3e459000004

const houseNumbersSum = (a) => a.slice(0, a.indexOf(0)).reduce((a, b) => a + b, 0);

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
