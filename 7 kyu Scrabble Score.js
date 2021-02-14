// https://www.codewars.com/kata/558fa34727c2d274c10000ae

const scrabbleScore = (str) =>
  [...str]
    .map((char) => $dict[char.toUpperCase()])
    .filter((num) => num)
    .reduce((a, b) => a + b, 0);
