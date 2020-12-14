// https://www.codewars.com/kata/5566b0dd450172dfc4000005

const lengthOfSequence = (arr, num) => {
  if (arr.filter((a) => a === num).length !== 2) return 0;
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) count.push(i);
  }
  return count[1] - count[0] + 1;
};
