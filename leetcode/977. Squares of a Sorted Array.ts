// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums: number[]): number[] =>
  nums.map((num) => num ** 2).sort((a, b) => a - b);
