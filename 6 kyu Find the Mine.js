// https://www.codewars.com/kata/528d9adf0e03778b9e00067e

const mineLocation = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(1)) return [i, matrix[i].indexOf(1)];
  }
};
