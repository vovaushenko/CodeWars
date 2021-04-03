// https://www.codewars.com/kata/581214d54624a8232100005f

const matrix = (matrix) =>
  matrix.map((row, id) => row.map((el, secondId) => (id === secondId ? (el < 0 ? 0 : 1) : el)));

console.log(
  matrix([
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 0, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6],
  ])
);
