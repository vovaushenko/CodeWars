// https://www.codewars.com/kata/5a7893ef0025e9eb50000013

const maxGap = (arr) => {
  // sort
  arr = arr.sort((a, b) => a - b);
  let maxDiff = 0;
  // find max diff
  for (let i = 0; i < arr.length - 1; i++) {
    maxDiff = Math.max(maxDiff, Math.abs(arr[i] - arr[i + 1]));
  }
  return maxDiff;
};
