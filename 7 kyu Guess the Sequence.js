// https://www.codewars.com/kata/5b45e4b3f41dd36bf9000090

const sequence = (x) =>
  Array.from({ length: x }, (_, id) => id + 1).sort((a, b) => (a + '')[0] - (b + '')[0]);

console.log(sequence(80));
