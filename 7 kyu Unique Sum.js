// https://www.codewars.com/kata/56b1eb19247c01493a000065

const uniqueSum = (arr) => (arr.length ? [...new Set(arr)].reduce((a, b) => a + b, 0) : null);