// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArr.push(nums1[i]);
      i++;
    } else {
      mergedArr.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    mergedArr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    mergedArr.push(nums2[j]);
    j++;
  }

  let mid = Math.floor(mergedArr.length / 2);
  console.log(mid);

  return mergedArr.length % 2 !== 0 ? mergedArr[mid] : (mergedArr[mid] + mergedArr[mid - 1]) / 2;
};
