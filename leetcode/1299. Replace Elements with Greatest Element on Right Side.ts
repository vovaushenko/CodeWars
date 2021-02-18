// 1299. Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

const replaceElements = (arr: number[]): number[] =>
  arr.map((_, id1) =>
    id1 !== arr.length - 1 ? Math.max(...arr.filter((_, id2) => id2 > id1)) : -1
  );
