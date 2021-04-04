// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

const productExceptSelf = (nums) => {
  const noZeroes = nums.filter((n) => n);
  if (nums.length - noZeroes.length > 1) return Array.from({ length: nums.length }, () => 0);
  const totalProduct = noZeroes.reduce((a, b) => a * b, 1);
  if (nums.length - noZeroes.length === 1) {
    return nums.map((num) => (num ? 0 : totalProduct));
  } else {
    return nums.map((num) => totalProduct / num);
  }
};
