// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

const longestConsec = (arr, k) => {
  if (k > arr.length || k == 0) return '';
  let longest = 0;
  let longestCombination;
  for (let i = 0; i < arr.length; i++) {
    let curr = '';
    for (let j = i; j < i + k && j < arr.length; j++) {
      curr += arr[j];
      if (curr.length > longest) {
        longest = curr.length;
        longestCombination = curr;
      }
    }
  }
  return longestCombination;
};