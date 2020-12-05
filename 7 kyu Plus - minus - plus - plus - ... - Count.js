// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

const catchSignChange = (arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i] * arr[i + 1] < 0 ||
      (arr[i] === 0 && arr[i + 1] < 0) ||
      (arr[i] < 0 && arr[i + 1] === 0)
    ) {
      counter++;
    }
  }
  return counter;
};