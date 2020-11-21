// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

const minSum = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  
  let i = 0;
  let j = arr.length - 1;
  let min = 0;
  let mid = Math.floor((i + j) / 2);
  console.log(mid, arr[mid]);
  while (i <= mid && j > mid) {
    min += arr[i] * arr[j];
    i++;
    j--;
  }
  
  return min;
};