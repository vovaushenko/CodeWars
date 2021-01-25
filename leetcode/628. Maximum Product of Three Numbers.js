// 628. Maximum Product of Three Numbers
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

const maximumProduct = (nums) => {
  nums.sort((a, b) => b - a);
  console.log(nums);

  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
  );
};
