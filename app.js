// https://www.codewars.com/kata/5a7893ef0025e9eb50000013

const maxGap = (arr) => {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let gap = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    gap = Math.max(gap, arr[i + 1] - arr[i]);
  }
  return gap;
};

maxGap([13, 10, 5, 2, 9]);
