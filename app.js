// https://www.codewars.com/kata/56853c44b295170b73000007

const isSquare = (arr) => (arr.length ? arr.every((num) => !(Math.sqrt(num) % 1)) : undefined);

console.log(isSquare([1, 4, 9, 16]));

console.log(Math.sqrt(16) % 1);
