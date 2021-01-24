// https://www.codewars.com/kata/5720eb05e8d6c5b24a0014c5

const calculateAletrnatingSum = (row) =>
  row.reduce((sum, num, id) => (id % 2 === 0 ? (sum += num) : (sum -= num)), 0);

const scoreMatrix = (matrix) =>
  matrix.reduce(
    (altSum, row, id) =>
      id % 2 === 0
        ? (altSum += calculateAletrnatingSum(row))
        : (altSum -= calculateAletrnatingSum(row)),
    0
  );
