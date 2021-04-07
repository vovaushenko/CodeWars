// 594. Longest Harmonious Subsequence

// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

const findLHS = (nums) => {
  const map = nums.reduce((h, n) => ((h[n] = h[n] + 1 || 1), h), {});

  let longest = 0;

  for (let key in map) {
    if (map[+key + 1]) longest = Math.max(longest, map[key] + map[+key + 1]);
  }

  return longest;
};
