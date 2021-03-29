// https://www.codewars.com/kata/59b710ed70a3b7dd8f000027

const isAllPossibilities = (x) =>
  x.length
    ? Array.from({ length: x.length }, (_, id) => id).every((num) => x.includes(num))
    : 'false';
