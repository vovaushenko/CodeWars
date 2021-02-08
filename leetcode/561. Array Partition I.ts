// 561. Array Partition I

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

const arrayPairSum = (nums: number[]): number => {
  nums.sort((a, b) => a - b);
  let res = 0;
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    res += Math.min(nums[i], nums[j]);
    i += 2;
    j += 2;
  }

  return res;
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
