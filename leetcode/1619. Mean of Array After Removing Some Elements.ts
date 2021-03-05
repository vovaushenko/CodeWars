// 1619. Mean of Array After Removing Some Elements

// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

const trimMean = (arr: number[]): number =>
  arr
    .sort((a, b) => a - b)
    .slice(Math.round(arr.length * 0.05), -Math.round(arr.length * 0.05))
    .reduce((a, b) => a + b, 0) /
  (arr.length - 2 * arr.length * 0.05);
