// https://www.codewars.com/kata/5592fc599a7f40adac0000a8

let sum = (arr) => {
  const firstDiagonal = arr
    .map((a, elId) => a.filter((el, id) => id === elId))
    .reduce((a, b) => a + b[0], 0);

  let secondDiagonal = arr
    .map((a, elId) => a.filter((el, id) => id === a.length - 1 - elId))
    .reduce((a, b) => a + b[0], 0);

  return firstDiagonal + secondDiagonal;
};
