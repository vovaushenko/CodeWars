// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// @desc:naive approach
const minSubArrayLen = (target: number, nums: number[]): number => {
  let minLength = +Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return 1;

    let tempSum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      tempSum += nums[j];
      if (tempSum >= target) {
        minLength = Math.min(minLength, j - i + 1);
      }
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
