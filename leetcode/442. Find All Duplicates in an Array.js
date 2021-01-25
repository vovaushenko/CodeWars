// 442. Find All Duplicates in an Array
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.
const findDuplicates = (nums) => {
  const map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  let result = [];
  for (let key in map) {
    if (map[key] == 2) result.push(+key);
  }
  return result;
};
