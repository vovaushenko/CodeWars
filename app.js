// https://www.codewars.com/kata/598057c8d95a04f33f00004e

const range = (start, end) => Array.from({ length: end - start - 1 }, (_, id) => id + start + 1);

console.log(range(2, 9));
