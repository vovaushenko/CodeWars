// 560. Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

const subarraySum = (nums: number[], target: number): number => {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    let tempSum = 0;
    for (let j = i; j < nums.length; j++) {
      tempSum += nums[j];
      if (tempSum === target) counter++;
    }
  }

  return counter;
};
