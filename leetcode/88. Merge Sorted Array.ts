// 88. Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

const merge = (a1: number[], m: number, a2: number[], n: number): void => {
  a1.splice(m, a1.length - m).concat(a2);
  for (let num of a2) a1.push(num);
  a1.sort((a, b) => a - b);
};
