// 162. Find Peak Element
// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

const findPeakElement = (nums) => {
  if (nums.length < 3) return nums.indexOf(Math.max(...nums));
  let i = 0,
    j = 1,
    k = 2;

  while (k < nums.length) {
    if (nums[j] > nums[i] && nums[j] > nums[k]) return j;

    i++;
    j++;
    k++;
  }

  return nums.indexOf(Math.max(...nums));
};
