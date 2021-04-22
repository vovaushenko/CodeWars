// https://www.codewars.com/kata/57066708cb7293901a0013a1

const fistBeard = (arr) =>
  arr
    .reduce((flat, el) => flat.concat(...el.map((char) => String.fromCharCode(char))), [])
    .join('');

console.log(
  fistBeard([
    [70, 97, 99],
    [101, 45, 75, 105, 99, 107],
  ])
);
