// https://www.codewars.com/kata/5868812b15f0057e05000001

const tailSwap = (arr) => {
  arr = arr.map((a) => a.split(':'));
  let temp = arr[0][1];
  arr[0][1] = arr[1][1];
  arr[1][1] = temp;
  return arr.map((a) => a.join(':'));
};