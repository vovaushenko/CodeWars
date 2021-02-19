// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = (arr: number[]): number[] =>
  arr.map((_, id1) => arr.filter((_, id2) => id2 <= id1).reduce((total, n) => total + n, 0));
