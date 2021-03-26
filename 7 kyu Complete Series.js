// https://www.codewars.com/kata/580a4001d6df740d61000301

const completeSeries = (arr) =>
  [...new Set(arr)].length !== arr.length
    ? [0]
    : Array.from({ length: Math.max(...arr) + 1 }, (_, id) => id);
