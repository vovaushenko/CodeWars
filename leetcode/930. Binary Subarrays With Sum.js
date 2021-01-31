// 930. Binary Subarrays With Sum
// In an array A of 0s and 1s, how many non-empty subarrays have sum S?

const numSubarraysWithSum = (arr, sum) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0;
    for (let j = i; j < arr.length; j++) {
      tempSum += arr[j];
      if (tempSum === sum) counter++;
    }
  }

  return counter;
};

numSubarraysWithSum([1, 0, 1, 0, 1], 2);
