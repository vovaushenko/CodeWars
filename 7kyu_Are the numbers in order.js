// https://www.codewars.com/kata/56b7f2f3f18876033f000307

const inAscOrder = (arr) => {
  let sortedArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      return false;
    }
  }
  return true;
};
