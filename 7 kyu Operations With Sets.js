// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a

const process2Arrays = (a1, a2, intersection = a1.filter((num) => a2.includes(num)).length) => [
  intersection,
  a1.length + a2.length - 2 * intersection,
  a1.length - intersection,
  a2.length - intersection,
];
