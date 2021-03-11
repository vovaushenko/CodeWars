// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = (nums: number[]): number =>
  nums.reduce(
    (evenCounter, digit) => (!(String(digit).length % 2) ? evenCounter + 1 : evenCounter),
    0
  );

console.log(findNumbers([1, 2, 3, 44, 55, 66, 66]));
