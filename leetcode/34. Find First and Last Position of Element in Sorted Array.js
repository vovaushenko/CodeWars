// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

const searchRange = (nums, target) => {
  if (!nums.includes(target)) return [-1, -1];
  if (!nums.length) return [-1, -1];
  let i = 0,
    j = nums.length - 1;

  while (true) {
    if (nums[i] < target) i++;
    if (nums[j] > target) j--;
    if (nums[i] === nums[j]) break;
  }

  return nums[i] === target ? [i, j] : [-1, -1];
};
