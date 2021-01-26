// https://www.codewars.com/kata/52f4261c95d6bff39a003096

const maxContiguousSum = (arr) => {
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0;
    for (let j = i; j < arr.length; j++) {
      tempSum += arr[j];
      maxSum = Math.max(maxSum, tempSum);
    }
  }
  return maxSum;
};
