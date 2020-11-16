// https://www.codewars.com/kata/54557d61126a00423b000a45

const shorter_reverse_longer = (...arr) => {
  arr = arr.sort((a, b) => a.length - b.length);
  let short;
  let long;
  if (arr[0].length !== arr[1].length) {
    short = arr[0];
    long = arr[1];
  } else {
    short = arr[1];
    long = arr[0];
  }


  return [
    [...short].join(''),
    [...long].reverse().join(''),
    [...short].join(''),
  ].join('');
};