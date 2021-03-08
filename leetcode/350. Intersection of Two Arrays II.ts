// 350. Intersection of Two Arrays II
// Given two arrays, write a function to compute their intersection.

const intersect = (nums1: number[], nums2: number[]): number[] => {
  const map1: { [key: string]: number } = {};
  const map2: { [key: string]: number } = {};

  for (let num of nums1) {
    map1[num] ? map1[num]++ : (map1[num] = 1);
  }
  for (let num of nums2) {
    map2[num] ? map2[num]++ : (map2[num] = 1);
  }

  const result = [];

  for (let key in map1) {
    if (key in map2) {
      for (let i = 0; i < Math.min(map1[key], map2[key]); i++) {
        result.push(+key);
      }
    }
  }

  return result;
};
