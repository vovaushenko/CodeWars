// https://www.codewars.com/kata/5a662a02e626c54e87000123

const isPerfect = (n) =>
  [...n.toString(2)]
    .filter((_, id) => id === 0 || id === [...n.toString(2)].length - 1)
    .reduce((a, b) => a + +b, 0) === 2;

const extraPerfect = (n) =>
  Array.from({ length: n }, (_, id) => id + 1).filter((num) => isPerfect(num) || num === 1);
