<<<<<<< HEAD
// https://www.codewars.com/kata/5b7176768adeae9bc9000056

const indexEqualsValue = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] <= mid) {
    for (let i = 0; i < mid; i++) {
      if (arr[i] === i) {
        return i;
      }
    }
  }

  for (let j = mid; j < arr.length; j++) {
    if (arr[j] === j) {
      return j;
    }
  }

  return -1;
};

console.log(indexEqualsValue([-8, 0, 2, 5]));
=======
var removeDuplicates = function(nums) {
  return [... new Set(nums)]
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
>>>>>>> 7ee9eefe903366c2922f32f1a1d2aab95d6f40f3
