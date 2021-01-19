// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArr = nums1.concat(nums2).sort((a, b) => a - b);
  let mid = Math.floor(mergedArr.length / 2);
  return mergedArr.length % 2 !== 0 ? mergedArr[mid] : (mergedArr[mid] + mergedArr[mid - 1]) / 2;
};
