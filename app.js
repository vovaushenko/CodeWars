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
