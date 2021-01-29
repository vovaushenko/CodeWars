// 704. Binary Search

// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (nums[mid] !== target && start < end) {
    target < nums[mid] ? (end = mid - 1) : (start = mid + 1);

    mid = Math.floor((start + end) / 2);
  }

  return nums[mid] === target ? mid : -1;
};
