// // 414. Third Maximum Number
// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

const thirdMax = (nums) => {
  nums = [...new Set(nums)].sort((a, b) => b - a);

  return nums[2] || nums[2] === 0 ? nums[2] : nums[0];
};
