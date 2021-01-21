//
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

const findDuplicate = (nums) => {
  const map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  for (let key in map) {
    if (map[key] > 1) return +key;
  }
};
