// https://www.codewars.com/kata/57b6f850a6fdc76523001162

const counterEffect = (num) =>
  [...(num + '')].map((n) => Array.from({ length: Number(n) + 1 }, (_, id) => id));

console.log(counterEffect('0000'));

// Array.from({ length: n + 1 }, (_, id) => id)
