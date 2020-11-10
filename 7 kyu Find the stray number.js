// https://www.codewars.com/kata/57f609022f4d534f05000024

const stray = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
};
