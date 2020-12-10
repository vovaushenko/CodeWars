// https://www.codewars.com/kata/5a512f6a80eba857280000fc

const nthSmallest = (arr, n) => arr.sort((a, b) => b - a)[n - 1];
