// 1550. Three Consecutive Odds
// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

const isOdd = (num: number): boolean => num % 2 !== 0;

const threeConsecutiveOdds = (arr: number[]): boolean => {
  let i = 0;
  let j = 1;
  let k = 2;

  while (k < arr.length) {
    if (isOdd(arr[i]) && isOdd(arr[j]) && isOdd(arr[k])) return true;
    i++;
    j++;
    k++;
  }
  return false;
};
