// https://www.codewars.com/kata/58d5e6c114286c8594000027

// not efficient 😌

const arrayManip = (arr) =>
  arr
    .map((num1, id1) => Math.min(...arr.filter((num2, id2) => id2 > id1 && num2 > num1)))
    .map((num) => (num === Infinity ? -1 : num));
