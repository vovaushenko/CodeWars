// 1486. XOR Operation in an Array
// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

const xorOperation = (n: number, start: number): number => {
  const nums = Array.from({ length: n }, (_, id) => start + id * 2);
  return nums.reduce((res, num) => res ^ num, 0);
};
