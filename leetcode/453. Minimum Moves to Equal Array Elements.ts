// 453. Minimum Moves to Equal Array Elements

// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment n - 1 elements of the array by 1.

const minMoves = (nums: number[]): number =>
  nums.reduce((a, b) => a + b, 0) - Math.min(...nums) * nums.length;
