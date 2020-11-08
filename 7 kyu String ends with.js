// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

const solution = (str, end) => {
  if (str.length < end.length) {
    return false;
  }
  let i = str.length - 1;
  let j = end.length - 1;

  while (i >= 0 && j >= 0) {
    if (str[i] !== end[j]) {
      return false;
    }
    i--;
    j--;
  }
  return true;
};
