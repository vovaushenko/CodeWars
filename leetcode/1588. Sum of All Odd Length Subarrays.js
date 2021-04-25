// 1588. Sum of All Odd Length Subarrays
// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

const isOdd = (n) => n % 2 !== 0;
const summarizeArray = (arr) => arr.reduce((total, el) => total + el, 0);

const sumOddLengthSubarrays = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    for (let j = i; j < arr.length; j++) {
      tempArr.push(arr[j]);
      if (isOdd(tempArr.length)) total += summarizeArray(tempArr);
    }
    tempArr = [];
  }
  return total;
};
