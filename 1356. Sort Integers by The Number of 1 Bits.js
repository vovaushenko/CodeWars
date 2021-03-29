// 1356. Sort Integers by The Number of 1 Bits
// Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the sorted array.

const numberOfOnes = (num: number): number =>
  [...num.toString(2)].filter((digit) => digit === '1').length;

const sortByBits = (arr: number[]): number[] =>
  arr.sort((a, b) =>
    numberOfOnes(a) !== numberOfOnes(b) ? numberOfOnes(a) - numberOfOnes(b) : a - b
  );
