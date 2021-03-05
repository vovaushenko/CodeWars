// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

const maxSubArray = (nums: number[]): number => {
  let maxSum = -Infinity;
  let tempSum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      tempSum += nums[j];
      maxSum = Math.max(tempSum, maxSum);
    }
    tempSum = 0;
  }

  return maxSum;
};
