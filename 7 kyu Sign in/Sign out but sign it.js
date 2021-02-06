// https://www.codewars.com/kata/543da2dd23ccbd1fb600048e/train/javascript

const sign = (num) => {
  if (num * 1 > 0) return 1;
  if (num * 1 < 0) return -1;
  if (num * 1 === 0) return 0;
  return NaN;
};
