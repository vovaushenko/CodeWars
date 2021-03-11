// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = (nums: number[]): any =>
  nums.map((digit) => digit + '').filter((digit) => !(digit.length % 2)).length;
