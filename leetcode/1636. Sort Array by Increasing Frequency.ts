// 1636. Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

const frequencySort = (nums: number[]): number[] => {
  const map: { [key: string]: number } = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  nums.sort((a, b) => (map[a] !== map[b] ? map[a] - map[b] : b - a));

  return nums;
};
