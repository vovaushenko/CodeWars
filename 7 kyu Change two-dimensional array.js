// https://www.codewars.com/kata/581214d54624a8232100005f

const matrix = (matrix) =>
  matrix.map((row, id) => row.map((el, secondId) => (id === secondId ? (el < 0 ? 0 : 1) : el)));
