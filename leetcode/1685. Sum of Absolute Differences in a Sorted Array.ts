// 1685. Sum of Absolute Differences in a Sorted Array
// You are given an integer array nums sorted in non-decreasing order.

// Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.

const getSumAbsoluteDifferences = (nums: number[]): number[] => {
  let i = 0;
  let j = 0;
  let res = [];

  let tempSum = 0;
  while (i < nums.length && j < nums.length) {
    tempSum += Math.abs(nums[i] - nums[j]);
    j++;
    if (j === nums.length) {
      res.push(tempSum);
      i++;
      j = 0;
      tempSum = 0;
    }
  }

  return res;
};
