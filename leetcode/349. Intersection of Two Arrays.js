// 349. Intersection of Two Arrays
// Given two arrays, write a function to compute their intersection.

const intersection = (arr1, arr2) => {
  let intersection = [];
  for (let num of arr1) {
    if (arr2.includes(num)) {
      intersection.push(num);
    }
  }

  return [...new Set(intersection)];
};

// Runtime: 72 ms, faster than 97.60% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 40.4 MB, less than 31.89% of JavaScript online submissions for Intersection of Two Arrays.
