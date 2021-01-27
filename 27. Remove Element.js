// 27. Remove Element
// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeElement = (nums, val) => {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
  }
  return nums;
};
