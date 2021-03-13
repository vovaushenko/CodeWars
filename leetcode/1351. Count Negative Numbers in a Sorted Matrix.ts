// 1351. Count Negative Numbers in a Sorted Matrix
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

const countNegatives = (grid: number[][]): number =>
  grid.reduce(
    (negativeNumberCounter, row) => negativeNumberCounter + row.filter((num) => num < 0).length,
    0
  );
