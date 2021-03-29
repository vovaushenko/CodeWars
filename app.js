// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145

const bingo = (a) =>
  [...new Set(a.map((d) => String.fromCharCode(64 + d)).filter((c) => 'BINGO'.includes(c)))]
    .length === 5
    ? 'WIN'
    : 'LOSE';

console.log('A'.charCodeAt(0));
console.log('B'.charCodeAt(0));

console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));
